<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <section id="story" class="section-pad bg-charcoal">
    <div class="mx-auto max-w-3xl">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">
        17 Years of His Story
      </h2>

      <ol class="mt-14 border-l border-white/15">
        <li
          v-for="item in invitation.story"
          :key="item.year"
          v-reveal
          class="relative pb-12 pl-8 last:pb-0"
        >
          <span class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
          <p class="font-display text-3xl leading-none text-gold">{{ item.year }}</p>
          <p class="mt-2 font-sans text-xs tracking-[0.3em] text-offwhite">{{ item.title }}</p>
          <p class="mt-3 max-w-prose font-sans text-sm leading-relaxed text-silver/70">{{ item.text }}</p>
        </li>
      </ol>

      <div v-if="invitation.storyPhotos.length" class="mt-12 grid grid-cols-2 gap-4">
        <img
          v-for="(src, i) in invitation.storyPhotos"
          :key="src"
          :src="src"
          :alt="`A moment from the years, ${i + 1}`"
          loading="lazy"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
