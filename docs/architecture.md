# Architecture

```
src/
  hooks.server.ts            per-page <title>/description for dynamic routes (see PageMeta)
  lib/
    data/
      schema.ts              Library type and field rules
      components.ts          canonical component taxonomy
      libraries/<id>.ts      one file per library (eagerly globbed)
      tools/<id>.ts          one file per tool: single-purpose packages and building blocks
      index.ts               queries: libraries, getLibrary, librariesWith, ...
      validate.test.ts       `pnpm validate`
    previews.ts              which previews exist and their URLs (file list only)
    components/              site UI (cards, badges, DocsLink, PreviewFrame, ...)
    styles/site.css          site tokens on top of the SveltePress theme
  routes/                    SveltePress pages (.md / .svelte), all prerendered
    libraries/[id]/          library detail pages
    components/[id]/         one component across all libraries, with previews
    compare/                 matrix plus side-by-side previews (state in the URL query)
    tools/[id]/              tool pages (linked from component and library pages)
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

Tools in `src/lib/data/tools/` load the same way (`tools`, `toolsFor(componentId)`,
`toolsUsedBy(libraryId)`). Every tool must map to a component that a tracked library provides,
which keeps the section grounded in what the site compares.

`vite.config.ts` also reads the library and tool files (a simple regex on `name:`) to build the sidebar.

## Code blocks and twoslash

The theme highlights fenced code blocks at build time with shiki (`highlighter` from
`@sveltepress/theme-default`). `highlighter.twoslash` is on in `vite.config.ts`, so `ts` and
`svelte` blocks get type hovers; it runs with twoslash's `noErrors` because its TypeScript setup
doesn't resolve every library's types the way the real build does, and we want hovers, not
diagnostics. Preview cards reuse the same pipeline: the `previewCode()` plugin answers
`previews/src/<lib>/<component>.svelte?svp-code` with a Svelte component made from the
highlighter's output (it is Svelte markup, with `<CopyCode />` and twoslash `<Floating>` snippets,
so it has to be compiled rather than injected as HTML). `src/lib/previews.ts` globs those modules.

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
- **Light/dark:** the frame follows the site (`previews/theme.svelte.ts` applies each library's
  documented dark switch; `PreviewFrame` posts mode changes to the frame). See previews.md.

## SveltePress quirks to know

- The root `+layout.svelte` is wrapped in `GlobalLayout`, and every `+page.(svelte|md)` is
  wrapped in `PageLayout` with **static** frontmatter.
- Route files named `+page@*.svelte` are emptied by the SveltePress transform, so don't use
  layout-reset names.
- Dynamic pages can't set the frontmatter title, so they use `PageMeta.svelte` (marker metas
  that `hooks.server.ts` swaps into the prerendered HTML, plus `document.title` on client
  navigation). The same component takes the page's `anchors` ("On this page") and writes them
  to the theme's own TOC store, which the theme doesn't export: `vite.config.ts` aliases it as
  `#theme-layout`, typed in `src/theme-layout.d.ts`. Static `.svelte` pages put `anchors` in
  their frontmatter instead; Markdown pages get them from their headings.
- The theme lays pages out as sidebar | content | TOC inside a 1440px frame. Pages without a
  TOC (the lists and Compare) would leave the third column empty, so `site.css` widens their
  content into it on desktop (`main:not(:has(.toc))`). Pages with a TOC keep the theme's column.
- Route groups like `(group)` break the theme's home and sidebar detection (it reads
  `page.route.id`).
- Desktop navbar links appear at widths of 1440px and up; below that they're in the menu.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to GitHub
Pages. `actions/configure-pages` provides the base path (`/SvelteUILibraryPicker` for the project
site, or empty with a custom domain), and it's passed to both builds through `BASE_PATH`:

- The site uses `svelteKitOptions.paths.base`. Svelte code links via `url()` in `#lib/url.ts`.
- The preview app uses Vite `base: ${BASE_PATH}/preview/`.

The output is plain static files, so any static host works (set `BASE_PATH` if it serves from
a sub-path).

## SvelteKit 3 notes

- `$lib` is replaced by `#lib` (package.json `imports`). Import TS with explicit extensions:
  `#lib/data/index.ts`.
- There is no `svelte.config.js`. Kit options go in `sveltepress({ svelteKitOptions })`.
- Types: `Handle` comes from `@sveltejs/kit/hooks`.
