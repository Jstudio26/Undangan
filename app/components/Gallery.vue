<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { invitation } from '~/config/invitation'

const photos = invitation.gallery

const open = ref(false)
const index = ref(0)
const closeBtn = ref<HTMLButtonElement | null>(null)

const current = computed(() => photos[index.value] ?? photos[0])

function show(i: number) {
  index.value = i
  open.value = true
}
function close() {
  open.value = false
}
function next() {
  index.value = (index.value + 1) % photos.length
}
function prev() {
  index.value = (index.value - 1 + photos.length) % photos.length
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

watch(open, async (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  } else {
    window.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <section id="gallery" class="section-pad bg-obsidian">
    <div class="mx-auto max-w-5xl">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">The Moments</h2>

      <div v-reveal class="mt-12 columns-2 gap-3 [column-gap:0.75rem] sm:columns-3">
        <button
          v-for="(p, i) in photos"
          :key="p.src"
          type="button"
          class="mb-3 block w-full break-inside-avoid overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          :aria-label="`Open photo ${i + 1} of ${photos.length}`"
          @click="show(i)"
        >
          <img
            :src="p.src"
            :alt="p.alt"
            loading="lazy"
            class="w-full object-cover transition duration-500 hover:scale-[1.03] hover:opacity-90"
          />
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        @click.self="close"
      >
        <button
          ref="closeBtn"
          type="button"
          class="absolute right-4 top-4 border border-white/25 px-4 py-2 font-sans text-xs tracking-[0.2em] text-offwhite transition hover:bg-white/10"
          @click="close"
        >
          CLOSE ✕
        </button>

        <button
          type="button"
          class="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-offwhite/80 transition hover:text-gold"
          aria-label="Previous photo"
          @click="prev"
        >
          ‹
        </button>

        <img
          v-if="current"
          :src="current.src"
          :alt="current.alt"
          class="max-h-[85vh] max-w-full object-contain"
        />

        <button
          type="button"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-offwhite/80 transition hover:text-gold"
          aria-label="Next photo"
          @click="next"
        >
          ›
        </button>
      </div>
    </Teleport>
  </section>
</template>
