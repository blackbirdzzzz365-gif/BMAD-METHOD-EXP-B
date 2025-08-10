/**
 * Expansion Pack Types
 */

export interface ExpansionPackConfig {
  name: string;
  version: string;
  shortTitle: string;
  description: string;
  author: string;
  slashPrefix?: string;
  dependencies?: string[];
  capabilities?: Record<string, string>;
  coreFrameworks?: {
    classic?: Record<string, string>;
    modern?: Record<string, string>;
  };
  visualizationStyles?: string[];
  agentCoordination?: {
    mode: string;
    process: string;
    conflictResolution?: string;
    outputSynthesis?: string;
  };
}

export interface Agent {
  id: string;
  packId: string;
  name: string;
  role: string;
  description: string;
  expertise: string[];
  personality: string;
  commands: AgentCommand[];
  activationYaml?: string;
  dependencies?: {
    tasks?: string[];
    templates?: string[];
    frameworks?: string[];
  };
}

export interface AgentCommand {
  command: string;
  description: string;
  parameters?: CommandParameter[];
  examples?: string[];
}

export interface CommandParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  description: string;
  required?: boolean;
  default?: any;
}

export interface Task {
  id: string;
  packId: string;
  name: string;
  agent?: string;
  description: string;
  elicit: boolean;
  deliverables: string[];
  steps: TaskStep[];
  dependencies?: {
    templates?: string[];
    frameworks?: string[];
  };
}

export interface TaskStep {
  id: string;
  description: string;
  userPrompt?: string;
  agentAction?: string;
  outputType?: 'text' | 'visualization' | 'template';
}

export interface Template {
  id: string;
  packId: string;
  name: string;
  version: string;
  description: string;
  outputFormat: 'markdown' | 'yaml' | 'json' | 'html';
  workflow: {
    mode: 'interactive' | 'structured' | 'checklist';
  };
  sections: TemplateSection[];
  variables: TemplateVariable[];
}

export interface TemplateSection {
  id: string;
  title: string;
  description?: string;
  content: string;
  subsections?: TemplateSection[];
}

export interface TemplateVariable {
  name: string;
  description: string;
  type: string;
  required?: boolean;
  default?: any;
}

export interface Framework {
  id: string;
  packId: string;
  name: string;
  category: 'classic' | 'modern';
  description: string;
  methodology: string;
  steps: FrameworkStep[];
  visualizations?: VisualizationType[];
}

export interface FrameworkStep {
  id: string;
  name: string;
  description: string;
  tools?: string[];
  outputs?: string[];
}

export interface Workflow {
  id: string;
  packId: string;
  name: string;
  description: string;
  agents: string[];
  phases: WorkflowPhase[];
  coordination?: {
    mode: string;
    decisionProcess?: string;
  };
}

export interface WorkflowPhase {
  id: string;
  name: string;
  description: string;
  participants: string[];
  activities: string[];
  outputs: string[];
  duration?: string;
}

export interface ExpansionPack {
  config: ExpansionPackConfig;
  agents: Agent[];
  tasks: Task[];
  templates: Template[];
  frameworks?: Framework[];
  workflows?: Workflow[];
  data?: Record<string, any>;
}

export type VisualizationType = 
  | 'mermaid'
  | 'ascii-art'
  | 'table'
  | 'chart'
  | 'diagram';