# Padel Court Website - Project Handoff

This document summarizes the current state of the Padel Court business website (Astro 5 + Sanity CMS).

## Tech Stack
- **Astro 5**: Configured in `output: 'server'` (SSR) with `@astrojs/vercel` adapter.
- **Tailwind CSS v4**: Integrated via Vite plugin in `astro.config.mjs` and `@import "tailwindcss"` in `src/styles/global.css`.
- **Sanity v3**: Standalone studio in `/studio` folder with a custom `blogPost` schema.
- **Bilingual i18n**: Custom locale-based routing (`/en/`, `/ka/`) using `astro-i18next` and UI translation files.

## Project Structure & Files Created

### 1. Astro Configuration & Styles
- `astro.config.mjs`: Vercel adapter, Tailwind V4 Vite plugin, `astro-i18next`.
- `src/styles/global.css`: Tailwind V4 theme configuration with brand colors (`red: #e63529`, `blue: #354da1`, `lightblue: #38a1da`) and Helvetica fonts.

### 2. Localization Infrastructure
- `src/i18n/en.json` / `src/i18n/ka.json`: UI translation strings.
- `src/utils/i18n.ts`: Helpers for locale validation and path building (preserves current path when switching languages).

### 3. Sanity Integration
- `studio/`: Standalone Sanity project.
  - `schemas/blogPost.ts`: Schema with `title`, `slug`, `language`, `translationKey`, `content`, `image`, and `publishDate`.
- `src/sanity/client.ts`: Configured `@sanity/client` with image URL builder.
- `src/sanity/queries.ts`: GROQ queries for blog listing and single post (with translated slug lookup).

### 4. Components & Layouts
- `src/layouts/BaseLayout.astro`: Shared HTML structure, Navbar, and Footer.
- `src/components/Navbar.astro`: Sticky header with logo, dynamic links, mobile menu, and locale switcher logic.
- `src/components/Footer.astro`: Three-column layout with contact info and social links.
- `src/components/BlogCard.astro`: Clickable card for blog listings.
- `src/components/PortableText.astro`: Wrapper for rendering Sanity rich text.

### 5. Pages Implemented
- `src/pages/index.astro`: Redirects `/` to `/en/`.
- `src/pages/[locale]/index.astro`: Home page with Hero section matching reference design (sporty aesthetic, CTA button).

## Required Environment Variables
Create a `.env` or `.env.local` file with:
```env
PUBLIC_SANITY_PROJECT_ID=your_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Remaining Tasks
1. **Contact Page**: Implement `src/pages/[locale]/contact.astro` with static info (phone, address, opening hours).
2. **Blog Listing**: Implement `src/pages/[locale]/blog/index.astro` fetching and grid-displaying posts.
3. **Blog Detail**: Implement `src/pages/[locale]/blog/[slug].astro` rendering the full post with "Read in [Other Language]" links.
4. **Assets**: Replace placeholder background image (`/images/hero-placeholder.jpg`) with actual brand assets.
5. **Sanity Data**: Create initial content in Sanity Studio to verify the GROQ queries.

To start development:
- Astro: `npm run dev`
- Sanity Studio: `cd studio && npm install && npm run dev`
