<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <section class="relative flex min-h-[100svh] items-center overflow-hidden bg-obsidian">
    <img
      :src="invitation.heroImage"
      :alt="`${invitation.name}, seventeen`"
      class="absolute inset-0 h-full w-full object-cover opacity-60"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/70" />

    <div class="relative w-full px-6 py-28">
      <div class="mx-auto max-w-3xl">
        <span class="block font-display text-[30vw] leading-[0.8] text-offwhite sm:text-[200px]">17</span>
        <p class="eyebrow mt-4">A New Chapter</p>
        <h1 class="mt-6 font-display text-6xl leading-none tracking-wide text-offwhite sm:text-7xl">
          {{ invitation.name }}
        </h1>
        <p class="mt-4 font-serif text-xl italic text-silver">Sweet Seventeen</p>
        <p class="mt-2 font-sans text-xs tracking-[0.3em] text-silver/80">{{ invitation.date.toUpperCase() }}</p>
      </div>
    </div>

    <a
      href="#introduction"
      class="absolute inset-x-0 bottom-8 mx-auto flex w-max flex-col items-center gap-2 font-sans text-[10px] tracking-[0.3em] text-silver/70 transition hover:text-gold"
    >
      SCROLL TO EXPLORE
      <span class="animate-bounce" aria-hidden="true">↓</span>
    </a>
  </section>
</template>
