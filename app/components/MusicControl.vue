<script setup lang="ts">
defineProps<{ on: boolean }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="fixed bottom-4 right-4 z-40 flex items-center gap-2 border border-white/25 bg-obsidian/80 px-3 py-2 font-sans text-[10px] tracking-[0.25em] text-offwhite backdrop-blur transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    :aria-pressed="on"
    :aria-label="on ? 'Turn background music off' : 'Turn background music on'"
    @click="$emit('toggle')"
  >
    <span
      class="h-1.5 w-1.5 rounded-full"
      :class="on ? 'animate-pulse bg-gold' : 'bg-silver/50'"
      aria-hidden="true"
    />
    {{ on ? 'MUSIC ON' : 'MUSIC OFF' }}
  </button>
</template>
