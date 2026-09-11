# Sweet Seventeen — Digital Invitation

A one-page, static digital invitation for a single 17th-birthday event.
Modern masculine / cinematic / minimal. Built to be fast, light, and easy to edit.

**Stack:** Nuxt 4 · Vue 3 · TypeScript · Tailwind CSS · static generation · Vercel.
No database, no backend, no CMS, no auth.

## Edit the event

Everything lives in **`app/config/invitation.ts`** — name, date, time, venue,
Google Maps link, WhatsApp number, photos, story timeline, dress code.
No component hard-codes event data.

WhatsApp number format: international, digits only, no `+`, no leading `0`
(e.g. `6281234567890`).

## Replace the media

Drop real files into `public/` and point the config at them:

```
public/images/hero.webp      -> invitation.heroImage
public/images/photo-01.webp  -> invitation.gallery[]
public/images/story-01.webp  -> invitation.storyPhotos[]
public/images/og.(jpg|png)   -> og:image in nuxt.config.ts  (1200×630)
public/music/background.mp3   -> invitation.music
```

The repo ships lightweight **SVG placeholders** and a **silent MP3** so the site
builds and previews with nothing broken. Swap them for the real photos (WebP
recommended) and a real track before going live. The hero image is preloaded;
gallery images lazy-load.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static) & deploy

```bash
npm run generate   # output: .output/public
```

Deploy to Vercel: import the repo, framework **Nuxt**, build command
`npm run generate`, output directory `.output/public` (see `vercel.json`).

## Notes

- Background music never autoplays. It starts only after the guest taps
  **ENTER INVITATION**; a small **MUSIC ON / OFF** toggle sits bottom-right.
- Countdown targets `invitation.dateISO` (which includes the `+08:00` / WITA
  offset), so it is correct in any viewer's timezone. Shows
  **"The night has begun."** once it hits zero.
- Gallery lightbox: click a photo; close with the button, a backdrop click, or
  **Esc**; arrow keys move between photos.
- Motion respects `prefers-reduced-motion`.
