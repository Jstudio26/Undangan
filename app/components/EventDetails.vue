<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <section id="event" class="section-pad bg-navy">
    <div class="mx-auto max-w-2xl text-center">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">The Event</h2>

      <p v-reveal class="mt-10 font-sans text-xs tracking-[0.3em] text-gold">{{ invitation.dayName }}</p>
      <p v-reveal class="mt-3 font-serif text-2xl italic text-offwhite">{{ invitation.date }}</p>
      <p v-reveal class="mt-2 font-sans text-sm tracking-[0.2em] text-silver">{{ invitation.time }}</p>

      <div v-reveal class="mx-auto my-8 h-px w-16 bg-white/20" aria-hidden="true" />

      <p v-reveal class="font-display text-2xl tracking-wide text-offwhite">{{ invitation.venue }}</p>
      <p v-reveal class="mt-1 font-sans text-sm text-silver/70">{{ invitation.address }}</p>

      <a
        v-reveal
        :href="invitation.mapsUrl"
        target="_blank"
        rel="noopener"
        class="group mt-10 inline-flex items-center gap-3 border border-gold/60 px-7 py-4 font-sans text-xs tracking-[0.3em] text-offwhite transition hover:bg-gold hover:text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        GET DIRECTIONS
        <span class="transition group-hover:translate-x-1" aria-hidden="true">→</span>
      </a>
    </div>
  </section>
</template>
