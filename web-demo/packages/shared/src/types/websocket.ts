/**
 * WebSocket Communication Types
 */

export type WSMessageType = 
  | 'connection'
  | 'activation'
  | 'command'
  | 'task'
  | 'message'
  | 'visualization'
  | 'progress'
  | 'result'
  | 'error'
  | 'consensus'
  | 'handoff'
  | 'ping'
  | 'pong';

export interface WSMessage<T = any> {
  id: string;
  type: WSMessageType;
  timestamp: number;
  payload: T;
}

// Client → Server Messages

export interface ActivationRequest {
  packId: string;
  agentId: string;
  context?: Record<string, any>;
}

export interface CommandRequest {
  packId: string;
  agentId: string;
  command: string;
  parameters?: Record<string, any>;
}

export interface TaskRequest {
  packId: string;
  taskId: string;
  input?: Record<string, any>;
}

// Server → Client Messages

export interface AgentMessage {
  agentId: string;
  agentName: string;
  packId: string;
  content: string;
  metadata?: {
    emotion?: string;
    confidence?: number;
    reasoning?: string;
  };
}

export interface VisualizationData {
  type: 'mermaid' | 'ascii' | 'table' | 'chart';
  content: string;
  title?: string;
  description?: string;
  interactive?: boolean;
}

export interface ProgressUpdate {
  taskId?: string;
  phase: string;
  percentage: number;
  message: string;
  currentStep?: number;
  totalSteps?: number;
}

export interface TaskResult {
  taskId: string;
  success: boolean;
  outputs: Record<string, any>;
  artifacts?: {
    type: string;
    name: string;
    content: string;
  }[];
}

export interface ConsensusUpdate {
  phase: 'debate' | 'voting' | 'synthesis' | 'final';
  participants: {
    agentId: string;
    position: string;
    confidence: number;
  }[];
  currentSpeaker?: string;
  consensusLevel?: number;
}

export interface AgentHandoff {
  fromAgent: string;
  toAgent: string;
  toPack?: string;
  context: Record<string, any>;
  reason: string;
}

export interface ErrorMessage {
  code: string;
  message: string;
  details?: any;
  recoverable?: boolean;
}