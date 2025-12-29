# Dusk Design System Notes

## Palette

| Token | Value | Usage |
| --- | --- | --- |
| `bg.base` | `#010205` (approx `bg-black`) | Body background |
| `bg.card` | `#050814` | Section/card surfaces |
| `text.primary` | `#F8FBFF` | Headings |
| `text.muted` | `#9CA3AF` (`text-gray-400`) | Body |
| `border.default` | `rgba(255,255,255,0.08)` (`border-gray-800`) | Card borders |
| `accent.cyan` | `#06B6D4` | Start of gradients |
| `accent.purple` | `#A855F7` | End of gradients |
| `accent.blue` | `#2563EB` | Alternative CTA |

Gradient utility: `bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500` with opacity utilities for glows.

## Typography

- Font: `Inter, sans-serif` (default Next.js). Consider `Space Grotesk` for headings later.
- Heading scale: 68 / 56 / 48 / 32 / 24 px equivalents via Tailwind (`text-6xl`, etc.).
- Tracking for eyebrows: `tracking-[0.2em] uppercase text-sm`.

## Spacing & Layout

- Section padding: `py-20 sm:py-24`.
- Max width: `max-w-6xl` for dense content, `max-w-7xl` for hero.
- Card radius: `rounded-2xl` (24px). Use `rounded-[30px]` sparingly for hero forms.

## Effects

- Outer glows: pseudo-element or `absolute -inset-px bg-gradient-to-r ... rounded-2xl opacity-80 blur-lg`.
- Inner noise texture: optional background `imgix` noise as in reference.
- Borders: `border border-white/5` plus `bg-gradient-to-b from-white/5 via-white/0 to-white/0` for subtle sheen.

## Tailwind Config

Extend in `tailwind.config.ts`:

```ts
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#010205",
          900: "#050814",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(14, 165, 233, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

## Accessibility

- Maintain 4.5:1 contrast by using `text-gray-300` minimum on dark backgrounds.
- Provide `aria-labels` for icon-only buttons and `aria-expanded` for accordions.

## Content Entry

- Use `SectionHeading` to standardize titles + supporting copy.
- For forms, rely on `label` + `sr-only` text for icons.

## Motion

- Limit to opacity/translate transitions (`duration-500 ease-out`).
- Respect `prefers-reduced-motion` via Tailwind `motion-safe` utilities.

## Iconography

- Use Lucide or Heroicons outline set. Keep stroke width 1.5.
- Encapsulate icons as React components for consistent sizing.
