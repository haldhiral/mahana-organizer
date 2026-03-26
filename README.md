# Mahana Organizer Website

Production-ready bilingual marketing website for Mahana Organizer, a wedding organizer brand serving Jakarta, Bogor, and Depok.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- `next-intl`

## Setup

1. Install dependencies with `pnpm install` or `npm install`.
2. Run the development server with `npm run dev`.
3. Open `http://localhost:3000`.

## Commands

- Development: `npm run dev`
- Build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`

## Localization

- Locale-prefixed routes live under `app/[locale]/`.
- Supported locales are configured in [src/i18n/routing.ts](/c:/Dev/mahana-organizer/src/i18n/routing.ts).
- Request configuration for `next-intl` lives in [src/i18n/request.ts](/c:/Dev/mahana-organizer/src/i18n/request.ts).
- Translation catalogs live in [src/messages/id.json](/c:/Dev/mahana-organizer/src/messages/id.json) and [src/messages/en.json](/c:/Dev/mahana-organizer/src/messages/en.json).
- `proxy.ts` handles hostname canonicalization, default-locale normalization, and legacy SEO redirects while preserving `next-intl` routing.

## SEO and Hostname

- Canonical production host is `https://www.mahanaorganizer.com`.
- Non-`www` requests to `https://mahanaorganizer.com` permanently redirect to the canonical `www` host.
- Indonesian (`id`) is the default locale and remains unprefixed, for example `/about`.
- English pages remain prefixed with `/en`, for example `/en/about`.
- Set `NEXT_PUBLIC_SITE_URL=https://www.mahanaorganizer.com` in production so metadata, schema, sitemap, and robots all emit the canonical host.

## Updating Site Information

- Business identity, phone, email, service areas, social links, and WhatsApp defaults live in [src/config/site.ts](/c:/Dev/mahana-organizer/src/config/site.ts).
- Navigation labels and static route list live in [src/config/navigation.ts](/c:/Dev/mahana-organizer/src/config/navigation.ts).
- Structured data and metadata helpers live in [src/lib/schema.ts](/c:/Dev/mahana-organizer/src/lib/schema.ts) and [src/lib/seo.ts](/c:/Dev/mahana-organizer/src/lib/seo.ts).

## Content Structure

- Shared components live in `src/components/`.
- Sample packages, portfolio entries, testimonials, and FAQ groupings live in `src/data/`.
- Route handlers and metadata files live in `app/`.

## Adding Future Pages

1. Create the route under `app/[locale]/your-page/page.tsx`.
2. Add the navigation item in [src/config/navigation.ts](/c:/Dev/mahana-organizer/src/config/navigation.ts) if needed.
3. Add page copy to both translation files.
4. Add page metadata via `buildMetadata`.
5. Add the new path to the sitemap route list if it should be indexed.

## Contact Form Integration

- Client-side form UX lives in [src/components/forms/ContactForm.tsx](/c:/Dev/mahana-organizer/src/components/forms/ContactForm.tsx).
- Shared validation lives in [src/lib/validations.ts](/c:/Dev/mahana-organizer/src/lib/validations.ts).
- Server handling lives in [app/api/contact/route.ts](/c:/Dev/mahana-organizer/app/api/contact/route.ts).
- The current handler validates the payload, logs it safely on the server, and returns JSON success.
- To connect real delivery later, replace `sendContactLead` in [app/api/contact/route.ts](/c:/Dev/mahana-organizer/app/api/contact/route.ts) with SMTP or a third-party email implementation.
