<script lang="ts">
  export let agentName: string = 'Agent';
</script>

<div class="flex gap-3">
  <div class="flex-shrink-0">
    <div class="agent-avatar text-sm bg-gradient-to-br from-bmad-500 to-bmad-600">
      {agentName.charAt(0)}
    </div>
  </div>
  
  <div class="flex-1">
    <div class="text-sm text-gray-600 mb-1">{agentName} is typing</div>
    <div class="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 inline-block">
      <div class="flex gap-1">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  </div>
</div>

<style>
  .agent-avatar {
    @apply w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold;
  }
  
  .typing-dot {
    @apply w-2 h-2 bg-gray-400 rounded-full;
    animation: typing 1.4s infinite;
  }
  
  .typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    30% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }
</style>