# Older libraries and what migrating them shows

Since 2026-11-24 the site also lists Svelte 3/4-era, idle, archived and deprecated libraries, each
with a maintenance badge (see `maintenanceStatus()` in `src/lib/data/index.ts` and the "Maintenance
status" section of `/guide/features/`). They are there for reference: to see how earlier Svelte
majors solved the same problems, and to plan for the next major (Svelte 6 or later).

These notes come from reading each library's source (a fresh clone, or the npm tarball) during that pass; the
`svelte/internal` counts come from searching that source, excluding tests and docs apps. They are leads,
not facts: re-check the source before you rely on one.

## What made a library survive a major Svelte release

| Pattern | Libraries | On Svelte 5 |
| --- | --- | --- |
| Plain TypeScript factories that return stores and `use:` actions, no `.svelte` files | Melt UI (legacy builders), svelte-headlessui (CaptainCodeman) | Stores and actions still work in Svelte 5, and both widened their peer ranges to include it. |
| The same builder style, but with helpers from `svelte/internal` | Grail UI (`get_current_component` in its shared lifecycle helper, `loop` in the toast utilities) | The builders that use those helpers break on Svelte 5. |
| `.svelte` components in Svelte 3/4 syntax using only public APIs | Attractions, Smelte, ikun-ui, Ato UI, Radix Svelte | Can run in Svelte 5's legacy mode if their peer ranges and toolchain allow it, but a runes rewrite touches every component. |
| Components that import `svelte/internal` (`get_current_component`, `bubble`, `listen`, `current_component`) to forward DOM events | SvelteUI, STWUI, Fluent Svelte, svelte-atoms, rgossiaux svelte-headlessui | Break outright: Svelte 5 no longer exposes `svelte/internal`, so even legacy mode can't run them without patching. |
| Imperative component instances (`new Component({ target })`, `$set`, `$destroy`) | ikun-ui (message box, notification, spin) | Need moving to `mount()` / `unmount()`. |
| Already written with runes and snippets | svelte-5-ui-lib, Origin UI Svelte | No Svelte migration; their migration path is to another library (Flowbite Svelte) or to newer Bits UI and Tailwind releases. |

Takeaways for the next major:

- **Private APIs are the biggest risk.** Every library that reached into `svelte/internal` was
  stranded by Svelte 5. Prefer libraries (and write code) that stick to documented exports.
- **Framework-thin layers age best.** Builders that return plain data plus actions (stores then,
  attachments and classes now) needed the least work across majors.
- **The toolchain ages as fast as the code.** Several older kits are pinned to a build setup as
  much as to a Svelte version: svelte-preprocess 4 and a custom Sass importer (Attractions), a
  Rollup-only plugin with Tailwind 2 and PostCSS 8 plugins (Smelte), Tailwind 3 plugins loaded with
  `require` (STWUI), UnoCSS 0.57 presets (Ato UI, ikun-ui; UnoCSS is now on 66), and runtime
  CSS-in-JS (SvelteUI through Stitches). Check the styling stack, not only the `svelte` peer range.
- **Dependencies carry their own Svelte ceiling.** Ato UI's peer range is `>=4`, but it depends on
  `@melt-ui/svelte` 0.63, which declares `svelte >=3 <5`. ikun-ui's per-component packages list
  `svelte ^4` as a regular dependency, which can pull a second Svelte copy into a Svelte 5 app.
- **A typical component rewrite** is the same list everywhere: `export let` to `$props()`, `$:` to
  `$derived` / `$effect`, slots to snippets, `createEventDispatcher` and `on:` forwarding to
  callback props, `$$restProps` / `$$props` to rest props, and store-based context to rune state.

## Per-library notes

Each library page has a short Svelte-support note. Longer migration notes from the research pass:

- **Attractions** (deprecated, archived): Svelte 3; each component loads its own `.scss` file
  through `<style src>`, so consumers need svelte-preprocess 4, Sass and PostCSS 7/8. Upstream
  points users to shadcn-svelte or Melt UI, so moving on means replacing it.
- **Smelte**: Svelte 3; `svelte` is a regular dependency, styles come from Tailwind 2 through a
  Rollup-only plugin, and dark mode uses Tailwind 2-era custom variants.
- **SvelteUI**: Svelte 3/4; 33 files in the published build import `svelte/internal`, and styling is
  runtime CSS-in-JS through Stitches.
- **STWUI**: Svelte 4; README says it is no longer actively developed and was never moved to
  Svelte 5. Event forwarding uses `svelte/internal`; styling is a CommonJS Tailwind 3 plugin.
- **Fluent Svelte**: Svelte 3; event forwarding through `svelte/internal` in 22 files. Ships
  precompiled CSS, so the toolchain is not the problem.
- **svelte-atoms**: Svelte 3 and Sapper; event forwarding through `svelte/internal`.
- **Radix Svelte** (archived): Svelte 4 compound components; its author moved on to Melt UI, so
  the practical path is `melt` or Bits UI.
- **rgossiaux svelte-headlessui**: Svelte 3 only (peer `^3.47.0`), component-based, heavy use of
  slot props; its event-forwarding helper imports `get_current_component` from `svelte/internal`
  in 37 components.
- **svelte-headlessui (CaptainCodeman)**, **Grail UI**, **Melt UI (legacy)**: store-and-action
  builders; see the table above for why Grail UI differs from the other two.
- **Ato UI** and **ikun-ui**: Svelte 4, both styled through UnoCSS presets built for UnoCSS 0.57.
- **svelte-5-ui-lib** (deprecated, archived): already Svelte 5; merged into Flowbite Svelte.
- **Origin UI Svelte**: already Svelte 5 and Tailwind 4; idle since 2025-06.
