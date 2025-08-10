import * as yaml from 'js-yaml';
import type {
  ExpansionPack,
  ExpansionPackConfig,
  Agent,
  Task,
  Template,
  Framework,
  Workflow,
} from '@bmad/shared';
import { extractFrontmatter, parseCommandSyntax } from '@bmad/shared';

export interface LoaderOptions {
  packsDirectory: string;
  fileReader: FileReader;
}

export interface FileReader {
  readFile(path: string): Promise<string>;
  readDir(path: string): Promise<string[]>;
  exists(path: string): Promise<boolean>;
  isDirectory(path: string): Promise<boolean>;
}

export class PackLoader {
  constructor(private options: LoaderOptions) {}

  /**
   * Discover all available expansion packs
   */
  async discoverPacks(): Promise<string[]> {
    const { fileReader } = this.options;
    const entries = await fileReader.readDir('');
    const packIds: string[] = [];

    for (const entry of entries) {
      if (await fileReader.isDirectory(entry)) {
        // Check if it has a config.yaml
        const configPath = `${entry}/config.yaml`;
        if (await fileReader.exists(configPath)) {
          packIds.push(entry);
        }
      }
    }

    return packIds;
  }

  /**
   * Load a complete expansion pack
   */
  async loadPack(packId: string): Promise<ExpansionPack> {
    const packPath = packId;
    
    // Load config
    const config = await this.loadConfig(packPath);
    
    // Load all components
    const [agents, tasks, templates, frameworks, workflows] = await Promise.all([
      this.loadAgents(packPath, packId),
      this.loadTasks(packPath, packId),
      this.loadTemplates(packPath, packId),
      this.loadFrameworks(packPath, packId),
      this.loadWorkflows(packPath, packId),
    ]);

    return {
      config,
      agents,
      tasks,
      templates,
      frameworks,
      workflows,
    };
  }

  /**
   * Load pack configuration
   */
  private async loadConfig(packPath: string): Promise<ExpansionPackConfig> {
    const configPath = `${packPath}/config.yaml`;
    const content = await this.options.fileReader.readFile(configPath);
    const parsed = yaml.load(content) as any;
    
    // Handle both formats: with and without 'pack:' root key
    if (parsed.pack) {
      return parsed.pack as ExpansionPackConfig;
    }
    
    return parsed as ExpansionPackConfig;
  }

  /**
   * Load all agents from a pack
   */
  private async loadAgents(packPath: string, packId: string): Promise<Agent[]> {
    const agentsPath = `${packPath}/agents`;
    if (!await this.options.fileReader.exists(agentsPath)) {
      return [];
    }

    const files = await this.options.fileReader.readDir(agentsPath);
    const agents: Agent[] = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const agent = await this.loadAgent(`${agentsPath}/${file}`, packId);
        if (agent) agents.push(agent);
      }
    }

    return agents;
  }

  /**
   * Load a single agent
   */
  private async loadAgent(filePath: string, packId: string): Promise<Agent | null> {
    try {
      const content = await this.options.fileReader.readFile(filePath);
      const { frontmatter, content: markdown } = extractFrontmatter(content);
      
      // Extract agent ID from filename
      const filename = filePath.split('/').pop()!;
      const id = filename.replace('.md', '');

      // Parse agent content
      const agent = this.parseAgentMarkdown(markdown, id, packId);
      
      // Merge with frontmatter if available
      if (frontmatter) {
        Object.assign(agent, frontmatter);
      }

      return agent;
    } catch (error) {
      console.error(`Error loading agent from ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Parse agent markdown content
   */
  private parseAgentMarkdown(content: string, id: string, packId: string): Agent {
    const lines = content.split('\n');
    const agent: Partial<Agent> = {
      id,
      packId,
      commands: [],
      expertise: [],
      dependencies: {},
    };

    let currentSection = '';
    let activationYaml = '';
    let inActivationBlock = false;
    let inYamlBlock = false;

    for (const line of lines) {
      // Check for YAML block start
      if (line.startsWith('```yaml')) {
        inYamlBlock = true;
        activationYaml = '';
        continue;
      }
      
      // Check for YAML block end
      if (inYamlBlock && line.startsWith('```')) {
        inYamlBlock = false;
        agent.activationYaml = activationYaml.trim();
        
        // Parse the YAML to extract fields
        try {
          const yamlData = yaml.load(activationYaml) as any;
          if (yamlData) {
            // Handle agent section
            if (yamlData.agent) {
              if (yamlData.agent.name) agent.name = yamlData.agent.name;
              if (yamlData.agent.title) agent.role = yamlData.agent.title;
              if (yamlData.agent.role && !agent.role) agent.role = yamlData.agent.role;
              if (yamlData.agent.whenToUse) agent.description = yamlData.agent.whenToUse;
              // Extract expertise as description if no other description
              if (yamlData.agent.expertise && !agent.description) {
                if (Array.isArray(yamlData.agent.expertise)) {
                  agent.expertise = yamlData.agent.expertise;
                  agent.description = yamlData.agent.expertise.join(', ');
                }
              }
              // Extract personality traits
              if (yamlData.agent.personality) {
                if (Array.isArray(yamlData.agent.personality)) {
                  agent.personality = yamlData.agent.personality.join(', ');
                } else if (typeof yamlData.agent.personality === 'string') {
                  agent.personality = yamlData.agent.personality;
                }
              }
            }
            // Handle persona section
            if (yamlData.persona) {
              if (yamlData.persona.role && !agent.role) agent.role = yamlData.persona.role;
              if (yamlData.persona.identity && !agent.description) agent.description = yamlData.persona.identity;
              if (yamlData.persona.style) agent.personality = yamlData.persona.style;
            }
            // Handle old format
            if (yamlData.name) agent.name = yamlData.name;
            if (yamlData.role) agent.role = yamlData.role;
            if (yamlData.activation) agent.description = yamlData.activation;
            if (yamlData.description && !agent.description) {
              agent.description = yamlData.description;
            }
          }
        } catch (e) {
          console.warn('Failed to parse YAML:', e);
        }
        
        continue;
      }
      
      // Collect YAML content
      if (inYamlBlock) {
        activationYaml += line + '\n';
        continue;
      }
      
      // Check for old activation block format
      if (line.includes('activation:') || (line.startsWith('```yaml') && currentSection.toLowerCase() === 'agent activation')) {
        inActivationBlock = true;
        continue;
      }
      if (inActivationBlock && line.startsWith('```')) {
        inActivationBlock = false;
        continue;
      }
      if (inActivationBlock) {
        activationYaml += line + '\n';
        continue;
      }

      // Parse sections
      if (line.startsWith('# ')) {
        const title = line.substring(2).trim();
        // Don't override name if it's already set from YAML
        if (!agent.name || title.toLowerCase() !== 'agent:') {
          agent.name = title;
        }
      } else if (line.startsWith('## ')) {
        currentSection = line.substring(3).trim().toLowerCase();
      } else if (line.startsWith('### ')) {
        // Handle subsections
        const subsection = line.substring(4).trim().toLowerCase();
        if (currentSection === 'commands' && subsection === 'available commands') {
          currentSection = 'commands-list';
        }
      } else if (line.trim()) {
        // Parse content based on current section
        switch (currentSection) {
          case 'role':
            agent.role = line.trim();
            break;
          case 'description':
            agent.description = (agent.description || '') + line.trim() + ' ';
            break;
          case 'personality':
            agent.personality = (agent.personality || '') + line.trim() + ' ';
            break;
          case 'expertise':
            if (line.startsWith('- ')) {
              agent.expertise!.push(line.substring(2).trim());
            }
            break;
          case 'commands-list':
            const command = parseCommandSyntax(line);
            if (command) {
              agent.commands!.push({
                command: command.command,
                description: command.description,
                parameters: command.parameters.map(p => ({
                  name: p.replace(/[<>[\]]/g, ''),
                  type: 'string',
                  description: '',
                  required: p.startsWith('<'),
                })),
              });
            }
            break;
        }
      }
    }

    return agent as Agent;
  }

  /**
   * Load all tasks from a pack
   */
  private async loadTasks(packPath: string, packId: string): Promise<Task[]> {
    const tasksPath = `${packPath}/tasks`;
    if (!await this.options.fileReader.exists(tasksPath)) {
      return [];
    }

    const files = await this.options.fileReader.readDir(tasksPath);
    const tasks: Task[] = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const task = await this.loadTask(`${tasksPath}/${file}`, packId);
        if (task) tasks.push(task);
      }
    }

    return tasks;
  }

  /**
   * Load a single task
   */
  private async loadTask(filePath: string, packId: string): Promise<Task | null> {
    try {
      const content = await this.options.fileReader.readFile(filePath);
      const { frontmatter, content: markdown } = extractFrontmatter(content);
      
      // Extract task ID from filename
      const filename = filePath.split('/').pop()!;
      const id = filename.replace('.md', '');

      // Parse task content
      const task = this.parseTaskMarkdown(markdown, id, packId);
      
      // Merge with frontmatter if available
      if (frontmatter) {
        Object.assign(task, {
          ...frontmatter,
          elicit: frontmatter.elicit ?? true,
        });
      }

      return task;
    } catch (error) {
      console.error(`Error loading task from ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Parse task markdown content
   */
  private parseTaskMarkdown(content: string, id: string, packId: string): Task {
    const lines = content.split('\n');
    const task: Partial<Task> = {
      id,
      packId,
      elicit: true,
      deliverables: [],
      steps: [],
      dependencies: {},
    };

    let currentSection = '';
    let stepCounter = 0;

    for (const line of lines) {
      if (line.startsWith('# ')) {
        task.name = line.substring(2).trim();
      } else if (line.startsWith('## ')) {
        currentSection = line.substring(3).trim().toLowerCase();
      } else if (line.trim()) {
        switch (currentSection) {
          case 'description':
          case 'purpose':
            task.description = (task.description || '') + line.trim() + ' ';
            break;
          case 'deliverables':
            if (line.startsWith('- ')) {
              task.deliverables!.push(line.substring(2).trim());
            }
            break;
          case 'workflow':
          case 'steps':
            if (line.match(/^\d+\./)) {
              stepCounter++;
              task.steps!.push({
                id: `step-${stepCounter}`,
                description: line.replace(/^\d+\.\s*/, '').trim(),
              });
            }
            break;
        }
      }
    }

    return task as Task;
  }

  /**
   * Load all templates from a pack
   */
  private async loadTemplates(packPath: string, packId: string): Promise<Template[]> {
    const templatesPath = `${packPath}/templates`;
    if (!await this.options.fileReader.exists(templatesPath)) {
      return [];
    }

    const files = await this.options.fileReader.readDir(templatesPath);
    const templates: Template[] = [];

    for (const file of files) {
      if (file.endsWith('.yaml') || file.endsWith('.yml') || file.endsWith('.md')) {
        const template = await this.loadTemplate(`${templatesPath}/${file}`, packId);
        if (template) templates.push(template);
      }
    }

    return templates;
  }

  /**
   * Load a single template
   */
  private async loadTemplate(filePath: string, packId: string): Promise<Template | null> {
    try {
      const content = await this.options.fileReader.readFile(filePath);
      const filename = filePath.split('/').pop()!;
      const id = filename.replace(/\.(yaml|yml|md)$/, '');

      if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
        const data = yaml.load(content) as any;
        return {
          id,
          packId,
          name: data.name || id,
          version: data.version || '1.0.0',
          description: data.description || '',
          outputFormat: data.output_format || 'markdown',
          workflow: data.workflow || { mode: 'structured' },
          sections: data.sections || [],
          variables: data.variables || [],
        };
      } else {
        // Parse markdown template
        const { frontmatter } = extractFrontmatter(content);
        return {
          id,
          packId,
          name: frontmatter?.name || id,
          version: frontmatter?.version || '1.0.0',
          description: frontmatter?.description || '',
          outputFormat: frontmatter?.output_format || 'markdown',
          workflow: frontmatter?.workflow || { mode: 'structured' },
          sections: [],
          variables: [],
        };
      }
    } catch (error) {
      console.error(`Error loading template from ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Load all frameworks from a pack
   */
  private async loadFrameworks(packPath: string, packId: string): Promise<Framework[]> {
    const frameworksPath = `${packPath}/frameworks`;
    if (!await this.options.fileReader.exists(frameworksPath)) {
      return [];
    }

    const frameworks: Framework[] = [];
    
    // Check for classic and modern subdirectories
    for (const category of ['classic', 'modern']) {
      const categoryPath = `${frameworksPath}/${category}`;
      if (await this.options.fileReader.exists(categoryPath)) {
        const files = await this.options.fileReader.readDir(categoryPath);
        for (const file of files) {
          if (file.endsWith('.md')) {
            const framework = await this.loadFramework(
              `${categoryPath}/${file}`,
              packId,
              category as 'classic' | 'modern'
            );
            if (framework) frameworks.push(framework);
          }
        }
      }
    }

    // Also check root frameworks directory
    const rootFiles = await this.options.fileReader.readDir(frameworksPath);
    for (const file of rootFiles) {
      if (file.endsWith('.md')) {
        const framework = await this.loadFramework(
          `${frameworksPath}/${file}`,
          packId,
          'modern'
        );
        if (framework) frameworks.push(framework);
      }
    }

    return frameworks;
  }

  /**
   * Load a single framework
   */
  private async loadFramework(
    filePath: string,
    packId: string,
    category: 'classic' | 'modern'
  ): Promise<Framework | null> {
    try {
      const content = await this.options.fileReader.readFile(filePath);
      const { content: markdown } = extractFrontmatter(content);
      
      const filename = filePath.split('/').pop()!;
      const id = filename.replace('.md', '');

      // Parse framework content
      const lines = markdown.split('\n');
      const framework: Partial<Framework> = {
        id,
        packId,
        category,
        steps: [],
      };

      let currentSection = '';

      for (const line of lines) {
        if (line.startsWith('# ')) {
          framework.name = line.substring(2).trim();
        } else if (line.startsWith('## ')) {
          currentSection = line.substring(3).trim().toLowerCase();
        } else if (line.trim()) {
          switch (currentSection) {
            case 'description':
            case 'overview':
              framework.description = (framework.description || '') + line.trim() + ' ';
              break;
            case 'methodology':
              framework.methodology = (framework.methodology || '') + line.trim() + ' ';
              break;
          }
        }
      }

      return framework as Framework;
    } catch (error) {
      console.error(`Error loading framework from ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Load all workflows from a pack
   */
  private async loadWorkflows(packPath: string, packId: string): Promise<Workflow[]> {
    const workflowsPath = `${packPath}/workflows`;
    if (!await this.options.fileReader.exists(workflowsPath)) {
      return [];
    }

    const files = await this.options.fileReader.readDir(workflowsPath);
    const workflows: Workflow[] = [];

    for (const file of files) {
      if (file.endsWith('.md') || file.endsWith('.yaml')) {
        const workflow = await this.loadWorkflow(`${workflowsPath}/${file}`, packId);
        if (workflow) workflows.push(workflow);
      }
    }

    return workflows;
  }

  /**
   * Load a single workflow
   */
  private async loadWorkflow(filePath: string, packId: string): Promise<Workflow | null> {
    try {
      const content = await this.options.fileReader.readFile(filePath);
      const filename = filePath.split('/').pop()!;
      const id = filename.replace(/\.(md|yaml|yml)$/, '');

      if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
        const data = yaml.load(content) as any;
        return {
          id,
          packId,
          name: data.name || id,
          description: data.description || '',
          agents: data.agents || [],
          phases: data.phases || [],
          coordination: data.coordination,
        };
      } else {
        // Parse markdown workflow
        const { frontmatter } = extractFrontmatter(content);
        return {
          id,
          packId,
          name: frontmatter?.name || id,
          description: frontmatter?.description || '',
          agents: frontmatter?.agents || [],
          phases: [],
        };
      }
    } catch (error) {
      console.error(`Error loading workflow from ${filePath}:`, error);
      return null;
    }
  }
}