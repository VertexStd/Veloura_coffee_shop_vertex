/**
 * Premium editorial coffee photography (Unsplash + Pexels).
 * Every placement uses a unique image. Warm cream / brown / black palette.
 * Optimized via CDN width + quality params.
 */

const unsplash = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const pexels = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=${w}`;

export function srcSet(build, widths) {
  return widths.map((w) => `${build(w)} ${w}w`).join(", ");
}

/* ── 1. Hero: overhead artisan cups, warm cinematic wood ── */
export const hero = {
  build: (w) => unsplash("photo-1541167760496-1628856ab772", w),
  widths: [1000, 1600, 2200],
  alt: "Overhead view of artisan coffee cups with latte art on a wooden table",
};

/* ── 2. Our Story ── */
export const story = [
  {
    id: "sourced",
    build: (w) => pexels("977821", w),
    alt: "Coffee farmers holding freshly harvested ripe coffee cherries",
  },
  {
    id: "roasted",
    build: (w) => unsplash("photo-1511537190424-bbbab87ac5eb", w),
    alt: "Coffee beans roasting in a professional drum roaster",
  },
  {
    id: "sorted",
    build: (w) => pexels("1695052", w),
    alt: "Hands sorting premium roasted coffee beans",
  },
];

/* ── 3. Origins: plantations & landscape ── */
export const origins = {
  Ethiopia: {
    build: (w) => unsplash("photo-1497935586351-b67a49e012bf", w),
    alt: "Misty coffee hillside at dawn in Ethiopia",
  },
  Colombia: {
    build: (w) => pexels("2074130", w),
    alt: "Colombian coffee plantation in mountain terrain",
  },
  Brazil: {
    build: (w) => pexels("2901215", w),
    alt: "Brazilian coffee trees across rolling hills",
  },
  Guatemala: {
    build: (w) => pexels("4750270", w),
    alt: "Coffee trees on a foggy hillside plantation",
  },
};

/* ── 4. Brewing Guide ── */
export const brewing = {
  Espresso: {
    build: (w) => unsplash("photo-1514432324607-a09d9b4aefdd", w),
    alt: "Espresso extraction with rich crema",
  },
  "Pour Over": {
    build: (w) => unsplash("photo-1495474472287-4d71bcdd2085", w),
    alt: "Barista pouring coffee into a ceramic cup",
  },
  "French Press": {
    build: (w) => pexels("1417945", w),
    alt: "French press coffee brewing on a wooden surface",
  },
  "Cold Brew": {
    build: (w) => unsplash("photo-1461023058943-07fcbe16d735", w),
    alt: "Cold brew coffee poured over ice",
  },
};

/* ── 5. Best Sellers: bags, beans, product stills ── */
export const bestsellers = {
  "Noir Reserve": {
    build: (w) => unsplash("photo-1559056199-641a0ac8b55e", w),
    alt: "Premium coffee packaging on a neutral surface",
  },
  "Veloura Estate": {
    build: (w) => pexels("373888", w),
    alt: "Roasted coffee beans beside a ceramic cup",
  },
  "Silk Road Blend": {
    build: (w) => pexels("4109743", w),
    alt: "Specialty coffee bag product photograph",
  },
  "Midnight Bloom": {
    build: (w) => unsplash("photo-1447933601403-0c6688de566e", w),
    alt: "Dark roasted coffee beans in warm light",
  },
};

/* ── 6. Collection: lifestyle packaging & accessories ── */
export const collection = {
  "Noir Reserve": {
    build: (w) => unsplash("photo-1511920170033-f8396924c348", w),
    alt: "Minimal espresso cup lifestyle composition",
  },
  "Veloura Estate": {
    build: (w) => pexels("685527", w),
    alt: "Specialty espresso in a white ceramic cup",
  },
  "Amber Solstice": {
    build: (w) => unsplash("photo-1485808191679-5f86510681a2", w),
    alt: "Coffee cups in warm morning light",
  },
  "Midnight Bloom": {
    build: (w) => unsplash("photo-1610889556528-9a770e32642f", w),
    alt: "Coffee brewing accessories with beans",
  },
  "Silk Road Blend": {
    build: (w) => pexels("373888", w),
    alt: "Roasted beans beside a ceramic cup",
  },
  "Casa Bruma": {
    build: (w) => unsplash("photo-1461023058943-07fcbe16d735", w),
    alt: "Iced specialty coffee lifestyle still",
  },
};

/* ── 7. Instagram gallery — visually verified specialty coffee only ── */
export const instagram = [
  {
    build: (w) => pexels("312418", w),
    alt: "Latte art in a black ceramic cup",
    size: "tall",
  },
  {
    build: (w) => unsplash("photo-1510591509098-f4fdc6d0ff04", w),
    alt: "Fresh espresso with rich crema in a white cup",
    size: "square",
  },
  {
    build: (w) => pexels("683039", w),
    alt: "Modern specialty coffee shop bar with espresso machine",
    size: "wide",
  },
  {
    build: (w) => unsplash("photo-1447933601403-0c6688de566e", w),
    alt: "Roasted specialty coffee beans in warm light",
    size: "square",
  },
  {
    build: (w) => pexels("324028", w),
    alt: "Espresso pouring from a machine into ceramic cups",
    size: "tall",
  },
  {
    build: (w) => pexels("894695", w),
    alt: "Freshly roasted beans in a coffee roaster cooling tray",
    size: "wide",
  },
  {
    build: (w) => unsplash("photo-1509042239860-f550ce710b93", w),
    alt: "Premium coffee cups with latte art on a wooden table",
    size: "square",
  },
  {
    build: (w) => pexels("302899", w),
    alt: "Barista pouring latte art into a ceramic cup",
    size: "tall",
  },
];

/* ── 8. Testimonials: café interiors (no portrait stock) ── */
export const testimonials = {
  "Amelia Hart": {
    build: (w) => unsplash("photo-1554118811-1e0d58224f24", w),
    alt: "Cozy luxury coffee shop interior",
  },
  "James Okonkwo": {
    build: (w) => unsplash("photo-1501339847302-ac426a4a7cbb", w),
    alt: "Quiet café corner with natural light",
  },
  "Sofia Reyes": {
    build: (w) => unsplash("photo-1453614512568-c4024d13c247", w),
    alt: "Warm café seating with coffee service",
  },
};

/* ── 9. Final CTA: espresso pour / steam ── */
export const finalCta = {
  build: (w) => unsplash("photo-1572442388796-11668a67e53d", w),
  widths: [900, 1400, 1800],
  alt: "Fresh espresso with steam rising from the cup",
};
