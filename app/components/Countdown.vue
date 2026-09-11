<script setup lang="ts">
import { computed } from 'vue'
import { invitation } from '~/config/invitation'
import { useCountdown } from '~/composables/useCountdown'

const { days, hours, minutes, seconds, finished } = useCountdown(invitation.dateISO)

const pad = (n: number) => String(n).padStart(2, '0')

const units = computed(() => [
  { label: 'DAYS', value: days.value },
  { label: 'HOURS', value: hours.value },
  { label: 'MINUTES', value: minutes.value },
  { label: 'SECONDS', value: seconds.value },
])
</script>

<template>
  <section id="countdown" class="section-pad bg-obsidian">
    <div class="mx-auto max-w-3xl text-center">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">Countdown</h2>

      <ClientOnly>
        <p v-if="finished" class="mt-12 font-serif text-2xl italic text-gold">The night has begun.</p>

        <div v-else class="mt-12 grid grid-cols-4 gap-2 sm:gap-6">
          <div v-for="u in units" :key="u.label">
            <p class="font-display text-3xl leading-none text-offwhite sm:text-6xl">{{ pad(u.value) }}</p>
            <p class="mt-2 font-sans text-[10px] tracking-[0.25em] text-silver/70 sm:text-xs">{{ u.label }}</p>
          </div>
        </div>

        <template #fallback>
          <div class="mt-12 grid grid-cols-4 gap-2 sm:gap-6">
            <div v-for="l in ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']" :key="l">
              <p class="font-display text-3xl leading-none text-offwhite/40 sm:text-6xl">00</p>
              <p class="mt-2 font-sans text-[10px] tracking-[0.25em] text-silver/50 sm:text-xs">{{ l }}</p>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>
