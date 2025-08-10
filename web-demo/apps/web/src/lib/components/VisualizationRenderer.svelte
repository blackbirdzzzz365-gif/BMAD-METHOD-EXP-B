<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';
  import type { VisualizationData } from '@bmad/shared';

  export let data: VisualizationData;

  let container: HTMLElement;
  let mermaidId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  onMount(() => {
    if (data.type === 'mermaid') {
      initializeMermaid();
    }
  });

  async function initializeMermaid() {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      themeVariables: {
        primaryColor: '#0ea5e9',
        primaryTextColor: '#fff',
        primaryBorderColor: '#0284c7',
        lineColor: '#64748b',
        secondaryColor: '#f3f4f6',
        tertiaryColor: '#e5e7eb',
      },
    });

    try {
      const { svg } = await mermaid.render(mermaidId, data.content);
      if (container) {
        container.innerHTML = svg;
      }
    } catch (error) {
      console.error('Mermaid rendering error:', error);
    }
  }
</script>

{#if data.title}
  <h4 class="font-medium text-gray-900 mb-2">{data.title}</h4>
{/if}

{#if data.description}
  <p class="text-sm text-gray-600 mb-3">{data.description}</p>
{/if}

{#if data.type === 'mermaid'}
  <div bind:this={container} class="mermaid-container">
    <!-- Mermaid diagram will be rendered here -->
  </div>
{:else if data.type === 'ascii'}
  <pre class="ascii-art">{data.content}</pre>
{:else if data.type === 'table'}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <!-- Table parsing would go here -->
      {@html data.content}
    </table>
  </div>
{:else if data.type === 'chart'}
  <div class="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
    <p>Chart visualization coming soon</p>
    <pre class="mt-2 text-xs text-left">{data.content}</pre>
  </div>
{:else}
  <pre class="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">{data.content}</pre>
{/if}

<style>
  .mermaid-container {
    @apply bg-white rounded-lg border border-gray-200 p-4 overflow-x-auto;
  }

  .ascii-art {
    @apply font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto;
    white-space: pre;
    line-height: 1.2;
  }

  table {
    @apply text-sm text-gray-900;
  }

  table th {
    @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50;
  }

  table td {
    @apply px-6 py-4 whitespace-nowrap;
  }
</style>