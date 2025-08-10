<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { sessionStore } from '../stores/session';
  import { packStore } from '../stores/packs';
  import type { RegisteredPack, ExpansionPack, Agent, HistoryEntry } from '@bmad/shared';
  import ChatMessage from './ChatMessage.svelte';
  import ChatInput from './ChatInput.svelte';
  import AgentList from './AgentList.svelte';
  import TypingIndicator from './TypingIndicator.svelte';
  import { WebSocketService } from '../services/websocket.service';

  export let pack: RegisteredPack;

  const dispatch = createEventDispatcher<{
    back: void;
  }>();

  let expandedPack: ExpansionPack | null = null;
  let selectedAgent: Agent | null = null;
  let wsService: WebSocketService | null = null;
  let messages: HistoryEntry[] = [];
  let loading = true;

  onMount(async () => {
    // Load the full pack data
    expandedPack = await packStore.loadPack(pack.id);
    loading = false;

    // Initialize WebSocket connection
    wsService = new WebSocketService();
    await wsService.connect();

    // Subscribe to messages
    const unsubscribe = wsService.subscribe((message) => {
      handleWebSocketMessage(message);
    });

    return () => {
      unsubscribe();
    };
  });

  onDestroy(() => {
    wsService?.disconnect();
  });

  function handleWebSocketMessage(message: any) {
    // Handle different message types
    switch (message.type) {
      case 'message':
        // Update agent status to idle when message is received
        if (message.payload.agentId) {
          sessionStore.updateAgentStatus(message.payload.agentId, 'idle');
        }
        
        sessionStore.addHistoryEntry({
          type: 'agent',
          actor: message.payload.agentName,
          content: message.payload.content,
          metadata: message.payload.metadata,
        });
        break;
      
      case 'visualization':
        // Update agent status to idle when visualization is received
        if (selectedAgent) {
          sessionStore.updateAgentStatus(selectedAgent.id, 'idle');
        }
        
        sessionStore.addHistoryEntry({
          type: 'agent',
          actor: selectedAgent?.name || 'Agent',
          content: '',
          metadata: {
            visualization: message.payload,
          },
        });
        break;
      
      case 'error':
        // Update agent status to idle on error
        if (selectedAgent) {
          sessionStore.updateAgentStatus(selectedAgent.id, 'idle');
        }
        
        sessionStore.addHistoryEntry({
          type: 'system',
          content: `Error: ${message.payload.message}`,
        });
        break;
      
      case 'status':
        // Handle explicit status updates from server
        if (message.payload.agentId && message.payload.status) {
          sessionStore.updateAgentStatus(message.payload.agentId, message.payload.status);
        }
        break;
    }
  }

  function selectAgent(agent: Agent) {
    selectedAgent = agent;
    sessionStore.activateAgent(agent.id, pack.id);
    
    // Send activation request
    wsService?.send({
      type: 'activation',
      payload: {
        packId: pack.id,
        agentId: agent.id,
      },
    });

    // Add system message - use description or role as fallback
    const agentDescription = agent.description || agent.role || '';
    sessionStore.addHistoryEntry({
      type: 'system',
      content: `${agent.name} activated. ${agentDescription}`,
    });
  }

  function handleSendMessage(event: CustomEvent<string>) {
    const message = event.detail;
    
    // Add user message to history
    sessionStore.addHistoryEntry({
      type: 'user',
      content: message,
    });

    // Send to WebSocket
    if (selectedAgent && wsService) {
      wsService.send({
        type: 'command',
        payload: {
          packId: pack.id,
          agentId: selectedAgent.id,
          command: message,
        },
      });
      
      // Update agent status
      sessionStore.updateAgentStatus(selectedAgent.id, 'thinking');
    }
  }

  // Subscribe to session history
  $: if ($sessionStore.session) {
    messages = $sessionStore.session.history;
  }

  function getAgentColor(agentId: string): string {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
    ];
    
    // Simple hash to consistently assign colors
    let hash = 0;
    for (let i = 0; i < agentId.length; i++) {
      hash = ((hash << 5) - hash) + agentId.charCodeAt(i);
      hash = hash & hash;
    }
    
    return colors[Math.abs(hash) % colors.length];
  }
</script>

<div class="flex h-full">
  <!-- Agent Sidebar -->
  <aside class="w-80 bg-white border-r border-gray-200 overflow-y-auto">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">
        {pack.config.shortTitle || pack.config.name}
      </h2>
      <p class="text-sm text-gray-600 mt-1">
        {pack.config.description}
      </p>
    </div>

    {#if loading}
      <div class="flex justify-center p-8">
        <div class="loading-dots text-2xl text-bmad-600">
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div>
    {:else if expandedPack}
      <AgentList
        agents={expandedPack.agents}
        selectedAgent={selectedAgent}
        on:select={(e) => selectAgent(e.detail)}
      />
    {/if}
  </aside>

  <!-- Chat Area -->
  <main class="flex-1 flex flex-col bg-gray-50">
    {#if selectedAgent}
      <!-- Agent Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="agent-avatar bg-gradient-to-br {getAgentColor(selectedAgent.id)}">
            {selectedAgent.name.charAt(0)}
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">{selectedAgent.name}</h3>
            <p class="text-sm text-gray-600">{selectedAgent.role}</p>
          </div>
          {#if $sessionStore.session}
            {@const agentStatus = $sessionStore.session.activeAgents.find(a => a.agentId === selectedAgent.id)?.status}
            {#if agentStatus && agentStatus !== 'idle'}
              <div class="ml-auto flex items-center gap-2 text-sm text-gray-500">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {agentStatus}
              </div>
            {/if}
          {/if}
        </div>
      </header>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {#each messages as message}
          <ChatMessage {message} />
        {/each}
        
        {#if $sessionStore.session}
          {@const agentStatus = $sessionStore.session.activeAgents.find(a => a.agentId === selectedAgent.id)?.status}
          {#if agentStatus === 'thinking' || agentStatus === 'executing'}
            <TypingIndicator agentName={selectedAgent.name} />
          {/if}
        {/if}
      </div>

      <!-- Input -->
      <div class="border-t border-gray-200 bg-white p-4">
        <ChatInput on:send={handleSendMessage} />
      </div>
    {:else}
      <!-- No Agent Selected -->
      <div class="flex-1 flex items-center justify-center">
        <div class="text-center">
          <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No Agent Selected</h3>
          <p class="text-gray-600">Select an agent from the sidebar to start a conversation</p>
        </div>
      </div>
    {/if}
  </main>
</div>