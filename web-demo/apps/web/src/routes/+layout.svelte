<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  
  // Initialize any global features
  onMount(() => {
    // Add dark mode support if needed
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  <slot />
</div>