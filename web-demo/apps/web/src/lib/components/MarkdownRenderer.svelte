<script lang="ts">
  import { marked } from 'marked';
  
  export let content: string;
  
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  
  $: html = marked(content);
</script>

<div class="markdown-content prose prose-sm max-w-none">
  {@html html}
</div>

<style>
  .markdown-content :global(p) {
    @apply mb-2;
  }
  
  .markdown-content :global(ul) {
    @apply list-disc list-inside mb-2;
  }
  
  .markdown-content :global(ol) {
    @apply list-decimal list-inside mb-2;
  }
  
  .markdown-content :global(li) {
    @apply mb-1;
  }
  
  .markdown-content :global(strong) {
    @apply font-semibold;
  }
  
  .markdown-content :global(em) {
    @apply italic;
  }
  
  .markdown-content :global(code) {
    @apply bg-gray-100 px-1 py-0.5 rounded text-sm font-mono;
  }
  
  .markdown-content :global(pre) {
    @apply bg-gray-100 p-3 rounded mb-2 overflow-x-auto;
  }
  
  .markdown-content :global(pre code) {
    @apply bg-transparent p-0;
  }
  
  .markdown-content :global(blockquote) {
    @apply border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-2;
  }
  
  .markdown-content :global(h1),
  .markdown-content :global(h2),
  .markdown-content :global(h3),
  .markdown-content :global(h4),
  .markdown-content :global(h5),
  .markdown-content :global(h6) {
    @apply font-semibold mb-2 mt-3;
  }
  
  .markdown-content :global(h1) {
    @apply text-xl;
  }
  
  .markdown-content :global(h2) {
    @apply text-lg;
  }
  
  .markdown-content :global(h3) {
    @apply text-base;
  }
</style>