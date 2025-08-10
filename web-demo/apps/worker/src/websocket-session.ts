import type { Env, SessionData, PackData } from './types';
import type { WSMessage } from '@bmad/shared';

export class WebSocketSession {
  private state: DurableObjectState;
  private env: Env;
  private sessions: Map<WebSocket, SessionData>;
  private sessionData: SessionData | null = null;

  constructor(state: DurableObjectState, env: Env) {
    this.state = state;
    this.env = env;
    this.sessions = new Map();
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === '/websocket') {
      // Handle WebSocket upgrade
      const upgradeHeader = request.headers.get('Upgrade');
      if (!upgradeHeader || upgradeHeader !== 'websocket') {
        return new Response('Expected Upgrade: websocket', { status: 426 });
      }

      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      // Accept the WebSocket connection
      this.handleWebSocket(server);

      return new Response(null, {
        status: 101,
        webSocket: client,
      });
    }

    return new Response('Not found', { status: 404 });
  }

  private async handleWebSocket(ws: WebSocket) {
    // Accept the connection
    ws.accept();

    // Initialize session
    const session: SessionData = {
      id: crypto.randomUUID(),
      startTime: Date.now(),
      activeAgents: [],
      context: {
        variables: {},
        assumptions: [],
        decisions: [],
      },
      history: [],
    };

    this.sessions.set(ws, session);
    this.sessionData = session;

    // Handle messages
    ws.addEventListener('message', async (event) => {
      try {
        const message = JSON.parse(event.data as string) as WSMessage;
        await this.handleMessage(ws, message);
      } catch (error) {
        console.error('Error handling message:', error);
        this.sendError(ws, 'Invalid message format');
      }
    });

    // Handle close
    ws.addEventListener('close', () => {
      this.sessions.delete(ws);
      if (this.sessions.size === 0) {
        this.sessionData = null;
      }
    });

    // Send connection confirmation
    this.sendMessage(ws, {
      type: 'connection',
      payload: {
        sessionId: session.id,
        status: 'connected',
      },
    });
  }

  private async handleMessage(ws: WebSocket, message: WSMessage) {
    const session = this.sessions.get(ws);
    if (!session) return;

    switch (message.type) {
      case 'activation':
        await this.handleActivation(ws, message.payload, session);
        break;

      case 'command':
        await this.handleCommand(ws, message.payload, session);
        break;

      case 'task':
        await this.handleTask(ws, message.payload, session);
        break;

      default:
        this.sendError(ws, `Unknown message type: ${message.type}`);
    }
  }

  private async handleActivation(ws: WebSocket, request: any, session: SessionData) {
    try {
      // Load pack from KV
      const pack = await this.env.PACKS_KV.get(`pack:${request.packId}`, 'json') as PackData;
      if (!pack) {
        this.sendError(ws, `Pack ${request.packId} not found`);
        return;
      }

      // Find agent
      const agent = pack.agents?.find(a => a.id === request.agentId);
      if (!agent) {
        this.sendError(ws, `Agent ${request.agentId} not found`);
        return;
      }

      // Update session
      session.activeAgents.push({
        agentId: agent.id,
        packId: request.packId,
        activatedAt: Date.now(),
        state: {},
        status: 'idle',
      });

      // Send activation message
      this.sendMessage(ws, {
        type: 'message',
        payload: {
          agentId: agent.id,
          agentName: agent.name,
          packId: request.packId,
          content: `Hello! I'm ${agent.name}, ${agent.role}. ${agent.description || ''} How can I help you today?`,
          metadata: {
            emotion: 'friendly',
            confidence: 1.0,
          },
        },
      });
    } catch (error) {
      console.error('Activation error:', error);
      this.sendError(ws, 'Failed to activate agent');
    }
  }

  private async handleCommand(ws: WebSocket, request: any, session: SessionData) {
    try {
      // Load pack and agent
      const pack = await this.env.PACKS_KV.get(`pack:${request.packId}`, 'json') as PackData;
      if (!pack) {
        this.sendError(ws, 'Pack not found');
        return;
      }

      const agent = pack.agents?.find(a => a.id === request.agentId);
      if (!agent) {
        this.sendError(ws, 'Agent not found');
        return;
      }

      // Simulate command execution
      const response = await this.executeCommand(agent, request.command);

      // Send response
      if (response.visualization) {
        this.sendMessage(ws, {
          type: 'visualization',
          payload: response.visualization,
        });
      } else {
        this.sendMessage(ws, {
          type: 'message',
          payload: {
            agentId: agent.id,
            agentName: agent.name,
            packId: request.packId,
            content: response.content,
            metadata: response.metadata,
          },
        });
      }
    } catch (error) {
      console.error('Command error:', error);
      this.sendError(ws, 'Failed to execute command');
    }
  }

  private async handleTask(ws: WebSocket, request: any, session: SessionData) {
    // Send progress
    this.sendMessage(ws, {
      type: 'progress',
      payload: {
        taskId: request.taskId,
        phase: 'starting',
        percentage: 0,
        message: 'Initializing task...',
      },
    });

    // Simulate task execution
    setTimeout(() => {
      this.sendMessage(ws, {
        type: 'result',
        payload: {
          taskId: request.taskId,
          success: true,
          outputs: {
            message: 'Task completed successfully',
          },
        },
      });
    }, 2000);
  }

  private async executeCommand(agent: any, command: string): Promise<any> {
    // Simple command simulation for Cloudflare Worker
    const responses: Record<string, any> = {
      '/map-system': {
        content: 'I\'ve mapped out the system components.',
        visualization: {
          type: 'mermaid',
          title: 'System Map',
          content: `graph TB
    A[Input] --> B[Process]
    B --> C[Output]
    C --> D[Feedback]
    D --> A`,
        },
      },
      '/analyze': {
        content: `Analyzing: "${command}"\n\n1. Initial assessment shows...\n2. Key factors include...\n3. Recommended approach...`,
      },
      default: {
        content: `I understand you're asking about "${command}". Let me help you with that using my ${agent.role} expertise.`,
      },
    };

    const cmd = command.split(' ')[0];
    return responses[cmd] || responses.default;
  }

  private sendMessage(ws: WebSocket, message: Omit<WSMessage, 'id' | 'timestamp'>) {
    const fullMessage: WSMessage = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    ws.send(JSON.stringify(fullMessage));
  }

  private sendError(ws: WebSocket, message: string, code: string = 'ERROR') {
    this.sendMessage(ws, {
      type: 'error',
      payload: {
        code,
        message,
        recoverable: true,
      },
    });
  }
}