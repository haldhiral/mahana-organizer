# Image Guide

Use this folder tree to keep page images organized.

General rule:
- Files placed in `public/...` are referenced in code with `/...`
- Example: `public/images/about/founder.png` becomes `src="/images/about/founder.png"`

## Already wired

### About page
- Page: `app/[locale]/about/page.tsx`
- Current image path: `/images/about/founder.png`
- Folder: `public/images/about/`

### Home page hero
- Component: `src/components/sections/HeroSection.tsx`
- Current image path: `/images/home/hero.png`
- Folder: `public/images/home/`

### Packages page
- Page: `app/[locale]/packages/page.tsx`
- Current image paths:
  - `/images/packages/on-the-day/intimate.png`
  - `/images/packages/on-the-day/standard.png`
  - `/images/packages/on-the-day/royal.png`
  - `/images/packages/planner/main.png`
  - `/images/packages/exclusive/main.png`
  - `/images/packages/exclusive/decoration.png`
  - `/images/packages/exclusive/mua-attire.png`
  - `/images/packages/exclusive/entertainment.png`
  - `/images/packages/exclusive/photo-video.png`
  - `/images/packages/exclusive/master-of-ceremony.png`
  - `/images/packages/catering.png`
- Folder: `public/images/packages/`

### Portfolio data assets
- Data file: `src/data/portfolio.ts`
- Current image paths:
  - `/images/portfolio/intimate-soiree.png`
  - `/images/portfolio/ballroom-affair.png`
  - `/images/portfolio/garden-ceremony.png`
  - `/images/portfolio/family-ceremony.png`
  - `/images/portfolio/heritage-akad.png`
  - `/images/portfolio/lakeside-reception.png`
- Folder: `public/images/portfolio/`

### Testimonials page
- Component: `src/components/sections/TestimonialCards.tsx`
- Current image paths:
  - `/images/testimonials/nadia-farhan.png`
  - `/images/testimonials/clara-adrian.png`
  - `/images/testimonials/alya-reza.png`
  - `/images/testimonials/mei-bimo.png`
- Folder: `public/images/testimonials/`

## Pages with no image slots right now

- `app/[locale]/services/page.tsx`
- `app/[locale]/contact/page.tsx`

## Browser tab icon

- Favicon source: `public/favicon.svg`
- Public icon assets: `public/favicon.ico`, `public/favicon-48x48.png`, `public/apple-icon.png`, `public/icon-512x512.png`
