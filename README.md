# Agamana Projects — Homepage

A production-ready marketing homepage for **Agamana Projects**, a trusted project
partner for land owners and regional developers in Karnataka.

> _"You focus on your project. We'll help you with everything around it."_

## Tech Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **GSAP + ScrollTrigger** (`@gsap/react`) for scroll-driven motion
- **Lucide** icons
- `next/font` (**Archivo** heavy grotesk), `next/image`

### Visual direction

Modeled on the **Farmio** Framer template: warm khaki cream (`#E3E4D4` / `#F2F3EE`),
deep teal (`#04303B`), bright lime accent (`#E7F352`), white cards, heavy grotesk
type, large rounded corners, a floating pill navbar, and word-by-word scroll-reveal
headings. Tokens live in `src/app/globals.css`.

### Notes on the spec

- The build spec suggested Framer Motion + shadcn/ui. Per the explicit request to
  use the installed **GSAP** skills, motion is implemented with GSAP/ScrollTrigger
  (hero timeline, sticky Journey scroll-scrub, staggered reveals). UI primitives
  are hand-built, accessible, and dependency-light in place of shadcn/ui.
- All motion respects `prefers-reduced-motion` and degrades gracefully with no JS.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm run lint
```

## Project Structure

```
src/
  app/
    layout.tsx            # fonts, metadata, JSON-LD, skip-link
    page.tsx              # section composition
    globals.css           # design tokens + reveal utilities
    opengraph-image.tsx   # dynamic 1200x630 OG image
    robots.ts, sitemap.ts # SEO routes
  components/
    layout/   Navbar, Footer
    sections/ Hero, BigStatement, AudienceCards, Journey, Services,
              Projects, WhyAgamana, Process, FAQ, CTA
    ui/       Container, Button, Reveal (GSAP scroll reveal)
  lib/
    content.ts  # all homepage copy (CMS-ready data layer)
    images.ts   # image catalogue (swap for real photography)
    site.ts     # site config + nav
    jsonld.ts   # Organization / LocalBusiness / WebSite / FAQ schema
    utils.ts    # cn() class merge
```

## Languages (English + Kannada)

All copy lives in `src/lib/content.ts` as `content.en` / `content.kn`. The
`LanguageProvider` (`src/lib/i18n.tsx`) exposes `useT()` and a navbar switcher
(EN / ಕನ್ನಡ); the choice persists to `localStorage` and sets `<html lang>`.
Kannada renders in the Noto Sans Kannada web font. To edit text, change both
language trees (they share an identical shape).

## Contact popup

`ContactButton` (used by every "Let's Talk" CTA and the audience cards) opens a
bilingual popup (`src/components/contact/ContactModal.tsx`) with the enquiry form
plus the office address and phone numbers. **The form is front-end only** — it
currently composes a `mailto:` to `site.email` and shows a success state. Wire it
to your CRM / form endpoint (Formspree, a route handler, etc.) in `onSubmit`
before launch.

## Contact details

Office and phone numbers live in `src/lib/site.ts` (`address`, `phones`,
`phoneLinks`) and surface in the footer, the contact popup and the JSON-LD
`ProfessionalService` schema.

## Before Launch — replace these placeholders

1. **Domain / contact** — `src/lib/site.ts`: `url`, `email`, `phone`, social links.
2. **Photography** — `src/lib/images.ts` currently uses curated Unsplash aerial/land
   images. Replace `src` values with real Agamana drone shots, layout renders and
   site-visit photos. The data shape is stable, so no component changes are needed.
   (Remote host is already whitelisted in `next.config.ts`; local files also work.)
3. **Featured projects** — `src/lib/content.ts` (`projects`) — confirm names/blurbs.

## SEO

Metadata API, Open Graph + Twitter cards, dynamic OG image, `robots.txt`,
`sitemap.xml`, JSON-LD (Organization, ProfessionalService/LocalBusiness, WebSite,
FAQPage), canonical URL, semantic HTML, optimized/lazy images. Update `site.url`
so canonical, sitemap and OG URLs resolve to the real domain.

## Accessibility

Skip-to-content link, keyboard-operable nav & FAQ accordion (`aria-expanded`,
labelled regions), visible focus rings, reduced-motion support, alt text on all
imagery, WCAG-conscious contrast on the earthy palette.
