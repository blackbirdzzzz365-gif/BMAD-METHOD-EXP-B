<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import AgentChat from '$lib/components/AgentChat.svelte';
  import { packStore } from '$lib/stores/packs';
  import { sessionStore } from '$lib/stores/session';
  import type { RegisteredPack } from '@bmad/shared';

  let selectedPack: RegisteredPack | null = null;
  let loading = true;
  let error: string | null = null;

  $: packId = $page.params.packId;

  onMount(async () => {
    try {
      // Initialize session if needed
      if (!$sessionStore.session) {
        await sessionStore.initialize();
      }

      // Discover packs if not already done
      if ($packStore.packs.length === 0) {
        await packStore.discover();
      }

      // Find the selected pack
      selectedPack = $packStore.packs.find(p => p.id === packId) || null;
      
      if (!selectedPack) {
        error = `Pack "${packId}" not found`;
      }
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load pack';
    } finally {
      loading = false;
    }
  });

  function handleBackToPacks() {
    goto('/');
  }
</script>

<svelte:head>
  <title>{selectedPack?.config.shortTitle || selectedPack?.config.name || 'Loading...'} - BMAD Agent Demo</title>
</svelte:head>

<div class="flex flex-col h-screen">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gradient">BMAD Agent Demo</h1>
          {#if selectedPack}
            <span class="ml-4 text-gray-500">
              <span class="text-gray-400">/</span>
              <span class="font-medium">{selectedPack.config.shortTitle || selectedPack.config.name}</span>
            </span>
          {/if}
        </div>
        
        <div class="flex items-center gap-4">
          <button
            on:click={handleBackToPacks}
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Packs
          </button>
          
          <div class="text-sm text-gray-500">
            {#if $sessionStore.session}
              Session: {$sessionStore.session.id.slice(-8)}
            {/if}
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1 overflow-y-auto">
    {#if loading}
      <div class="flex items-center justify-center h-full">
        <div class="text-center">
          <div class="loading-dots text-4xl text-bmad-600 mb-4">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          <p class="text-gray-600">Loading pack...</p>
        </div>
      </div>
    {:else if error}
      <div class="max-w-2xl mx-auto p-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-red-800 mb-2">Error</h2>
          <p class="text-red-700">{error}</p>
          <button
            on:click={handleBackToPacks}
            class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Back to Packs
          </button>
        </div>
      </div>
    {:else if selectedPack}
      <AgentChat pack={selectedPack} on:back={handleBackToPacks} />
    {/if}
  </main>
</div>