# Live previews

The goal: given a set of libraries, show how one component looks **with each library's default
styling**, side by side, with a docs link for each.

## What "default" means

- **Styled libraries** (Carbon, Sveltestrap, Bootstrap Svelte, M3, …): load the library's default theme exactly as
  its install guide says, and add nothing.
- **Headless libraries** (Bits UI, Melt, Melt UI legacy, Ark UI, Zag): they ship no styles, so the preview is
  intentionally unstyled. That *is* their default, and the compare page says so.
- **Tailwind libraries** (Skeleton, Flowbite Svelte, Kampsy UI, Konsta UI, Sivir UI, Svelte 5 UI Lib, Spaper, STDF): Tailwind v4 runs inside the preview app
  only. Each library has its own `previews/src/<lib>/styles.css` that imports Tailwind with
  `source(none)`, the library's documented default theme, and `@source` limited to that
  library's folder and package, so themes and utilities never mix between libraries.
- **M3 Svelte** compiles its component styles through the `vite-plugin-functions-mixins` plugin
  from its quick start, registered in `previews/vite.config.ts`; `previews/src/m3-svelte/styles.css`
  holds the quick start's base styles and the theme page's default colour snippet.
- **Copy-paste libraries** (shadcn-svelte, shadcn-svelte-extras, coss ui, neobrutalism-svelte,
  RetroUI, Lily): the "default" is the generated component with its default theme. Each library's
  own CLI (`shadcn-svelte add`, `jsrepo`, `lily-svelte add`) was run in a scratch SvelteKit project
  with its default style/base colour, and the output was copied into `previews/src/<lib>/`:
  component source under `ui/` (or `components/ui/` for extras), helpers in `hooks/` and
  `utils.ts`, and the generated global CSS as `styles.css` (with `source(none)` and `@source '.'`
  added). Previews only glob top-level files, so these subfolders are never treated as previews.
  The generated code is kept as is apart from mechanical changes: `$lib/...` imports rewritten to
  relative paths (the preview app has no `$lib`), RetroUI's calendar type import path fixed, and one snippet parameter type
  added in coss ui's color picker so `pnpm check` passes. coss ui's rich editor and map were left
  out because they need ~30 extra packages (Tiptap, Mermaid, MapLibre). To refresh one of these
  folders, re-run the library's CLI the same way and re-apply those changes.
  **Origin UI Svelte** has no CLI or registry: its `src/lib/components/ui` folder, `utils.ts` and
  `src/app.css` were copied from a shallow clone of `max-got/originui-svelte` at commit 0499ba8
  (2025-06-18), with the same `$lib` rewrites, `source(none)`/`@source '.'` in `styles.css`, the
  `@font-face` rules for two fonts we don't install removed, one `$props<{...}>()` turned into an
  annotated `$props()` for current Svelte types, and `ui/data-table/` left out (it needs
  `@tanstack/table-core`). Components that exist only as docs examples, with no base component,
  are skipped (see `preview-skips.ts`).
- **Framework7 Svelte** needs an initialised app around every component. Each preview wraps its
  content in `previews/src/framework7-svelte/lib/F7App.svelte`, which follows the "Initialize App"
  and "App Layout" docs (CSS bundle, `Framework7.use(Framework7Svelte)`, `App > View > Page`, default
  theme `auto`). It also sets `box-sizing: border-box` on the preview page's `#app`, so the app's
  `height: 100%` fits the padded frame; that fixes the frame, not the library's look.

## Light and dark

Previews follow the site's mode, so defaults can be judged in context; each card also has a
Light/Dark button to see the other one. `previews/theme.svelte.ts` applies the mode: every
preview gets the browser's own dark rendering (`color-scheme`, which darkens the page canvas and
form controls; that is all a headless library has), and styled libraries additionally get their
**own documented** dark switch, with the source noted next to each entry:

| Library | Dark mode |
| --- | --- |
| Carbon Components Svelte | `all.css` + `theme="g100"` on `<html>` (its default is `white`) |
| Flowbite Svelte | `class="dark"` on `<html>` |
| M3 Svelte | nothing extra: its theme CSS uses `light-dark()` |
| Skeleton | `data-mode="dark"` on `<html>` + the data-attribute custom variant |
| SVAR Core, SVAR DataGrid | `<WillowDark>` instead of `<Willow>` (the preview reads `theme.current`) |
| svelte-sonner, svelte-echarts, Carbon Charts, svelte-highlight | the tool's own documented theme prop or theme pair, set from `theme.current` in the preview |
| svelte-select, Carta | stay light: no documented dark mode, and their fixed light surfaces would be unreadable under `color-scheme: dark` (`lightOnly` in `previews/theme.svelte.ts`) |
| Sveltestrap, Bootstrap Svelte | Bootstrap's `data-bs-theme="dark"` on `<html>` |
| Kampsy UI, Konsta UI, Sivir UI, Svelte 5 UI Lib, Spaper, Framework7 Svelte | `class="dark"` on `<html>` (each library's documented dark class) |
| YeSvelte, AgnosUI | Bootstrap's `data-bs-theme="dark"` on `<html>` (Tabler's and Bootstrap's colour modes) |
| PerfectThings UI | `theme-dark` / `theme-light` on `<html>`, what its ThemeSwitcher sets (its stylesheet is dark when neither class is set, so light mode needs `theme-light`) |
| STDF | `data-mode="dark"` (light is `data-mode="primary"`) on `<html>`, what its `switchMode()` sets, with the guide's dark variant in `./src/stdf/styles.css` |
| Event Calendar | `class="ec-dark"` on `<html>` (the README's built-in dark theme) |
| shadcn-svelte, the copy-paste registries and Origin UI Svelte | `class="dark"` on `<html>` (what mode-watcher sets) with the generated `.dark` variables |

The app picks the mode from `?theme=`, else from the embedding site's `dark` class, else the OS,
and the site posts `{ type: 'ulp:theme', theme }` on toggles (see `previews/main.ts`).

## Tools

Tools (`src/lib/data/tools/`) get previews the same way, in `previews/src/<tool-id>/`. The "default" is
whatever the package ships: styled components (svelte-sonner, svelte-select, Carbon Charts, SVAR
DataGrid…) load their own CSS or theme, and headless ones (TanStack Table, Tiptap, Floating UI…)
look unstyled on purpose. Tool previews appear on the tool's page and under "Related tools" on the
component page. Library and tool ids must never collide, since both key the folder (`pnpm validate`
checks it).

## Package quirks to know

Setup details that are easy to undo by accident:

- `@event-calendar/core` depends on `svelte` directly (not as a peer), so the root `svelte`
  devDependency is kept at a version that satisfies it, to keep a single Svelte copy. Bump them
  together.
- emoji-picker-element reads its emoji data from the local `emoji-picker-element-data` package
  instead of its default CDN, so previews stay offline.
- svelte-5-ui-lib's install-guide base input styles are unlayered, so under Tailwind 4 they override
  the components' own classes. It also imports its own index as a directory (`from '..'`), which the
  production build only resolves through the small resolver in `previews/vite.config.ts`.
- svelte-codemirror-editor and svelte-awesome-color-picker render light-only: their dark themes are
  app-written CSS or an optional theme package.

## Helper scripts

- `pnpm coverage [--todo|--why <id>|--json]`: components each library and tool lists, and which
  still lack a preview: to do, skipped on purpose (reason from `src/lib/data/preview-skips.ts`),
  blocked by `ai.status`, or non-visual.
- `pnpm check:previews [<id>|<id>/<component>]... [--dark] [--shots <dir>]`: opens previews
  in headless Chromium (Playwright from the global install) against the preview app's own Vite
  server, and fails on console errors, exceptions, empty renders or requests to other hosts. A short
  `allowedHosts` list covers what libraries' own defaults load (Carbon's and SVAR's fonts, Google
  Fonts in generated themes, the Iconify API); anything else is reported with its host name.

## How they appear on the site

`PreviewFrame.svelte` shows each preview as a card: the front embeds the preview page in an
`<iframe>`, and **Code** flips it over (a cross-fade when the visitor prefers reduced motion) to
show the preview file's source. The source is rendered by SveltePress' own code-block pipeline,
the same one Markdown pages use: shiki with the theme's light and dark themes, the copy button,
and twoslash type hovers. `previewCode()` in `vite.config.ts` turns
`previews/src/<lib>/<component>.svelte?svp-code` into a Svelte component built from the theme's
`highlighter` output; `loadPreviewCode` in `src/lib/previews.ts` loads it on demand. So the file
*is* what visitors read: keep it minimal, keep the header comment with the docs URL, and don't
add anything you wouldn't want shown.

## Rules

- Allowed only when the library's `ai.status` is `welcomes` or `no-statement`. `pnpm validate`
  fails otherwise.
- Write a minimal example of your own. Never copy docs examples.
- Put a header comment with the component's official docs URL.
- Pin the library devDependency to the version recorded in its data file. When you bump one,
  update both.

## Current coverage

Coverage changes with every preview PR, so it is not listed here. Ask the scripts instead:

```sh
pnpm coverage            # entries with gaps: to do, and how many are skipped on purpose
pnpm coverage --todo     # only what can still be added
pnpm coverage --why <id> # every component of one entry, with its state and reason
pnpm about <component>   # one component across every library and tool
```

Components without a preview show a "See it in the official docs" card on the site. The goal is a
preview for every visual component a library lists. Reasons for leaving one out live in
[`src/lib/data/preview-skips.ts`](../src/lib/data/preview-skips.ts) (with the non-visual ids such as
portals and locale providers), so they are kept in one place and checked by `pnpm validate`.
Libraries whose `ai.status` is `restricted` or `unreviewed` (e.g. Svelte Material UI) get no
previews at all.

## Open work

Open preview work (Svelte UX 2.0, more shared components, type hovers) is in
[backlog.md](backlog.md#previews); why screenshot tests are deferred is in
[decisions.md](decisions.md#previews).
