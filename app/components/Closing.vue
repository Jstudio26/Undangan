<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <footer class="bg-obsidian px-6 py-28 text-center">
    <div class="mx-auto max-w-2xl">
      <div v-reveal class="space-y-2 font-serif text-2xl italic text-silver sm:text-3xl">
        <p>The night.</p>
        <p>The people.</p>
        <p>The memories.</p>
      </div>

      <h2 v-reveal class="mt-14 font-display text-4xl leading-tight tracking-wide text-offwhite sm:text-5xl">
        Thank You<br />For Celebrating<br />With Me.
      </h2>

      <p v-reveal class="mt-10 font-display text-3xl tracking-wide text-gold">{{ invitation.name }}</p>
      <p v-reveal class="font-display text-5xl leading-none text-offwhite">{{ invitation.age }}</p>
      <p v-reveal class="mt-2 font-sans text-xs tracking-[0.3em] text-silver/70">
        {{ invitation.date.toUpperCase() }}
      </p>

      <p class="mt-16 font-sans text-[10px] tracking-[0.4em] text-silver/40">MADE WITH LOVE.</p>
    </div>
  </footer>
</template>
