<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <section id="dresscode" class="section-pad bg-charcoal">
    <div class="mx-auto max-w-2xl text-center">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">Dress Code</h2>

      <ul v-reveal class="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
        <li v-for="c in invitation.dressCode" :key="c.name" class="flex flex-col items-center gap-3">
          <span
            class="h-14 w-14 rounded-full border border-white/20"
            :style="{ backgroundColor: c.hex }"
            aria-hidden="true"
          />
          <span class="font-sans text-[11px] tracking-[0.25em] text-silver">{{ c.name }}</span>
        </li>
      </ul>

      <p v-reveal class="mt-12 font-serif text-lg italic text-silver/80">Come dressed for the night.</p>
    </div>
  </section>
</template>
