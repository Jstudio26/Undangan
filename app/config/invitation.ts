/**
 * SINGLE SOURCE OF TRUTH for this invitation.
 * Change name / date / venue / photos / WhatsApp number here only.
 * Nothing else in the project hard-codes event data.
 */

export interface DressColor {
  name: string;
  hex: string;
}

export interface StoryItem {
  year: string;
  title: string;
  text: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export const invitation = {
  // --- Person ---
  name: "Nathanael Jeremia Marturia D' Passa",
  age: 17,

  // --- Date & time ---
  date: "17 October 2026",
  // Full ISO string WITH the event's UTC offset (+08:00 = Asia/Makassar / WITA).
  // The countdown is based on this exact instant, regardless of the viewer's timezone.
  dateISO: "2026-10-17T17:00:00+08:00",
  dayName: "SATURDAY",
  time: "17:00 WITA — Selesai",
  timezone: "Asia/Makassar",

  // --- Venue ---
  venue: "My House",
  location: "Manado",
  address: "Paal IV, Kec. Tikala, Kota Manado, Sulawesi Utara",
  // Any Google Maps link (place, search, or share URL).
  mapsUrl: "https://maps.app.goo.gl/a1Hm6WLa65z6buoe9",

  // --- Contact ---
  // International format, digits only, no "+" and no leading zero. Example: 62 812 3456 7890
  whatsappNumber: "6289698152110",

  // --- Media (files live in /public) ---
  heroImage: "/images/MS1.jpeg",
  music: "/music/background.mp3",

  storyPhotos: ["/images/MS3.jpeg", "/images/MS4.jpeg"] as string[],

  gallery: [
    { src: "/images/MS1.jpeg", alt: "A quiet portrait" },
    { src: "/images/MSK2.png", alt: "A frame from a good day" },
    { src: "/images/UTAMA.jpeg", alt: "Looking ahead" },
    { src: "/images/MSK3.png", alt: "The night before seventeen" },
  ] as GalleryPhoto[],

  story: [
    {
      year: "2009",
      title: "THE BEGINNING",
      text: "A first breath, a first name, the first photograph that started all the rest.",
    },
    {
      year: "2015",
      title: "GROWING UP",
      text: "School, first friendships, the small victories that felt enormous at the time.",
    },
    {
      year: "2020",
      title: "THE JOURNEY",
      text: "Finding his own taste in music, in style, in the people he wanted around him.",
    },
    {
      year: "2026",
      title: "SEVENTEEN",
      text: "Old enough to remember every step. Young enough for the best ones to be ahead.",
    },
  ] as StoryItem[],

  dressCode: [
    { name: "BLACK", hex: "#080808" },
    { name: "NAVY", hex: "#0D1726" },
  ] as DressColor[],
};
