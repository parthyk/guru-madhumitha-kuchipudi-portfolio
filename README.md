# Guru Smt. Madhumitha — Kuchipudi Portfolio

A single-page portfolio for Guru Smt. Madhumitha and Sri Narthaki Kuchipudi Natyalaya, Chennai.

Live site: [parthyk.github.io/guru-madhumitha-kuchipudi-portfolio](https://parthyk.github.io/guru-madhumitha-kuchipudi-portfolio/)

## Overview

The site presents the artist's biography, Kuchipudi practice, journey, achievements, sacred stages, the Natyalaya, programmes, vision and mission, gallery, and contact details. It uses a contemporary Indian editorial direction with self-hosted Cormorant Garamond, Manrope, and Noto Serif Telugu fonts.

The contact form validates locally and hands the completed message to WhatsApp. Nothing is stored by the website.

## Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Local development

Requires Node.js 24 or newer.

```bash
npm ci
npm run dev
```

The development URL includes the repository base path:

`http://localhost:5173/guru-madhumitha-kuchipudi-portfolio/`

## Build and preview

```bash
npm run build
npm run preview -- --port 4173 --host 127.0.0.1
```

## Content

All editable copy, navigation, programmes, milestones, venues, achievements, and contact details live in:

`src/data/site.ts`

Keep biography, credentials, venues, and awards factual. Do not add social profiles or claims that have not been verified.

## Images

Original source photographs are kept in `source-images/` and are intentionally excluded from Git. Optimized AVIF/WebP variants, responsive metadata, the Open Graph image, and favicons are generated into `public/` and `src/data/imageManifest.json`.

```bash
npm run images
```

The supplied institution logo file is a tiled promotional watermark rather than a clean transparent emblem. The site therefore uses the typographic `SN` monogram instead of rendering that image.

Two supplied photographs carry a repeating institution watermark. Use them with care in future edits.

## Contact form

- Validates name, phone/email, interest, and message client-side.
- Selects the relevant programme when a programme card is chosen.
- Opens a pre-filled WhatsApp message.
- Does not persist or transmit form data to a server.

## Accessibility

The site includes keyboard focus styles, a skip link, a focus-trapped mobile menu, keyboard-operable gallery controls, reduced-motion support, labelled form fields, and a light/dark theme that follows the system preference on first load.

## Local QA

Start the preview server, then run:

```bash
npm run qa
```

This checks console errors, broken images, anchors, horizontal overflow at 1440/1024/768/390/320, theme persistence, menu focus behavior, the gallery lightbox, programme interest preselection, form validation, and the generated WhatsApp URL.

To regenerate review screenshots:

```bash
npm run screenshots
```

Screenshots are written to `screenshots/` and use a headed Chrome window with viewport captures. Avoid Chrome's full-page capture for this site: its 16,000+ pixel page height can exceed Chrome's texture limit and produce corrupted tiles.

## Deployment

GitHub Pages publishes the generated `dist/` contents from the `gh-pages` branch.

```bash
npm run deploy
```

The deploy script rebuilds the site and pushes the production output to `gh-pages`. The main branch contains the source only; do not commit `dist/`.

The Vite base path in `vite.config.ts` must match the repository name:

`/guru-madhumitha-kuchipudi-portfolio/`

GitHub Pages must use the `gh-pages` branch and the repository root as its source.

## Ownership

Website copy and photography relate to Guru Smt. Madhumitha and Sri Narthaki Kuchipudi Natyalaya. Do not reuse the supplied photography or identity assets without permission.
