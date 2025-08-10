<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Agent } from '@bmad/shared';

  export let agents: Agent[];
  export let selectedAgent: Agent | null = null;

  const dispatch = createEventDispatcher<{
    select: Agent;
  }>();

  function selectAgent(agent: Agent) {
    dispatch('select', agent);
  }
</script>

<div class="p-4 space-y-2">
  <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
    Available Agents ({agents.length})
  </h3>
  
  {#each agents as agent}
    <button
      on:click={() => selectAgent(agent)}
      class="w-full text-left p-3 rounded-lg transition-all duration-200
             {selectedAgent?.id === agent.id 
               ? 'bg-bmad-50 border-2 border-bmad-200' 
               : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}"
    >
      <div class="flex items-start gap-3">
        <div class="agent-avatar text-sm bg-gradient-to-br from-gray-400 to-gray-600 flex-shrink-0">
          {agent.name.charAt(0)}
        </div>
        
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-gray-900 truncate">
            {agent.name}
          </h4>
          <p class="text-sm text-gray-600">
            {agent.role}
            {#if agent.description}
              <span class="text-gray-500"> {agent.description}</span>
            {/if}
          </p>
          
          {#if agent.expertise && agent.expertise.length > 0 && !agent.description?.includes(agent.expertise[0])}
            <div class="mt-2 flex flex-wrap gap-1">
              {#each agent.expertise.slice(0, 2) as skill}
                <span class="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                  {skill}
                </span>
              {/each}
              {#if agent.expertise.length > 2}
                <span class="text-xs text-gray-500">
                  +{agent.expertise.length - 2}
                </span>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </button>
  {/each}
</div>

<style>
  .agent-avatar {
    @apply w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold;
  }
</style>