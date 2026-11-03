# Architecture

```
src/
  hooks.server.ts            per-page <title>/description for dynamic routes (see PageMeta)
  lib/
    data/
      schema.ts              Library type and field rules
      components.ts          canonical component taxonomy
      libraries/<id>.ts      one file per library (eagerly globbed)
      index.ts               queries: libraries, getLibrary, librariesWith, ...
      validate.test.ts       `pnpm validate`
    previews.ts              which previews exist and their URLs (file list only)
    components/              site UI (cards, badges, DocsLink, PreviewFrame, ...)
    styles/site.css          site tokens on top of the SveltePress theme
  routes/                    SveltePress pages (.md / .svelte), all prerendered
    libraries/[id]/          library detail pages
    components/[id]/         one component across all libraries, with previews
    compare/                 matrix plus side-by-side previews (state in the URL query)
    guide/                   about, licenses and AI policy, contributing
previews/
  index.html, main.ts        standalone preview app (Vite + Svelte, no SvelteKit)
  vite.config.ts             builds to dist/preview, mounted at /preview/ in dev
  src/<library>/<component>.svelte
```

## Data flow

Library files are plain TypeScript modules. `src/lib/data/index.ts` loads them with
`import.meta.glob(..., { eager: true })`, so adding a file is all it takes. Pages read from
there at build time and are prerendered (`adapter-static`, `trailingSlash: 'always'`).

`vite.config.ts` also reads the library files (a simple regex on `name:`) to build the sidebar.

## Why previews are a separate app

SveltePress wraps the root layout in its `GlobalLayout`, which imports the theme CSS (UnoCSS
reset and theme styles). Any SvelteKit route, including one meant for previews, would get that
CSS and stop showing a library's real defaults. So previews are a tiny separate Vite app:

- **Build:** `vite build --config previews/vite.config.ts` runs after the site build and outputs
  to `dist/preview/`.
- **Dev:** a plugin in `vite.config.ts` starts the preview Vite server in middleware mode and
  mounts it at `/preview/`, so one `pnpm dev` serves both.
- **Runtime:** `/preview/?library=x&component=y` lazily imports only that one preview module and
  its CSS. Each preview is shown in its own `<iframe>`, so libraries never share a document.

## SveltePress quirks to know

- The root `+layout.svelte` is wrapped in `GlobalLayout`, and every `+page.(svelte|md)` is
  wrapped in `PageLayout` with **static** frontmatter.
- Route files named `+page@*.svelte` are emptied by the SveltePress transform, so don't use
  layout-reset names.
- Dynamic pages can't set the frontmatter title, so they use `PageMeta.svelte` (marker metas
  that `hooks.server.ts` swaps into the prerendered HTML, plus `document.title` on client
  navigation).
- Route groups like `(group)` break the theme's home and sidebar detection (it reads
  `page.route.id`).
- Desktop navbar links appear at widths of 1440px and up; below that they're in the menu.

## SvelteKit 3 notes

- `$lib` is replaced by `#lib` (package.json `imports`). Import TS with explicit extensions:
  `#lib/data/index.ts`.
- There is no `svelte.config.js`. Kit options go in `sveltepress({ svelteKitOptions })`.
- Types: `Handle` comes from `@sveltejs/kit/hooks`.
