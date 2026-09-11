import { computed, onMounted, onUnmounted, ref } from 'vue'

/**
 * Countdown to a fixed instant. `targetISO` must carry the event's UTC offset
 * (e.g. "2026-10-24T18:00:00+08:00"), so the result is correct in any viewer
 * timezone. No external library — one setInterval, four computed values.
 */
export function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime()
  const now = ref(target) // SSR-safe placeholder; real value is set on mount
  let timer: ReturnType<typeof setInterval> | undefined

  const tick = () => {
    now.value = Date.now()
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  const remaining = computed(() => Math.max(0, target - now.value))
  const finished = computed(() => remaining.value <= 0)

  const days = computed(() => Math.floor(remaining.value / 86_400_000))
  const hours = computed(() => Math.floor((remaining.value % 86_400_000) / 3_600_000))
  const minutes = computed(() => Math.floor((remaining.value % 3_600_000) / 60_000))
  const seconds = computed(() => Math.floor((remaining.value % 60_000) / 1000))

  return { days, hours, minutes, seconds, finished }
}
