<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let disabled = false;
  
  let message = '';
  let textarea: HTMLTextAreaElement;

  const dispatch = createEventDispatcher<{
    send: string;
  }>();

  function handleSubmit() {
    if (message.trim() && !disabled) {
      dispatch('send', message.trim());
      message = '';
      
      // Reset textarea height
      if (textarea) {
        textarea.style.height = 'auto';
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }

  function handleInput() {
    // Auto-resize textarea
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="flex gap-3">
  <textarea
    bind:this={textarea}
    bind:value={message}
    on:keydown={handleKeydown}
    on:input={handleInput}
    placeholder="Type a message or command..."
    disabled={disabled}
    rows="1"
    class="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-2 
           focus:outline-none focus:ring-2 focus:ring-bmad-500 focus:border-transparent
           disabled:bg-gray-100 disabled:cursor-not-allowed"
  />
  
  <button
    type="submit"
    disabled={disabled || !message.trim()}
    class="px-4 py-2 bg-bmad-500 text-white rounded-lg font-medium
           hover:bg-bmad-600 focus:outline-none focus:ring-2 focus:ring-bmad-500 focus:ring-offset-2
           disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
  >
    Send
  </button>
</form>