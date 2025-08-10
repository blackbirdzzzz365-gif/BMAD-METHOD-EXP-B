export interface Env {
  // KV namespace for storing pack data
  PACKS_KV: KVNamespace;
  
  // Durable Objects
  WEBSOCKET_SESSIONS: DurableObjectNamespace;
  
  // Environment variables
  ENVIRONMENT?: string;
}

export interface PackData {
  id: string;
  config: any;
  agents: any[];
  tasks: any[];
  templates: any[];
  frameworks?: any[];
  workflows?: any[];
  lastUpdated: number;
}

export interface SessionData {
  id: string;
  startTime: number;
  activeAgents: any[];
  context: any;
  history: any[];
}