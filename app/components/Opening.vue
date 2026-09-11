<script setup lang="ts">
import { invitation } from '~/config/invitation'

defineEmits<{ enter: [] }>()
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-hidden bg-obsidian">
    <img
      :src="invitation.heroImage"
      :alt="`${invitation.name} — Sweet Seventeen`"
      class="absolute inset-0 h-full w-full object-cover"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/60 to-obsidian/90" />

    <div class="relative flex h-full flex-col items-center justify-center px-6 text-center">
      <p class="eyebrow mb-6 text-silver/80">You are invited to</p>

      <h1 class="font-display text-5xl leading-none tracking-wide text-offwhite sm:text-6xl">
        {{ invitation.name }}
      </h1>

      <div class="my-8 flex items-center gap-4">
        <span class="h-px w-10 bg-gold/60" />
        <span class="font-display text-7xl leading-none text-gold sm:text-8xl">{{ invitation.age }}</span>
        <span class="h-px w-10 bg-gold/60" />
      </div>

      <p class="font-serif text-lg italic text-silver">Sweet Seventeen</p>
      <p class="mt-2 font-sans text-xs tracking-[0.3em] text-silver/80">{{ invitation.date.toUpperCase() }}</p>

      <button
        type="button"
        class="group mt-12 inline-flex items-center gap-3 border border-gold/60 px-8 py-4 font-sans text-xs tracking-[0.3em] text-offwhite transition hover:bg-gold hover:text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        @click="$emit('enter')"
      >
        ENTER INVITATION
        <span class="transition group-hover:translate-x-1">→</span>
      </button>
    </div>
  </div>
</template>
