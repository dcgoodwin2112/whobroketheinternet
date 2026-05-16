# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
npx astro check   # Type-check .astro files
```

## Stack

Astro 5 with TypeScript (`astro/tsconfigs/strict`) and Tailwind CSS v4. Tailwind is wired in via `@tailwindcss/vite` in `astro.config.mjs` — no `tailwind.config.*` file; configuration lives in `src/styles/global.css` using v4's CSS-first config.

Font Awesome Free is a dependency (`@fortawesome/fontawesome-free`); icons are referenced from its CSS rather than per-icon imports.

## Content Collections

Blog posts live in `src/content/blog/` and are validated by the schema in [src/content/config.ts](src/content/config.ts):

- `title` (string), `date` (Date), `author` (string), `excerpt` (string) — required
- `cover` (image), `coverAlt` (string), `assistant` (string) — optional

Images referenced as `cover:` should be placed in `src/content/blog/images/` so Astro's `image()` loader resolves them relative to the post.

Posts are rendered by `src/pages/blog/[slug].astro` and listed (newest-first) by `src/pages/index.astro`.

## Theme System

Light/dark toggle implemented in `src/layouts/BaseLayout.astro` with `localStorage` persistence and a system-preference fallback. Dark mode uses Tailwind's `class` strategy — apply `dark:` variants in markup rather than relying on `prefers-color-scheme`.

## Creating Blog Posts

```md
---
title: "Post Title"
date: 2025-11-22
author: "Author Name"
excerpt: "Brief description for homepage listing"
cover: "./images/cover.png"      # optional
coverAlt: "Alt text"              # optional
assistant: "Claude Opus 4.7"      # optional
---

Post content in markdown...
```
