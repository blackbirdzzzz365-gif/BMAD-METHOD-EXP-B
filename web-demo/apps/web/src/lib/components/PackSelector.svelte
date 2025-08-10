<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { packStore } from '../stores/packs';
  import type { RegisteredPack } from '@bmad/shared';

  const dispatch = createEventDispatcher<{
    select: RegisteredPack;
  }>();

  function selectPack(pack: RegisteredPack) {
    dispatch('select', pack);
  }

  function getPackIcon(packId: string): string {
    const icons: Record<string, string> = {
      'bmad-problem-solver': '🔬',
      'bmad-market-researcher': '📊',
      'bmad-product-manager': '🚀',
      'bmad-strategy-consulting': '🎯',
      'bmad-pmo-agile': '⚡',
      'bmad-startup-advisor': '💡',
    };
    return icons[packId] || '📦';
  }

  function getPackColor(packId: string): string {
    const colors: Record<string, string> = {
      'bmad-problem-solver': 'from-purple-500 to-pink-500',
      'bmad-market-researcher': 'from-blue-500 to-cyan-500',
      'bmad-product-manager': 'from-green-500 to-emerald-500',
      'bmad-strategy-consulting': 'from-orange-500 to-red-500',
      'bmad-pmo-agile': 'from-yellow-500 to-amber-500',
      'bmad-startup-advisor': 'from-indigo-500 to-purple-500',
    };
    return colors[packId] || 'from-gray-500 to-gray-600';
  }
</script>

<div class="max-w-7xl mx-auto p-8">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-gray-900 mb-4">
      Choose an Expansion Pack
    </h2>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      Select a specialized agent pack to begin. Each pack contains expert agents
      designed for specific business domains.
    </p>
  </div>

  {#if $packStore.loading}
    <div class="flex justify-center">
      <div class="loading-dots text-4xl text-bmad-600">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  {:else if $packStore.error}
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
      <p class="font-semibold">Error loading packs</p>
      <p class="text-sm mt-1">{$packStore.error}</p>
    </div>
  {:else if $packStore.packs.length === 0}
    <div class="text-center text-gray-500">
      <p class="text-lg">No expansion packs found.</p>
      <p class="text-sm mt-2">Make sure expansion packs are properly installed.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each $packStore.packs as pack}
        <button
          on:click={() => selectPack(pack)}
          class="pack-card group relative bg-white rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br {getPackColor(pack.id)} opacity-5 group-hover:opacity-10 transition-opacity"></div>
          
          <!-- Content -->
          <div class="relative p-6">
            <!-- Icon -->
            <div class="text-5xl mb-4">{getPackIcon(pack.id)}</div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {pack.config.shortTitle || pack.config.name}
            </h3>
            
            <!-- Version -->
            <div class="text-sm text-gray-500 mb-3">
              v{pack.config.version}
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              {pack.config.description}
            </p>
            
            <!-- Capabilities -->
            {#if pack.config.capabilities}
              <div class="space-y-2">
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Capabilities
                </div>
                <div class="flex flex-wrap gap-2">
                  {#if Array.isArray(pack.config.capabilities)}
                    {#each pack.config.capabilities.slice(0, 3) as capability}
                      {#if typeof capability === 'string'}
                        <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {capability.replace(/_/g, ' ')}
                        </span>
                      {:else if typeof capability === 'object' && capability !== null}
                        {#each Object.entries(capability) as [key, value], i}
                          {#if i === 0}
                            <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full" title={value}>
                              {key.replace(/_/g, ' ')}
                            </span>
                          {/if}
                        {/each}
                      {/if}
                    {/each}
                    {#if pack.config.capabilities.length > 3}
                      <span class="text-xs text-gray-500">
                        +{pack.config.capabilities.length - 3} more
                      </span>
                    {/if}
                  {:else}
                    {#each Object.entries(pack.config.capabilities).slice(0, 3) as [key, description]}
                      <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full" title={typeof description === 'string' ? description : key}>
                        {key.replace(/_/g, ' ')}
                      </span>
                    {/each}
                    {#if Object.keys(pack.config.capabilities).length > 3}
                      <span class="text-xs text-gray-500">
                        +{Object.keys(pack.config.capabilities).length - 3} more
                      </span>
                    {/if}
                  {/if}
                </div>
              </div>
            {/if}
            
            <!-- Hover Indicator -->
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>