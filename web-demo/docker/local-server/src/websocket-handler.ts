import { WebSocket } from 'ws';
import type { IncomingMessage } from 'http';
import type { 
  WSMessage, 
  ActivationRequest, 
  CommandRequest,
  TaskRequest,
  PackRegistry,
  Session,
  Agent,
  ExpansionPack
} from '@bmad/shared';
import { generateSessionId, generateMessageId } from '@bmad/shared';
import { AgentExecutor } from './agent-executor.js';

export class WebSocketHandler {
  private sessions = new Map<string, Session>();
  private connections = new Map<string, WebSocket>();
  private executors = new Map<string, AgentExecutor>();

  constructor(private packRegistry: PackRegistry) {}

  handleConnection(ws: WebSocket, req: IncomingMessage) {
    let sessionId: string | null = null;

    ws.on('message', async (data) => {
      try {
        const message = JSON.parse(data.toString()) as WSMessage;
        
        // Extract session ID from connection message
        if (message.type === 'connection' && message.payload?.sessionId) {
          sessionId = message.payload.sessionId as string;
          this.connections.set(sessionId, ws);
        }
        
        await this.handleMessage(ws, message, sessionId);
      } catch (error) {
        console.error('Error handling message:', error);
        this.sendError(ws, 'Invalid message format');
      }
    });

    ws.on('close', (code, reason) => {
      console.log(`WebSocket closed: code=${code}, reason=${reason}`);
      if (sessionId) {
        this.connections.delete(sessionId);
        this.executors.delete(sessionId);
      }
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
      // Don't close the connection here, let it handle gracefully
    });
    
    // Send initial ping to verify connection
    ws.ping();
  }

  private async handleMessage(ws: WebSocket, message: WSMessage, sessionId: string | null) {
    console.log('Received message:', message.type);

    switch (message.type) {
      case 'connection':
        await this.handleConnectionMessage(ws, message);
        break;

      case 'activation':
        if (sessionId) {
          await this.handleActivation(ws, message.payload as ActivationRequest, sessionId);
        }
        break;

      case 'command':
        if (sessionId) {
          await this.handleCommand(ws, message.payload as CommandRequest, sessionId);
        }
        break;

      case 'task':
        if (sessionId) {
          await this.handleTask(ws, message.payload as TaskRequest, sessionId);
        }
        break;

      case 'ping':
        // Respond with pong
        this.sendMessage(ws, {
          type: 'pong',
          payload: {}
        });
        break;

      default:
        this.sendError(ws, `Unknown message type: ${message.type}`);
    }
  }

  private async handleConnectionMessage(ws: WebSocket, message: WSMessage) {
    const sessionId = message.payload?.sessionId || generateSessionId();
    
    // Create or retrieve session
    let session = this.sessions.get(sessionId);
    if (!session) {
      session = {
        id: sessionId,
        startTime: new Date(),
        activeAgents: [],
        context: {
          variables: {},
          assumptions: [],
          decisions: [],
        },
        history: [],
      };
      this.sessions.set(sessionId, session);
    }

    // Send connection confirmation
    this.sendMessage(ws, {
      type: 'connection',
      payload: {
        sessionId,
        status: 'connected',
      },
    });
  }

  private async handleActivation(ws: WebSocket, request: ActivationRequest, sessionId: string) {
    try {
      // Load pack if not already loaded
      const pack = await this.packRegistry.loadPack(request.packId);
      if (!pack) {
        this.sendError(ws, `Pack ${request.packId} not found`);
        return;
      }

      // Find agent
      const agent = pack.agents.find(a => a.id === request.agentId);
      if (!agent) {
        this.sendError(ws, `Agent ${request.agentId} not found in pack ${request.packId}`);
        return;
      }

      // Create executor for this session if not exists
      if (!this.executors.has(sessionId)) {
        this.executors.set(sessionId, new AgentExecutor(this.packRegistry));
      }

      // Update session
      const session = this.sessions.get(sessionId);
      if (session) {
        session.activeAgents.push({
          agentId: agent.id,
          packId: request.packId,
          activatedAt: new Date(),
          state: {},
          status: 'idle',
        });
      }

      // Send activation confirmation with greeting
      this.sendMessage(ws, {
        type: 'message',
        payload: {
          agentId: agent.id,
          agentName: agent.name,
          packId: request.packId,
          content: `Hello! I'm ${agent.name}, ${agent.role}. ${agent.description ? agent.description + ' ' : ''}Type \`*help\` to see available commands. How can I assist you today?`,
          metadata: {
            emotion: 'friendly',
            confidence: 1.0,
            isGreeting: true,
          },
        },
      });
    } catch (error) {
      console.error('Activation error:', error);
      this.sendError(ws, 'Failed to activate agent');
    }
  }

  private async handleCommand(ws: WebSocket, request: CommandRequest, sessionId: string) {
    try {
      const executor = this.executors.get(sessionId);
      if (!executor) {
        this.sendError(ws, 'No active session');
        return;
      }

      // Get agent
      const agent = this.packRegistry.getAgent(request.packId, request.agentId);
      if (!agent) {
        this.sendError(ws, 'Agent not found');
        return;
      }

      // Update agent status
      this.updateAgentStatus(sessionId, request.agentId, 'thinking');

      // Execute command
      const response = await executor.executeCommand(agent, request.command, request.parameters);

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

      // Update agent status
      this.updateAgentStatus(sessionId, request.agentId, 'idle');
    } catch (error) {
      console.error('Command execution error:', error);
      this.sendError(ws, 'Failed to execute command');
      this.updateAgentStatus(sessionId, request.agentId, 'idle');
    }
  }

  private async handleTask(ws: WebSocket, request: TaskRequest, sessionId: string) {
    try {
      const executor = this.executors.get(sessionId);
      if (!executor) {
        this.sendError(ws, 'No active session');
        return;
      }

      // Send progress update
      this.sendMessage(ws, {
        type: 'progress',
        payload: {
          taskId: request.taskId,
          phase: 'starting',
          percentage: 0,
          message: 'Initializing task...',
        },
      });

      // Execute task (simplified for now)
      const result = await executor.executeTask(request.packId, request.taskId, request.input);

      // Send result
      this.sendMessage(ws, {
        type: 'result',
        payload: {
          taskId: request.taskId,
          success: true,
          outputs: result,
        },
      });
    } catch (error) {
      console.error('Task execution error:', error);
      this.sendError(ws, 'Failed to execute task');
    }
  }

  private updateAgentStatus(sessionId: string, agentId: string, status: 'idle' | 'thinking' | 'executing' | 'waiting') {
    const session = this.sessions.get(sessionId);
    if (session) {
      const agent = session.activeAgents.find(a => a.agentId === agentId);
      if (agent) {
        agent.status = status;
      }
    }
  }

  private sendMessage(ws: WebSocket, message: Omit<WSMessage, 'id' | 'timestamp'>) {
    const fullMessage: WSMessage = {
      ...message,
      id: generateMessageId(),
      timestamp: Date.now(),
    };

    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(fullMessage));
    }
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