import { invitation } from './app/config/invitation'

const title = `${invitation.name} — Sweet Seventeen`
const description = `You're invited to celebrate ${invitation.name}'s Sweet Seventeen.`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#080808' },
        { name: 'color-scheme', content: 'dark' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: '/images/og.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: '/images/og.svg' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&family=Playfair+Display:ital@0;1&display=swap',
        },
        { rel: 'preload', as: 'image', href: invitation.heroImage },
      ],
      noscript: [
        // Without JS the "ENTER" button can't work, so drop the overlay and
        // let the (server-rendered) invitation be read and scrolled normally.
        {
          innerHTML:
            '<style>.opening-overlay{display:none!important}body{overflow:auto!important}</style>',
        },
      ],
    },
  },
})
