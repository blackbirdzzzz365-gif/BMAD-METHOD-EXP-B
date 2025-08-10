import * as yaml from 'js-yaml';
import { extractFrontmatter, parseCommandSyntax } from '@bmad/shared';
export class PackLoader {
    options;
    constructor(options) {
        this.options = options;
    }
    /**
     * Discover all available expansion packs
     */
    async discoverPacks() {
        const { fileReader } = this.options;
        const entries = await fileReader.readDir('');
        const packIds = [];
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
    async loadPack(packId) {
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
    async loadConfig(packPath) {
        const configPath = `${packPath}/config.yaml`;
        const content = await this.options.fileReader.readFile(configPath);
        return yaml.load(content);
    }
    /**
     * Load all agents from a pack
     */
    async loadAgents(packPath, packId) {
        const agentsPath = `${packPath}/agents`;
        if (!await this.options.fileReader.exists(agentsPath)) {
            return [];
        }
        const files = await this.options.fileReader.readDir(agentsPath);
        const agents = [];
        for (const file of files) {
            if (file.endsWith('.md')) {
                const agent = await this.loadAgent(`${agentsPath}/${file}`, packId);
                if (agent)
                    agents.push(agent);
            }
        }
        return agents;
    }
    /**
     * Load a single agent
     */
    async loadAgent(filePath, packId) {
        try {
            const content = await this.options.fileReader.readFile(filePath);
            const { frontmatter, content: markdown } = extractFrontmatter(content);
            // Extract agent ID from filename
            const filename = filePath.split('/').pop();
            const id = filename.replace('.md', '');
            // Parse agent content
            const agent = this.parseAgentMarkdown(markdown, id, packId);
            // Merge with frontmatter if available
            if (frontmatter) {
                Object.assign(agent, frontmatter);
            }
            return agent;
        }
        catch (error) {
            console.error(`Error loading agent from ${filePath}:`, error);
            return null;
        }
    }
    /**
     * Parse agent markdown content
     */
    parseAgentMarkdown(content, id, packId) {
        const lines = content.split('\n');
        const agent = {
            id,
            packId,
            commands: [],
            expertise: [],
            dependencies: {},
        };
        let currentSection = '';
        let activationYaml = '';
        let inActivationBlock = false;
        for (const line of lines) {
            // Check for activation block
            if (line.includes('activation:')) {
                inActivationBlock = true;
                continue;
            }
            if (inActivationBlock && line.startsWith('```')) {
                inActivationBlock = false;
                agent.activationYaml = activationYaml.trim();
                continue;
            }
            if (inActivationBlock) {
                activationYaml += line + '\n';
                continue;
            }
            // Parse sections
            if (line.startsWith('# ')) {
                agent.name = line.substring(2).trim();
            }
            else if (line.startsWith('## ')) {
                currentSection = line.substring(3).trim().toLowerCase();
            }
            else if (line.startsWith('### ')) {
                // Handle subsections
                const subsection = line.substring(4).trim().toLowerCase();
                if (currentSection === 'commands' && subsection === 'available commands') {
                    currentSection = 'commands-list';
                }
            }
            else if (line.trim()) {
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
                            agent.expertise.push(line.substring(2).trim());
                        }
                        break;
                    case 'commands-list':
                        const command = parseCommandSyntax(line);
                        if (command) {
                            agent.commands.push({
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
        return agent;
    }
    /**
     * Load all tasks from a pack
     */
    async loadTasks(packPath, packId) {
        const tasksPath = `${packPath}/tasks`;
        if (!await this.options.fileReader.exists(tasksPath)) {
            return [];
        }
        const files = await this.options.fileReader.readDir(tasksPath);
        const tasks = [];
        for (const file of files) {
            if (file.endsWith('.md')) {
                const task = await this.loadTask(`${tasksPath}/${file}`, packId);
                if (task)
                    tasks.push(task);
            }
        }
        return tasks;
    }
    /**
     * Load a single task
     */
    async loadTask(filePath, packId) {
        try {
            const content = await this.options.fileReader.readFile(filePath);
            const { frontmatter, content: markdown } = extractFrontmatter(content);
            // Extract task ID from filename
            const filename = filePath.split('/').pop();
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
        }
        catch (error) {
            console.error(`Error loading task from ${filePath}:`, error);
            return null;
        }
    }
    /**
     * Parse task markdown content
     */
    parseTaskMarkdown(content, id, packId) {
        const lines = content.split('\n');
        const task = {
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
            }
            else if (line.startsWith('## ')) {
                currentSection = line.substring(3).trim().toLowerCase();
            }
            else if (line.trim()) {
                switch (currentSection) {
                    case 'description':
                    case 'purpose':
                        task.description = (task.description || '') + line.trim() + ' ';
                        break;
                    case 'deliverables':
                        if (line.startsWith('- ')) {
                            task.deliverables.push(line.substring(2).trim());
                        }
                        break;
                    case 'workflow':
                    case 'steps':
                        if (line.match(/^\d+\./)) {
                            stepCounter++;
                            task.steps.push({
                                id: `step-${stepCounter}`,
                                description: line.replace(/^\d+\.\s*/, '').trim(),
                            });
                        }
                        break;
                }
            }
        }
        return task;
    }
    /**
     * Load all templates from a pack
     */
    async loadTemplates(packPath, packId) {
        const templatesPath = `${packPath}/templates`;
        if (!await this.options.fileReader.exists(templatesPath)) {
            return [];
        }
        const files = await this.options.fileReader.readDir(templatesPath);
        const templates = [];
        for (const file of files) {
            if (file.endsWith('.yaml') || file.endsWith('.yml') || file.endsWith('.md')) {
                const template = await this.loadTemplate(`${templatesPath}/${file}`, packId);
                if (template)
                    templates.push(template);
            }
        }
        return templates;
    }
    /**
     * Load a single template
     */
    async loadTemplate(filePath, packId) {
        try {
            const content = await this.options.fileReader.readFile(filePath);
            const filename = filePath.split('/').pop();
            const id = filename.replace(/\.(yaml|yml|md)$/, '');
            if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
                const data = yaml.load(content);
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
            }
            else {
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
        }
        catch (error) {
            console.error(`Error loading template from ${filePath}:`, error);
            return null;
        }
    }
    /**
     * Load all frameworks from a pack
     */
    async loadFrameworks(packPath, packId) {
        const frameworksPath = `${packPath}/frameworks`;
        if (!await this.options.fileReader.exists(frameworksPath)) {
            return [];
        }
        const frameworks = [];
        // Check for classic and modern subdirectories
        for (const category of ['classic', 'modern']) {
            const categoryPath = `${frameworksPath}/${category}`;
            if (await this.options.fileReader.exists(categoryPath)) {
                const files = await this.options.fileReader.readDir(categoryPath);
                for (const file of files) {
                    if (file.endsWith('.md')) {
                        const framework = await this.loadFramework(`${categoryPath}/${file}`, packId, category);
                        if (framework)
                            frameworks.push(framework);
                    }
                }
            }
        }
        // Also check root frameworks directory
        const rootFiles = await this.options.fileReader.readDir(frameworksPath);
        for (const file of rootFiles) {
            if (file.endsWith('.md')) {
                const framework = await this.loadFramework(`${frameworksPath}/${file}`, packId, 'modern');
                if (framework)
                    frameworks.push(framework);
            }
        }
        return frameworks;
    }
    /**
     * Load a single framework
     */
    async loadFramework(filePath, packId, category) {
        try {
            const content = await this.options.fileReader.readFile(filePath);
            const { content: markdown } = extractFrontmatter(content);
            const filename = filePath.split('/').pop();
            const id = filename.replace('.md', '');
            // Parse framework content
            const lines = markdown.split('\n');
            const framework = {
                id,
                packId,
                category,
                steps: [],
            };
            let currentSection = '';
            for (const line of lines) {
                if (line.startsWith('# ')) {
                    framework.name = line.substring(2).trim();
                }
                else if (line.startsWith('## ')) {
                    currentSection = line.substring(3).trim().toLowerCase();
                }
                else if (line.trim()) {
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
            return framework;
        }
        catch (error) {
            console.error(`Error loading framework from ${filePath}:`, error);
            return null;
        }
    }
    /**
     * Load all workflows from a pack
     */
    async loadWorkflows(packPath, packId) {
        const workflowsPath = `${packPath}/workflows`;
        if (!await this.options.fileReader.exists(workflowsPath)) {
            return [];
        }
        const files = await this.options.fileReader.readDir(workflowsPath);
        const workflows = [];
        for (const file of files) {
            if (file.endsWith('.md') || file.endsWith('.yaml')) {
                const workflow = await this.loadWorkflow(`${workflowsPath}/${file}`, packId);
                if (workflow)
                    workflows.push(workflow);
            }
        }
        return workflows;
    }
    /**
     * Load a single workflow
     */
    async loadWorkflow(filePath, packId) {
        try {
            const content = await this.options.fileReader.readFile(filePath);
            const filename = filePath.split('/').pop();
            const id = filename.replace(/\.(md|yaml|yml)$/, '');
            if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
                const data = yaml.load(content);
                return {
                    id,
                    packId,
                    name: data.name || id,
                    description: data.description || '',
                    agents: data.agents || [],
                    phases: data.phases || [],
                    coordination: data.coordination,
                };
            }
            else {
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
        }
        catch (error) {
            console.error(`Error loading workflow from ${filePath}:`, error);
            return null;
        }
    }
}
