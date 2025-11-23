# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
npm run astro     # Run Astro CLI commands
```

## Architecture

**Astro 5.16.0** with TypeScript (strict mode) and **Tailwind CSS v4**

### Routing
File-based routing in `src/pages/`. Each `.astro` or `.md` file becomes a route matching its filename.

### TypeScript
- Extends `astro/tsconfigs/strict`
- Type checking: `npx astro check`

### Tailwind CSS
- Tailwind v4 integrated via Vite plugin (see `astro.config.mjs`)
- Dark mode enabled with `class` strategy
- Global styles in `src/styles/global.css`

### Content Collections
Blog posts managed via Content Collections in `src/content/blog/`. Schema defined in `src/content/config.ts`:
- `title`: string
- `date`: Date
- `author`: string
- `excerpt`: string

### Theme System
Light/dark mode toggle with localStorage persistence. Theme preference syncs with system preference on first visit.

### Project Structure
```
src/
├── content/
│   ├── config.ts       # Content collection schemas
│   └── blog/           # Blog posts (markdown)
├── layouts/
│   └── BaseLayout.astro  # Base layout with theme toggle
├── pages/
│   ├── index.astro     # Homepage (blog listing)
│   └── blog/[slug].astro  # Individual blog posts
└── styles/
    └── global.css      # Global styles + prose
public/                 # Static assets
```

## Creating Blog Posts

Add markdown files to `src/content/blog/`:

```md
---
title: "Post Title"
date: 2025-11-22
author: "Author Name"
excerpt: "Brief description for homepage listing"
---

Post content in markdown...
```

Posts automatically appear on homepage, sorted by date (newest first).
