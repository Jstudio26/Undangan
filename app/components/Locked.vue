<script setup lang="ts">
import { invitation } from '~/config/invitation'
</script>

<template>
  <div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian px-6 text-center">
    <p class="eyebrow mb-6 text-silver/80">{{ invitation.name }}</p>

    <h1 class="font-display text-4xl leading-none tracking-wide text-gold sm:text-5xl">
      Bayar Dulu
    </h1>

    <span class="my-8 h-px w-10 bg-gold/60" />

    <p class="max-w-sm font-serif text-base italic text-silver">
      Undangan ini akan aktif setelah pembayaran diselesaikan.
    </p>
    <p class="mt-4 max-w-sm font-sans text-xs tracking-wide text-silver/70">
      Silakan hubungi kami jika pembayaran sudah dilakukan.
    </p>
  </div>
</template>
