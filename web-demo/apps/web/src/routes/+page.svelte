<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import PackSelector from '$lib/components/PackSelector.svelte';
  import { packStore } from '$lib/stores/packs';
  import { sessionStore } from '$lib/stores/session';
  import type { RegisteredPack } from '@bmad/shared';

  let loading = true;

  onMount(async () => {
    // Initialize session
    await sessionStore.initialize();
    
    // Discover available packs
    await packStore.discover();
    
    loading = false;
  });

  function handlePackSelect(event: CustomEvent<RegisteredPack>) {
    const pack = event.detail;
    goto(`/pack/${pack.id}`);
  }
</script>

<svelte:head>
  <title>BMAD Agent Demo</title>
  <meta name="description" content="Interactive demo for BMAD-METHOD expansion packs" />
</svelte:head>

<div class="flex flex-col h-screen">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gradient">BMAD Agent Demo</h1>
        </div>
        
        <div class="flex items-center gap-4">
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
          <p class="text-gray-600">Discovering expansion packs...</p>
        </div>
      </div>
    {:else}
      <PackSelector on:select={handlePackSelect} />
    {/if}
  </main>
</div>

<style>
  :global(html) {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
</style>