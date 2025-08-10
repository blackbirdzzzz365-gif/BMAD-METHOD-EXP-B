import * as yaml from 'js-yaml';
import type {
  ExpansionPack,
  ExpansionPackConfig,
  Agent,
  Task,
  RegisteredPack,
  PackRegistry as IPackRegistry,
} from '@bmad/shared';
import { PackLoader, FileReader } from './loader.js';

export class PackRegistry implements IPackRegistry {
  public packs = new Map<string, RegisteredPack>();
  private loader: PackLoader;

  constructor(
    private packsDirectory: string,
    private fileReader: FileReader
  ) {
    this.loader = new PackLoader({
      packsDirectory,
      fileReader,
    });
  }

  /**
   * Discover all available packs
   */
  async discover(): Promise<RegisteredPack[]> {
    const packIds = await this.loader.discoverPacks();
    const registeredPacks: RegisteredPack[] = [];

    for (const packId of packIds) {
      try {
        // Load just the config for discovery
        const configPath = `${packId}/config.yaml`;
        const configContent = await this.fileReader.readFile(configPath);
        const parsed = yaml.load(configContent) as any;
        
        // Handle both formats: with and without 'pack:' root key
        const config = parsed.pack ? parsed.pack as ExpansionPackConfig : parsed as ExpansionPackConfig;

        const registeredPack: RegisteredPack = {
          id: packId,
          config,
          location: `${this.packsDirectory}/${packId}`,
          loaded: false,
          agents: new Map(),
          tasks: new Map(),
          templates: new Map(),
        };

        this.packs.set(packId, registeredPack);
        registeredPacks.push(registeredPack);
      } catch (error) {
        console.error(`Error discovering pack ${packId}:`, error);
      }
    }

    return registeredPacks;
  }

  /**
   * Register a pack
   */
  register(pack: RegisteredPack): void {
    this.packs.set(pack.id, pack);
  }

  /**
   * Get a registered pack
   */
  get(packId: string): RegisteredPack | undefined {
    return this.packs.get(packId);
  }

  /**
   * Get an agent from a pack
   */
  getAgent(packId: string, agentId: string): Agent | undefined {
    const pack = this.packs.get(packId);
    if (!pack) return undefined;

    // Load pack if not already loaded
    if (!pack.loaded) {
      // This would be async in real implementation
      console.warn(`Pack ${packId} not loaded. Call loadPack() first.`);
      return undefined;
    }

    return pack.agents.get(agentId);
  }

  /**
   * Load a pack's full content
   */
  async loadPack(packId: string): Promise<ExpansionPack | null> {
    const registeredPack = this.packs.get(packId);
    if (!registeredPack) {
      console.error(`Pack ${packId} not found in registry`);
      return null;
    }

    try {
      const pack = await this.loader.loadPack(packId);

      // Update registered pack with loaded data
      registeredPack.loaded = true;
      
      // Index agents
      for (const agent of pack.agents) {
        registeredPack.agents.set(agent.id, agent);
      }

      // Index tasks
      for (const task of pack.tasks) {
        registeredPack.tasks.set(task.id, task);
      }

      // Index templates
      for (const template of pack.templates) {
        registeredPack.templates.set(template.id, template);
      }

      return pack;
    } catch (error) {
      console.error(`Error loading pack ${packId}:`, error);
      return null;
    }
  }

  /**
   * Get all loaded agents across all packs
   */
  getAllAgents(): Agent[] {
    const agents: Agent[] = [];
    for (const pack of this.packs.values()) {
      if (pack.loaded) {
        agents.push(...pack.agents.values());
      }
    }
    return agents;
  }

  /**
   * Get all loaded tasks across all packs
   */
  getAllTasks(): Task[] {
    const tasks: Task[] = [];
    for (const pack of this.packs.values()) {
      if (pack.loaded) {
        tasks.push(...pack.tasks.values());
      }
    }
    return tasks;
  }

  /**
   * Find agents by capability
   */
  findAgentsByCapability(capability: string): Agent[] {
    const matchingAgents: Agent[] = [];
    
    for (const pack of this.packs.values()) {
      if (pack.loaded && pack.config.capabilities) {
        // Check if pack has the capability
        if (capability in pack.config.capabilities) {
          // Add all agents from this pack
          matchingAgents.push(...pack.agents.values());
        }
      }
    }

    return matchingAgents;
  }

  /**
   * Get pack dependencies
   */
  getPackDependencies(packId: string): string[] {
    const pack = this.packs.get(packId);
    if (!pack) return [];
    return pack.config.dependencies || [];
  }

}