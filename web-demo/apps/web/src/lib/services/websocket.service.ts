import type { WSMessage } from '@bmad/shared';
import { generateMessageId } from '@bmad/shared';

type MessageHandler = (message: WSMessage) => void;

export class WebSocketService {
  private ws: WebSocket | null = null;
  private url: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;
  private messageHandlers = new Set<MessageHandler>();
  private messageQueue: WSMessage[] = [];
  private isConnecting = false;
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private heartbeatTimeout: NodeJS.Timeout | null = null;

  constructor() {
    // Determine WebSocket URL based on environment
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = import.meta.env.VITE_WS_URL || `${protocol}//${window.location.host}/ws`;
    this.url = host;
    
    // Initialize session ID if not exists
    if (!localStorage.getItem('bmad_session_id')) {
      localStorage.setItem('bmad_session_id', this.generateSessionId());
    }
  }
  
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async connect(): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN || this.isConnecting) {
      return;
    }

    this.isConnecting = true;

    return new Promise((resolve, reject) => {
      const connectionTimeout = setTimeout(() => {
        if (this.ws?.readyState !== WebSocket.OPEN) {
          this.ws?.close();
          this.isConnecting = false;
          reject(new Error('WebSocket connection timeout'));
        }
      }, 5000); // 5 second timeout

      try {
        this.ws = new WebSocket(this.url);

        this.ws.onopen = () => {
          clearTimeout(connectionTimeout);
          console.log('WebSocket connected');
          this.isConnecting = false;
          this.reconnectAttempts = 0;
          
          // Send any queued messages
          this.flushMessageQueue();
          
          // Send connection message
          this.send({
            type: 'connection',
            payload: {
              sessionId: localStorage.getItem('bmad_session_id'),
            },
          });
          
          // Start heartbeat
          this.startHeartbeat();
          
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data) as WSMessage;
            this.handleMessage(message);
          } catch (error) {
            console.error('Failed to parse WebSocket message:', error);
          }
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          this.isConnecting = false;
          
          // Don't reject if we're already connected (error after connection)
          if (this.ws?.readyState !== WebSocket.OPEN) {
            reject(new Error('Failed to connect to WebSocket'));
          }
        };

        this.ws.onclose = (event) => {
          console.log('WebSocket disconnected', {
            code: event.code,
            reason: event.reason,
            wasClean: event.wasClean
          });
          this.isConnecting = false;
          
          // Only attempt reconnect if it wasn't a clean close
          if (!event.wasClean && event.code !== 1000) {
            this.handleDisconnect();
          }
        };
      } catch (error) {
        this.isConnecting = false;
        reject(error);
      }
    });
  }

  disconnect(): void {
    this.stopHeartbeat();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.messageQueue = [];
    this.reconnectAttempts = 0;
  }
  
  private startHeartbeat(): void {
    this.stopHeartbeat();
    
    // Send ping every 30 seconds
    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.send({ type: 'ping', payload: {} });
        
        // Expect pong within 5 seconds
        this.heartbeatTimeout = setTimeout(() => {
          console.warn('Heartbeat timeout - closing connection');
          this.ws?.close();
        }, 5000);
      }
    }, 30000);
  }
  
  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    if (this.heartbeatTimeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = null;
    }
  }

  send(message: Omit<WSMessage, 'id' | 'timestamp'>): void {
    const fullMessage: WSMessage = {
      ...message,
      id: generateMessageId(),
      timestamp: Date.now(),
    };

    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(fullMessage));
    } else {
      // Queue the message if not connected
      this.messageQueue.push(fullMessage);
      
      // Try to reconnect if not already trying
      if (!this.isConnecting) {
        this.connect();
      }
    }
  }

  subscribe(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler);
    
    // Return unsubscribe function
    return () => {
      this.messageHandlers.delete(handler);
    };
  }

  private handleMessage(message: WSMessage): void {
    // Handle pong messages for heartbeat
    if (message.type === 'pong' && this.heartbeatTimeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = null;
      return;
    }
    
    this.messageHandlers.forEach(handler => {
      try {
        handler(message);
      } catch (error) {
        console.error('Error in message handler:', error);
      }
    });
  }

  private flushMessageQueue(): void {
    while (this.messageQueue.length > 0 && this.ws?.readyState === WebSocket.OPEN) {
      const message = this.messageQueue.shift();
      if (message) {
        this.ws.send(JSON.stringify(message));
      }
    }
  }

  private handleDisconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts);
      console.log(`Attempting to reconnect in ${delay}ms...`);
      
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, delay);
    } else {
      console.error('Max reconnection attempts reached');
      
      // Notify handlers of connection failure
      this.handleMessage({
        id: generateMessageId(),
        type: 'error',
        timestamp: Date.now(),
        payload: {
          code: 'CONNECTION_FAILED',
          message: 'Failed to connect to server after multiple attempts',
          recoverable: false,
        },
      });
    }
  }

  get isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  get connectionState(): string {
    if (!this.ws) return 'disconnected';
    
    switch (this.ws.readyState) {
      case WebSocket.CONNECTING:
        return 'connecting';
      case WebSocket.OPEN:
        return 'connected';
      case WebSocket.CLOSING:
        return 'closing';
      case WebSocket.CLOSED:
        return 'closed';
      default:
        return 'unknown';
    }
  }
}