# House of Rome

> Modern, SEO-optimized website for luxury apartments in Rome, built with Next.js, TypeScript, and React.

---

## Overview

House of Rome is a bilingual (English/Italian) web application for showcasing and booking high-end apartments in Rome. The project features a modern UI, dynamic apartment pages, advanced SEO, and accessibility best practices.

---

## Features

- **Next.js 16, React 19, TypeScript**
- **Bilingual**: English and Italian locales
- **Dynamic apartment pages** with custom Open Graph images
- **SEO-optimized**: Structured data (Schema.org), dynamic sitemap, OG/Twitter meta tags
- **Responsive design**: Mobile-first, accessible components
- **Interactive maps**: Leaflet integration for apartment locations
- **Reusable UI components**: Hero, Gallery, Amenities, Contact, etc.
- **Custom Breadcrumbs**: Accessible, visually styled, with JSON-LD schema
- **Automated formatting/linting**: Prettier, ESLint, TypeScript strict mode

---

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

- `src/app/` — App directory (Next.js routing, layouts, pages)
- `src/components/` — Reusable UI components (breadcrumbs, hero, gallery, etc.)
- `src/content/` — Static content (apartment and global data)
- `src/lib/` — Utilities (i18n, SEO, formatting, routes)
- `public/` — Static assets (images, OG images, robots.txt, etc.)

---

## SEO Implementation

- **Default OG Image**: `/public/og-default.svg` (1200x630 SVG)
- **Custom OG Images**: Each apartment page uses a unique preview image
- **Breadcrumbs**: Accessible, styled, with JSON-LD structured data
- **Structured Data**: Full Schema.org for apartments and business info
- **Dynamic Sitemap**: `/sitemap.xml` includes all static and dynamic pages in both locales

### SEO Testing

1. **Google Rich Results Test**: [Rich Results Test](https://search.google.com/test/rich-results)
2. **Facebook Sharing Debugger**: [Facebook Debugger](https://developers.facebook.com/tools/debug/)
3. **Twitter Card Validator**: [Twitter Validator](https://cards-dev.twitter.com/validator)
4. **Sitemap**: [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

---

## Deployment

You can deploy this app to any Node.js server or use Vercel for seamless deployment:

```bash
npm run build
npm start
# or use the included PM2 script:
npm run deploy
```

---

## Scripts

- `dev` — Start development server
- `build` — Build for production
- `start` — Start production server
- `lint` — Run ESLint
- `typecheck` — Run TypeScript type checks
- `format` — Format code with Prettier

---

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- [Lucide React Icons](https://lucide.dev/)
- [Prettier](https://prettier.io/), [ESLint](https://eslint.org/)

---

## License

This project is private and not intended for redistribution.

