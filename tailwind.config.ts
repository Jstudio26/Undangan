import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/plugins/**/*.{js,ts}',
    './app/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080808',
        charcoal: '#141414',
        navy: '#0D1726',
        offwhite: '#F1F0EC',
        silver: '#B8BABD',
        gold: '#B69B67',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
