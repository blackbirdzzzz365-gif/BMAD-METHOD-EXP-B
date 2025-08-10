import type { 
  Agent, 
  PackRegistry, 
  VisualizationData,
  Task,
  ExpansionPack
} from '@bmad/shared';

interface CommandResponse {
  content: string;
  visualization?: VisualizationData;
  metadata?: Record<string, any>;
}

export class AgentExecutor {
  constructor(private packRegistry: PackRegistry) {}

  async executeCommand(
    agent: Agent, 
    command: string, 
    parameters?: Record<string, any>
  ): Promise<CommandResponse> {
    // Check for help command first
    if (command.trim().toLowerCase() === '*help') {
      return this.showHelp(agent);
    }
    
    // Parse command
    const parsedCommand = this.parseCommand(command);
    
    // Check if it's a known agent command
    const agentCommand = agent.commands.find(c => c.command === parsedCommand.command);
    
    if (agentCommand) {
      return this.executeAgentCommand(agent, agentCommand, parsedCommand.args);
    }
    
    // Otherwise, process as natural language
    return this.processNaturalLanguage(agent, command);
  }

  async executeTask(
    packId: string,
    taskId: string,
    input?: Record<string, any>
  ): Promise<Record<string, any>> {
    const pack = await this.packRegistry.loadPack(packId);
    if (!pack) {
      throw new Error(`Pack ${packId} not found`);
    }

    const task = pack.tasks.find(t => t.id === taskId);
    if (!task) {
      throw new Error(`Task ${taskId} not found`);
    }

    // Simulate task execution
    return {
      taskId,
      status: 'completed',
      outputs: {
        report: `Task ${task.name} completed successfully`,
        deliverables: task.deliverables,
      },
    };
  }

  private parseCommand(input: string): { command: string; args: string[] } {
    const parts = input.trim().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);
    
    return { command, args };
  }

  private showHelp(agent: Agent): CommandResponse {
    let helpContent = `Here are my available commands:\n\n`;
    
    if (agent.commands && agent.commands.length > 0) {
      agent.commands.forEach((cmd, index) => {
        helpContent += `${index + 1}. **${cmd.command}** - ${cmd.description}\n`;
      });
    } else {
      helpContent += `I don't have specific commands configured, but I can help you with:\n`;
      helpContent += `- Natural language questions and requests\n`;
      helpContent += `- Analysis and problem-solving\n`;
      helpContent += `- Strategic thinking and planning\n`;
    }
    
    helpContent += `\nYou can also just chat with me naturally - I'll understand your intent and help accordingly!`;
    
    return {
      content: helpContent,
      metadata: {
        isHelp: true,
        commandCount: agent.commands?.length || 0,
      },
    };
  }

  private async executeAgentCommand(
    agent: Agent,
    command: any,
    args: string[]
  ): Promise<CommandResponse> {
    // Handle common commands that start with *
    if (command.command.startsWith('*')) {
      switch (command.command) {
        case '*market-analysis':
          return this.performMarketAnalysis(agent, args);
        case '*competitor-analysis':
          return this.performCompetitorAnalysis(agent, args);
        case '*value-chain':
          return this.analyzeValueChain(agent, args);
        case '*business-model':
          return this.analyzeBusinessModel(agent, args);
        default:
          return this.genericCommandExecution(agent, command, args);
      }
    }
    
    // Handle slash commands
    switch (command.command) {
      case '/map-system':
        return this.generateSystemMap(agent, args);
      
      case '/find-loops':
        return this.findFeedbackLoops(agent, args);
      
      case '/analyze':
        return this.performAnalysis(agent, args);
      
      case '/breakdown':
        return this.breakdownProblem(agent, args);
      
      case '/investigate':
        return this.investigateRootCause(agent, args);
      
      case '/reframe':
        return this.reframeProblem(agent, args);
      
      default:
        return this.genericCommandExecution(agent, command, args);
    }
  }

  private async processNaturalLanguage(agent: Agent, input: string): Promise<CommandResponse> {
    // Handle startup advisor specific responses
    if (agent.id === 'serial-entrepreneur' || agent.name === 'Alex Chen') {
      return this.handleStartupAdvisorQuery(agent, input);
    } else if (agent.id === 'vc-advisor' || agent.name === 'Sarah Mitchell') {
      return this.handleVCAdvisorQuery(agent, input);
    }
    
    // Default agent responses
    const agentResponses: Record<string, string> = {
      'systems-thinker': `Let me analyze this system for you. "${input}" appears to involve multiple interconnected components. I'll map out the relationships and identify key feedback loops.`,
      'first-principles': `Breaking this down to fundamental truths: "${input}". Let's question our assumptions and rebuild from basic principles.`,
      'critical-analyst': `I'll apply rigorous logical analysis to "${input}". Let me examine the evidence and identify any potential biases or fallacies.`,
      'creative-solver': `Interesting challenge! For "${input}", let me explore some creative approaches and unconventional solutions.`,
      'root-cause-analyst': `I'll investigate the root causes of "${input}". Let's use the 5 Whys technique to dig deeper.`,
      'strategy-consultant': `Let me apply strategic analysis to "${input}". I'll use proven frameworks to provide actionable insights.`,
      'digital-strategist': `Analyzing the digital transformation aspects of "${input}". Let me explore technology-enabled solutions.`,
      'org-design-expert': `Looking at the organizational implications of "${input}". I'll consider structure, culture, and operating model.`,
      'senior-partner': `From a C-suite perspective on "${input}", let me provide strategic guidance based on executive experience.`,
    };

    const response = agentResponses[agent.id] || 
      `I understand you're asking about "${input}". Let me help you with that based on my expertise in ${agent.role || 'business strategy'}.`;

    return {
      content: response,
      metadata: {
        processedAs: 'natural_language',
        confidence: 0.85,
      },
    };
  }

  private async generateSystemMap(agent: Agent, args: string[]): Promise<CommandResponse> {
    const system = args.join(' ') || 'the system';
    
    return {
      content: `I've mapped out the system components and their relationships for ${system}.`,
      visualization: {
        type: 'mermaid',
        title: 'System Map',
        description: `Visual representation of ${system}`,
        content: `graph TB
    A[Input: ${system}] --> B[Process 1]
    B --> C[Process 2]
    B --> D[Process 3]
    C --> E[Output 1]
    D --> E
    D --> F[Output 2]
    E --> G[Feedback Loop]
    G --> B
    
    style A fill:#e1f5e1
    style E fill:#ffe1e1
    style F fill:#ffe1e1
    style G fill:#fff4e1`,
      },
    };
  }

  private async findFeedbackLoops(agent: Agent, args: string[]): Promise<CommandResponse> {
    return {
      content: 'I\'ve identified several feedback loops in the system:',
      visualization: {
        type: 'mermaid',
        title: 'Feedback Loops Analysis',
        content: `graph LR
    A[Action] --> B[Result]
    B --> C[Feedback]
    C --> A
    
    D[Reinforcing Loop] --> E[Growth]
    E --> F[More Growth]
    F --> D
    
    G[Balancing Loop] --> H[Correction]
    H --> I[Stability]
    I --> G`,
      },
    };
  }

  private async performAnalysis(agent: Agent, args: string[]): Promise<CommandResponse> {
    const subject = args.join(' ') || 'the situation';
    
    return {
      content: `Here's my critical analysis of ${subject}:

1. **Evidence Assessment**: The available evidence suggests...
2. **Logical Structure**: The argument follows this pattern...
3. **Potential Biases**: I've identified these cognitive biases...
4. **Conclusion**: Based on rigorous analysis...`,
      metadata: {
        analysisType: 'critical',
        confidenceLevel: 0.9,
      },
    };
  }

  private async breakdownProblem(agent: Agent, args: string[]): Promise<CommandResponse> {
    return {
      content: 'Breaking this down to first principles:',
      visualization: {
        type: 'ascii',
        title: 'First Principles Breakdown',
        content: `
┌─────────────────────────┐
│    Original Problem     │
└───────────┬─────────────┘
            │
    ┌───────┴───────┐
    │               │
┌───▼───┐      ┌───▼───┐
│Assump.│      │ Facts │
│   1   │      │   1   │
└───┬───┘      └───┬───┘
    │              │
┌───▼───┐      ┌───▼───┐
│Assump.│      │ Facts │
│   2   │      │   2   │
└───────┘      └───────┘`,
      },
    };
  }

  private async investigateRootCause(agent: Agent, args: string[]): Promise<CommandResponse> {
    const problem = args.join(' ') || 'the issue';
    
    return {
      content: `Root cause investigation for "${problem}":`,
      visualization: {
        type: 'ascii',
        title: '5 Whys Analysis',
        content: `
Problem: ${problem}

Why 1: Why did this happen?
└─> Initial cause identified

Why 2: Why did the initial cause occur?
└─> Deeper cause found

Why 3: Why did that happen?
└─> Systematic issue revealed

Why 4: Why does this systematic issue exist?
└─> Process gap identified

Why 5: Why was this process gap not addressed?
└─> ROOT CAUSE: Lack of preventive measures`,
      },
    };
  }

  private async reframeProblem(agent: Agent, args: string[]): Promise<CommandResponse> {
    const problem = args.join(' ') || 'the challenge';
    
    return {
      content: `Let me reframe "${problem}" from different perspectives:

**Original Frame**: ${problem}

**Reframe 1 - Opportunity**: What if this is actually a chance to...
**Reframe 2 - Different Stakeholder**: From the customer's view...
**Reframe 3 - Time Perspective**: In 5 years, this might...
**Reframe 4 - Inverse**: What if we did the opposite...
**Reframe 5 - Metaphorical**: This is like...`,
      metadata: {
        technique: 'creative_reframing',
        perspectives: 5,
      },
    };
  }

  private genericCommandExecution(agent: Agent, command: any, args: string[]): CommandResponse {
    return {
      content: `Executing **${command.command}** ${args.length > 0 ? `with parameters: ${args.join(', ')}` : ''}

This command is part of my specialized capabilities. In a full implementation, this would:
- ${command.description}
- Provide detailed analysis and insights
- Generate relevant visualizations or reports

For now, I'm ready to help you with any questions or analysis you need!`,
      metadata: {
        command: command.command,
        args,
        status: 'simulated',
      },
    };
  }

  private async performMarketAnalysis(agent: Agent, args: string[]): Promise<CommandResponse> {
    const market = args.join(' ') || 'the target market';
    
    return {
      content: `## Market Analysis: ${market}

### 1. Market Size & Growth
- **TAM (Total Addressable Market)**: Analyzing the full market potential...
- **SAM (Serviceable Addressable Market)**: Identifying reachable segments...
- **SOM (Serviceable Obtainable Market)**: Realistic capture projections...

### 2. Market Dynamics
- **Growth Rate**: 15-20% CAGR (estimated)
- **Key Drivers**: Digital transformation, changing consumer behavior
- **Barriers**: Regulatory requirements, competitive intensity

### 3. Customer Segments
1. **Enterprise**: Large organizations with complex needs
2. **Mid-Market**: Growing companies seeking scalability
3. **SMB**: Small businesses prioritizing affordability

### 4. Competitive Landscape
- Market leaders hold 45% share
- Fragmented middle tier with specialization
- New entrants focusing on innovation

Would you like me to dive deeper into any specific aspect?`,
      metadata: {
        analysisType: 'market',
        confidence: 0.85,
      },
    };
  }

  private async performCompetitorAnalysis(agent: Agent, args: string[]): Promise<CommandResponse> {
    return {
      content: `## Competitor Analysis Framework

### Direct Competitors
1. **Market Leaders**
   - Strong brand recognition
   - Comprehensive product suite
   - Premium pricing strategy

2. **Challengers**
   - Aggressive growth tactics
   - Feature parity at lower cost
   - Strong in specific verticals

### Competitive Advantages to Leverage
- Superior user experience
- Faster implementation time
- Better customer support
- More flexible pricing

### Strategic Recommendations
1. Differentiate through innovation
2. Focus on underserved segments
3. Build strategic partnerships
4. Enhance value proposition

What specific competitors would you like me to analyze in detail?`,
      visualization: {
        type: 'mermaid',
        title: 'Competitive Positioning',
        content: `graph LR
    A[High Price/High Value] --> B[Market Leaders]
    C[Low Price/Low Value] --> D[Budget Players]
    E[High Price/Low Value] --> F[Vulnerable]
    G[Low Price/High Value] --> H[Disruptors]
    
    style B fill:#ffe1e1
    style H fill:#e1f5e1`,
      },
    };
  }

  private async analyzeValueChain(agent: Agent, args: string[]): Promise<CommandResponse> {
    return {
      content: `## Value Chain Analysis

I'll map out the primary and support activities that create value in your business.

### Primary Activities
1. **Inbound Logistics** → 2. **Operations** → 3. **Outbound Logistics** → 4. **Marketing & Sales** → 5. **Service**

### Support Activities
- Infrastructure
- Human Resource Management
- Technology Development
- Procurement

Each link in the chain represents an opportunity for optimization and differentiation.`,
      metadata: {
        framework: 'porter_value_chain',
      },
    };
  }

  private async analyzeBusinessModel(agent: Agent, args: string[]): Promise<CommandResponse> {
    return {
      content: `## Business Model Canvas Analysis

### 1. Customer Segments
Who are we creating value for?

### 2. Value Propositions
What value do we deliver?

### 3. Channels
How do we reach customers?

### 4. Customer Relationships
What type of relationship do we establish?

### 5. Revenue Streams
How do we generate revenue?

### 6. Key Resources
What assets are essential?

### 7. Key Activities
What must we do well?

### 8. Key Partnerships
Who do we need to work with?

### 9. Cost Structure
What are our major costs?

Would you like to explore any of these components in detail?`,
      metadata: {
        framework: 'business_model_canvas',
      },
    };
  }

  private handleStartupAdvisorQuery(agent: Agent, input: string): CommandResponse {
    // Check for B2B SaaS specific questions
    if (input.toLowerCase().includes('b2b saas') && input.toLowerCase().includes('focus')) {
      return {
        content: `Great question! Building a B2B SaaS startup? Here's what you should focus on first:

**1. Customer Discovery (Weeks 1-4)**
- Talk to 50+ potential customers
- Validate the pain point is real and urgent
- Document specific use cases and workflows
- Get 10+ letters of intent

**2. Build an MVP (Weeks 5-12)**
- Focus on ONE core feature that solves the main pain
- Ship something usable in 6-8 weeks
- Don't over-engineer - use boring tech that works
- Get 5 pilot customers using it

**3. Prove Product-Market Fit (Months 3-6)**
- Target 3 paying customers at $1000+ MRR each
- Track usage metrics religiously
- Iterate based on customer feedback
- Achieve <2% monthly churn

**4. Key Metrics to Track from Day 1:**
- Customer Acquisition Cost (CAC)
- Monthly Recurring Revenue (MRR)
- Churn rate
- Net Revenue Retention (NRR)
- Sales cycle length

**My advice**: Don't raise money until you have $10K MRR. Bootstrap as long as possible. Speed matters more than perfection.

What specific challenge are you facing right now?`,
        metadata: {
          expertise: 'b2b_saas',
          confidence: 0.95,
        },
      };
    }

    // Default startup advice
    return {
      content: `Based on my experience with multiple exits, here's my take on "${input}":

**First Principles:**
1. Customers first, product second
2. Revenue validates everything
3. Speed beats perfection
4. Focus wins over features

**Action Steps:**
- Define your ICP (Ideal Customer Profile)
- Talk to 10 potential customers this week
- Build the simplest possible solution
- Charge from day one

What specific aspect would you like me to dive deeper into?`,
      metadata: {
        approach: 'pragmatic_startup_advice',
      },
    };
  }

  private handleVCAdvisorQuery(agent: Agent, input: string): CommandResponse {
    return {
      content: `From a VC perspective on "${input}":

**What Investors Look For:**
1. **Market Size**: TAM > $1B
2. **Team**: Domain expertise + execution ability
3. **Traction**: MoM growth > 15%
4. **Unit Economics**: LTV:CAC > 3:1
5. **Defensibility**: Network effects, switching costs, or IP

**Key Metrics We Track:**
- MRR growth rate
- Gross margins (>70% for SaaS)
- Burn multiple (<1.5x)
- Pipeline velocity

Would you like me to evaluate your startup's fundability or discuss specific metrics?`,
      metadata: {
        perspective: 'venture_capital',
        confidence: 0.9,
      },
    };
  }
}