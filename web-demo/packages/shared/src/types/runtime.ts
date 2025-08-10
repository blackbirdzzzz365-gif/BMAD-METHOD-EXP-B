/**
 * Runtime and Execution Types
 */

import type { Agent, Task, Template, ExpansionPackConfig, ExpansionPack } from './pack.js';

export interface RuntimeConfig {
  mode: 'local' | 'cloud';
  packDirectory?: string;
  wsUrl: string;
  apiUrl?: string;
  auth?: {
    enabled: boolean;
    provider?: 'cloudflare' | 'custom';
  };
  features?: {
    multiAgent?: boolean;
    visualization?: boolean;
    persistence?: boolean;
  };
}

export interface Session {
  id: string;
  userId?: string;
  startTime: Date;
  activeAgents: ActiveAgent[];
  context: SessionContext;
  history: HistoryEntry[];
}

export interface ActiveAgent {
  agentId: string;
  packId: string;
  activatedAt: Date;
  state: Record<string, any>;
  status: 'idle' | 'thinking' | 'executing' | 'waiting';
}

export interface SessionContext {
  currentPack?: string;
  currentTask?: string;
  variables: Record<string, any>;
  assumptions: Assumption[];
  decisions: Decision[];
}

export interface HistoryEntry {
  id: string;
  timestamp: Date;
  type: 'user' | 'agent' | 'system';
  actor?: string;
  content: string;
  metadata?: Record<string, any>;
}

export interface Assumption {
  id: string;
  statement: string;
  confidence: number;
  source: string;
  validatedAt?: Date;
  validationMethod?: string;
}

export interface Decision {
  id: string;
  description: string;
  options: DecisionOption[];
  selectedOption?: string;
  rationale?: string;
  madeBy: string;
  timestamp: Date;
}

export interface DecisionOption {
  id: string;
  description: string;
  pros: string[];
  cons: string[];
  score?: number;
}

export interface ExecutionContext {
  session: Session;
  pack: string;
  agent?: string;
  task?: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
}

export interface AgentCapability {
  name: string;
  description: string;
  inputSchema?: any;
  outputSchema?: any;
}

export interface PackRegistry {
  packs: Map<string, RegisteredPack>;
  discover(): Promise<RegisteredPack[]>;
  register(pack: RegisteredPack): void;
  get(packId: string): RegisteredPack | undefined;
  getAgent(packId: string, agentId: string): Agent | undefined;
  loadPack(packId: string): Promise<ExpansionPack | null>;
  getAllAgents(): Agent[];
  getAllTasks(): Task[];
  findAgentsByCapability(capability: string): Agent[];
  getPackDependencies(packId: string): string[];
}

export interface RegisteredPack {
  id: string;
  config: ExpansionPackConfig;
  location: string;
  loaded: boolean;
  agents: Map<string, Agent>;
  tasks: Map<string, Task>;
  templates: Map<string, Template>;
}