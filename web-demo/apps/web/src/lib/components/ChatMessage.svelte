<script lang="ts">
  import type { HistoryEntry } from '@bmad/shared';
  import VisualizationRenderer from './VisualizationRenderer.svelte';
  import MarkdownRenderer from './MarkdownRenderer.svelte';

  export let message: HistoryEntry;

  function formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }
</script>

<div class="message-enter flex gap-3 {message.type === 'user' ? 'justify-end' : ''}">
  {#if message.type === 'agent'}
    <div class="flex-shrink-0">
      <div class="agent-avatar text-sm bg-gradient-to-br from-bmad-500 to-bmad-600">
        {message.actor?.charAt(0) || 'A'}
      </div>
    </div>
  {/if}

  <div class="flex-1 max-w-2xl">
    {#if message.type !== 'user' && message.actor}
      <div class="text-sm text-gray-600 mb-1">{message.actor}</div>
    {/if}

    <div class="{message.type === 'user' 
      ? 'bg-bmad-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 inline-block' 
      : message.type === 'system'
      ? 'text-sm text-gray-500 italic'
      : 'bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm border border-gray-100'}">
      
      {#if message.metadata?.visualization}
        <VisualizationRenderer data={message.metadata.visualization} />
      {:else if message.type === 'agent'}
        <MarkdownRenderer content={message.content} />
      {:else}
        <p class="whitespace-pre-wrap">{message.content}</p>
      {/if}
    </div>

    <div class="text-xs text-gray-400 mt-1">
      {formatTime(message.timestamp)}
    </div>
  </div>

  {#if message.type === 'user'}
    <div class="flex-shrink-0">
      <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold text-sm">
        U
      </div>
    </div>
  {/if}
</div>

<style>
  .agent-avatar {
    @apply w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold;
  }
</style>