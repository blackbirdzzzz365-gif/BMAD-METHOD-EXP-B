import type { RegisteredPack, ExpansionPack } from '@bmad/shared';

export class PackService {
  private apiUrl: string;

  constructor() {
    // Determine API URL based on environment
    this.apiUrl = import.meta.env.VITE_API_URL || '/api';
  }

  async discoverPacks(): Promise<RegisteredPack[]> {
    try {
      const response = await fetch(`${this.apiUrl}/packs`);
      if (!response.ok) {
        throw new Error(`Failed to discover packs: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.packs || [];
    } catch (error) {
      console.error('Error discovering packs:', error);
      
      // Fallback to mock data for development
      if (import.meta.env.DEV) {
        return this.getMockPacks();
      }
      
      throw error;
    }
  }

  async loadPack(packId: string): Promise<ExpansionPack | null> {
    try {
      const response = await fetch(`${this.apiUrl}/packs/${packId}`);
      if (!response.ok) {
        throw new Error(`Failed to load pack: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.pack || null;
    } catch (error) {
      console.error(`Error loading pack ${packId}:`, error);
      
      // Fallback to mock data for development
      if (import.meta.env.DEV) {
        return this.getMockPack(packId);
      }
      
      throw error;
    }
  }

  // Mock data for development
  private getMockPacks(): RegisteredPack[] {
    return [
      {
        id: 'bmad-problem-solver',
        config: {
          name: 'bmad-problem-solver',
          version: '1.1.0',
          shortTitle: 'Problem Solver',
          description: 'Comprehensive problem-solving with multi-agent collaboration',
          author: 'BMad Community',
          capabilities: {
            problem_decomposition: 'Break complex problems into manageable parts',
            root_cause_analysis: 'Find underlying causes using multiple frameworks',
            systems_thinking: 'Understand interconnections and feedback loops',
            decision_making: 'Structured evaluation of options and trade-offs',
            visual_thinking: 'Mermaid diagrams and ASCII art for clarity',
          },
        },
        location: '/expansion-packs/bmad-problem-solver',
        loaded: false,
        agents: new Map(),
        tasks: new Map(),
        templates: new Map(),
      },
      {
        id: 'bmad-market-researcher',
        config: {
          name: 'bmad-market-researcher',
          version: '1.1.0',
          shortTitle: 'Market Research',
          description: 'Professional market research and analysis capabilities',
          author: 'BMad Community',
          capabilities: {
            market_sizing: 'TAM/SAM/SOM analysis',
            customer_journey: 'Map customer experiences',
            competitive_analysis: 'Systematic competitor tracking',
            environmental_scanning: 'PESTEL analysis',
          },
        },
        location: '/expansion-packs/bmad-market-researcher',
        loaded: false,
        agents: new Map(),
        tasks: new Map(),
        templates: new Map(),
      },
      {
        id: 'bmad-product-manager',
        config: {
          name: 'bmad-product-manager',
          version: '1.1.0',
          shortTitle: 'Product Management',
          description: 'Complete product management capabilities',
          author: 'BMad Community',
          capabilities: {
            product_strategy: 'Define and execute product vision',
            prioritization: 'RICE and other frameworks',
            okr_planning: 'Objectives and key results',
            lifecycle_management: 'Full product lifecycle',
          },
        },
        location: '/expansion-packs/bmad-product-manager',
        loaded: false,
        agents: new Map(),
        tasks: new Map(),
        templates: new Map(),
      },
    ];
  }

  private getMockPack(packId: string): ExpansionPack | null {
    // Return mock expansion pack data
    const mockPacks = this.getMockPacks();
    const registeredPack = mockPacks.find(p => p.id === packId);
    
    if (!registeredPack) return null;

    return {
      config: registeredPack.config,
      agents: [
        {
          id: 'systems-thinker',
          packId,
          name: 'Dr. Sarah Chen',
          role: 'Systems Thinking Expert',
          description: 'I map complex systems and identify leverage points for maximum impact.',
          expertise: ['Systems dynamics', 'Feedback loops', 'Causal analysis'],
          personality: 'Analytical and holistic thinker',
          commands: [
            {
              command: '/map-system',
              description: 'Create a visual map of system components and relationships',
            },
            {
              command: '/find-loops',
              description: 'Identify reinforcing and balancing feedback loops',
            },
          ],
        },
      ],
      tasks: [
        {
          id: 'comprehensive-problem-analysis',
          packId,
          name: 'Comprehensive Problem Analysis',
          description: 'Multi-agent collaborative problem analysis',
          elicit: true,
          deliverables: ['Problem analysis report', 'Root cause identification'],
          steps: [
            {
              id: 'step-1',
              description: 'Define the problem clearly',
              userPrompt: 'What problem would you like to analyze?',
            },
          ],
        },
      ],
      templates: [],
      frameworks: [],
      workflows: [],
    };
  }
}