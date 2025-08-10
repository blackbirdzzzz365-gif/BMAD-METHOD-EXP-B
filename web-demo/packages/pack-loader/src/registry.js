import { PackLoader } from './loader.js';
export class PackRegistry {
    packsDirectory;
    fileReader;
    packs = new Map();
    loader;
    constructor(packsDirectory, fileReader) {
        this.packsDirectory = packsDirectory;
        this.fileReader = fileReader;
        this.loader = new PackLoader({
            packsDirectory,
            fileReader,
        });
    }
    /**
     * Discover all available packs
     */
    async discover() {
        const packIds = await this.loader.discoverPacks();
        const registeredPacks = [];
        for (const packId of packIds) {
            try {
                // Load just the config for discovery
                const configPath = `${packId}/config.yaml`;
                const configContent = await this.fileReader.readFile(configPath);
                const config = this.parseYaml(configContent);
                const registeredPack = {
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
            }
            catch (error) {
                console.error(`Error discovering pack ${packId}:`, error);
            }
        }
        return registeredPacks;
    }
    /**
     * Register a pack
     */
    register(pack) {
        this.packs.set(pack.id, pack);
    }
    /**
     * Get a registered pack
     */
    get(packId) {
        return this.packs.get(packId);
    }
    /**
     * Get an agent from a pack
     */
    getAgent(packId, agentId) {
        const pack = this.packs.get(packId);
        if (!pack)
            return undefined;
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
    async loadPack(packId) {
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
        }
        catch (error) {
            console.error(`Error loading pack ${packId}:`, error);
            return null;
        }
    }
    /**
     * Get all loaded agents across all packs
     */
    getAllAgents() {
        const agents = [];
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
    getAllTasks() {
        const tasks = [];
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
    findAgentsByCapability(capability) {
        const matchingAgents = [];
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
    getPackDependencies(packId) {
        const pack = this.packs.get(packId);
        if (!pack)
            return [];
        return pack.config.dependencies || [];
    }
    /**
     * Simple YAML parser (basic implementation)
     */
    parseYaml(content) {
        // This is a very basic implementation
        // In production, use the js-yaml library
        const result = {};
        const lines = content.split('\n');
        for (const line of lines) {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                if (value) {
                    // Handle basic types
                    if (value === 'true')
                        result[key] = true;
                    else if (value === 'false')
                        result[key] = false;
                    else if (!isNaN(Number(value)))
                        result[key] = Number(value);
                    else
                        result[key] = value.replace(/^['"]|['"]$/g, '');
                }
            }
        }
        return result;
    }
}
