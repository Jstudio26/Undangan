<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { invitation } from '~/config/invitation'
import { access } from '~/config/access'

const entered = ref(false)
const musicOn = ref(false)
const audioEl = ref<HTMLAudioElement | null>(null)
const mainEl = ref<HTMLElement | null>(null)

// Progressive enhancement: the main content is server-rendered (good for SEO and
// resilience), but while the opening screen is up we make it inert so keyboard
// focus and screen readers stay on the opening screen. Without JS the content is
// simply readable and the opening overlay is hidden (see nuxt.config noscript).
onMounted(() => {
  if (access.locked) return
  document.body.style.overflow = 'hidden'
  if (mainEl.value) mainEl.value.inert = true
})

async function enter() {
  entered.value = true
  document.body.style.overflow = ''
  if (mainEl.value) mainEl.value.inert = false

  // Wait for the <audio> element to mount, then start playback. This still runs
  // inside the click's user-activation window, so browsers allow it.
  await nextTick()
  const a = audioEl.value
  if (!a) return
  a.volume = 0.55
  try {
    await a.play()
    musicOn.value = true
  } catch {
    musicOn.value = false
  }
}

function toggleMusic() {
  const a = audioEl.value
  if (!a) return
  if (musicOn.value) {
    a.pause()
    musicOn.value = false
  } else {
    a.play()
      .then(() => (musicOn.value = true))
      .catch(() => {})
  }
}
</script>

<template>
  <Locked v-if="access.locked" />

  <div v-else>
    <main ref="mainEl">
      <Hero />
      <Introduction />
      <Story />
      <Gallery />
      <EventDetails />
      <Countdown />
      <DressCode />
      <RSVP />
      <Closing />
    </main>

    <template v-if="entered">
      <MusicControl :on="musicOn" @toggle="toggleMusic" />
      <!-- preload="none": the track is only fetched once the guest has entered -->
      <audio ref="audioEl" :src="invitation.music" loop preload="none" />
    </template>

    <Transition name="fade">
      <Opening v-if="!entered" class="opening-overlay" @enter="enter" />
    </Transition>
  </div>
</template>
