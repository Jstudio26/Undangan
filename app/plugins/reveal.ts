/**
 * `v-reveal` — minimal scroll-triggered fade-up. No animation library.
 *
 * An IntersectionObserver handles the common case (smooth scrolling). A tiny
 * rAF-throttled scroll/resize sweep is the safety net: it also reveals elements
 * that were skipped by a fast flick or a jump to an anchor, so a section can
 * never stay invisible. Listeners remove themselves once everything is shown.
 *
 * The `.reveal` class is added on mount (client only), so content is always
 * visible if JavaScript never runs.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const pending = new Set<HTMLElement>()
  let io: IntersectionObserver | null = null
  let scheduled = false
  let wired = false

  const teardown = () => {
    if (!wired) return
    wired = false
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    io?.disconnect()
    io = null
  }

  const reveal = (el: HTMLElement) => {
    el.classList.add('is-visible')
    pending.delete(el)
    io?.unobserve(el)
    if (pending.size === 0) teardown()
  }

  const sweep = () => {
    scheduled = false
    const trigger = window.innerHeight * 0.92
    for (const el of [...pending]) {
      if (el.getBoundingClientRect().top < trigger) reveal(el)
    }
  }

  const onScroll = () => {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(sweep)
  }

  const wire = () => {
    if (wired || typeof window === 'undefined') return
    wired = true
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting) reveal(e.target as HTMLElement)
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      )
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  }

  nuxtApp.vueApp.directive('reveal', {
    // Silences an SSR "failed to resolve directive" warning during generate.
    getSSRProps: () => ({}),

    mounted(el: HTMLElement) {
      el.classList.add('reveal')
      wire()
      pending.add(el)
      io?.observe(el)
      requestAnimationFrame(sweep) // reveal anything already in view on mount
    },

    unmounted(el: HTMLElement) {
      pending.delete(el)
      io?.unobserve(el)
    },
  })
})
