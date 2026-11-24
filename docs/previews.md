# Live previews

The goal: given a set of libraries, show how one component looks **with each library's default
styling**, side by side, with a docs link for each.

## What "default" means

- **Styled libraries** (Carbon, Sveltestrap, Bootstrap Svelte, M3, …): load the library's default theme exactly as
  its install guide says, and add nothing.
- **Headless libraries** (Bits UI, Melt, Ark UI, Zag): they ship no styles, so the preview is
  intentionally unstyled. That *is* their default, and the compare page says so.
- **Tailwind libraries** (Skeleton, Flowbite Svelte, Kampsy UI, Konsta UI, Sivir UI): Tailwind v4 runs inside the preview app
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
| Kampsy UI, Konsta UI, Sivir UI | `class="dark"` on `<html>` (each theme file's dark variant) |
| shadcn-svelte and the copy-paste registries | `class="dark"` on `<html>` (what mode-watcher sets) with the generated `.dark` variables |

The app picks the mode from `?theme=`, else from the embedding site's `dark` class, else the OS,
and the site posts `{ type: 'ulp:theme', theme }` on toggles (see `previews/main.ts`).

## Tools

Tools (`src/lib/data/tools/`) get previews the same way, in `previews/src/<tool-id>/`. The "default" is
whatever the package ships: styled components (svelte-sonner, svelte-select, Carbon Charts, SVAR
DataGrid…) load their own CSS or theme, and headless ones (TanStack Table, Tiptap, Floating UI…)
look unstyled on purpose. Tool previews appear on the tool's page and under "Related tools" on the
component page. Library and tool ids must never collide, since both key the folder (`pnpm validate`
checks it).

## Helper scripts

- `node scripts/preview-coverage.js [--missing|--json]`: components each library and tool lists, and
  which still lack a preview (blocked entries are marked).
- `node scripts/check-previews.js [<id>|<id>/<component>]... [--dark] [--shots <dir>]`: opens previews
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

| Library | Count | Previews |
| --- | --- | --- |
| Ark UI | 57 | accordion, alert-dialog, angle-slider, avatar, calendar, carousel, checkbox, clipboard, collapsible, color-picker, combobox, context-menu, date-field, date-picker, date-range-field, date-range-picker, dialog, drawer, dropdown-menu, editable, file-upload, floating-panel, focus-trap, form, hover-card, image-cropper, input, list, marquee, navigation-menu, number-input, pagination, password-input, pin-input, popover, progress, radio-group, rating, resizable, scroll-area, select, signature-pad, slider, stepper, switch, table-of-contents, tabs, tags-input, textarea, time-picker, timer, toast, toggle, toggle-group, tooltip, tour, tree-view |
| Bits UI | 41 | accordion, alert-dialog, aspect-ratio, avatar, button, calendar, checkbox, collapsible, combobox, command-palette, context-menu, date-field, date-picker, date-range-field, date-range-picker, dialog, dropdown-menu, hover-card, label, menubar, meter, navigation-menu, pagination, pin-input, popover, progress, radio-group, range-calendar, rating, scroll-area, select, separator, slider, switch, tabs, time-picker, time-range-field, toggle, toggle-group, toolbar, tooltip |
| Bootstrap Svelte | 44 | accordion, alert, badge, breadcrumb, button, button-group, card, carousel, checkbox, collapsible, color-picker, date-picker, dialog, drawer, dropdown-menu, file-upload, form, grid, input, label, list, navigation-menu, number-input, pagination, password-input, popover, progress, radio-group, search, select, skeleton, slider, spinner, split-button, switch, table, table-of-contents, tabs, textarea, time-picker, toast, toggle, toggle-group, tooltip |
| Carbon Components Svelte | 62 | accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, card, carousel, checkbox, clipboard, code-block, collapsible, combobox, context-menu, date-picker, date-range-picker, dialog, dropdown-menu, file-upload, form, grid, image, input, link, list, meter, navigation-menu, number-input, pagination, password-input, pin-input, popover, progress, radio-group, search, select, separator, sidebar, skeleton, slider, spinner, split-button, stack, stepper, switch, table, tabs, tags-input, textarea, theme-switcher, time-picker, timer, toast, toggle-group, toolbar, tooltip, tree-view, typography, virtual-list |
| coss ui for Svelte | 58 | accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, chart, checkbox, collapsible, color-picker, combobox, command-palette, context-menu, date-picker, date-range-picker, dialog, drawer, dropdown-menu, empty-state, form, hover-card, image-cropper, input, kbd, label, meter, number-input, pagination, pin-input, popover, progress, radio-group, range-calendar, rating, scroll-area, select, separator, sidebar, skeleton, slider, spinner, stepper, switch, table, tabs, textarea, timeline, toast, toggle, toggle-group, toolbar, tooltip, tree-view |
| Flowbite Svelte | 62 | accordion, alert, avatar, badge, bottom-navigation, breadcrumb, button, button-group, calendar, card, carousel, checkbox, clipboard, combobox, command-palette, date-picker, date-range-picker, dialog, drawer, dropdown-menu, file-upload, floating-action-button, footer, form, image, input, kbd, label, link, list, navigation-menu, number-input, pagination, popover, progress, radio-group, rating, resizable, search, select, separator, sidebar, skeleton, slider, spinner, stepper, switch, table, table-of-contents, tabs, tags-input, textarea, theme-switcher, time-picker, timeline, toast, toggle-group, toolbar, tooltip, tour, typography, virtual-list |
| Kampsy UI | 31 | accordion, alert, avatar, badge, button, calendar, checkbox, clipboard, code-block, dialog, dropdown-menu, empty-state, input, kbd, pagination, progress, radio-group, search, select, skeleton, spinner, split-button, switch, table, tabs, textarea, theme-switcher, toast, toggle-group, tooltip, typography |
| Konsta UI | 30 | alert-dialog, badge, bottom-navigation, breadcrumb, button, card, checkbox, dialog, drawer, dropdown-menu, floating-action-button, icon, input, link, list, navigation-menu, number-input, popover, progress, radio-group, search, select, slider, spinner, switch, table, textarea, toast, toggle-group, toolbar |
| Lily | 63 | accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, clipboard, code-block, collapsible, command-palette, context-menu, date-picker, dialog, drawer, dropdown-menu, empty-state, file-upload, form, hover-card, image-cropper, input, kbd, label, link, list, menubar, navigation-menu, number-input, pagination, password-input, pin-input, popover, progress, radio-group, range-calendar, resizable, scroll-area, search, select, separator, sidebar, skeleton, slider, spinner, stepper, switch, table, table-of-contents, tabs, tags-input, textarea, toast, toggle, toggle-group, tooltip |
| M3 Svelte | 27 | badge, button, button-group, card, checkbox, date-picker, dialog, drawer, dropdown-menu, floating-action-button, icon, input, list, navigation-menu, progress, radio-group, select, separator, sidebar, slider, spinner, split-button, switch, tabs, textarea, time-picker, toast |
| Melt UI (next-gen) | 17 | accordion, avatar, collapsible, combobox, dialog, file-upload, pin-input, popover, progress, radio-group, select, slider, tabs, toast, toggle, tooltip, tree-view |
| neobrutalism-svelte | 32 | accordion, avatar, badge, button, button-group, card, checkbox, command-palette, dialog, drawer, dropdown-menu, empty-state, form, input, label, list, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, sidebar, skeleton, slider, spinner, switch, tabs, textarea, toast, tooltip |
| RetroUI Svelte | 41 | accordion, alert, alert-dialog, avatar, badge, breadcrumb, button, calendar, card, checkbox, collapsible, command-palette, context-menu, date-picker, date-range-picker, dialog, drawer, dropdown-menu, hover-card, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, range-calendar, select, separator, slider, spinner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip, typography |
| shadcn-svelte | 55 | accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, code-block, collapsible, combobox, command-palette, context-menu, date-picker, date-range-picker, dialog, drawer, dropdown-menu, empty-state, form, hover-card, input, kbd, label, list, menubar, navigation-menu, pagination, pin-input, popover, progress, radio-group, range-calendar, resizable, scroll-area, select, separator, sidebar, skeleton, slider, spinner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip |
| shadcn-svelte-extras | 21 | alert-dialog, button, clipboard, code-block, color-picker, dialog, editable, file-upload, image-cropper, link, meter, number-input, password-input, rating, split-button, stepper, table-of-contents, tabs, tags-input, theme-switcher, tree-view |
| Sivir UI | 46 | accordion, alert, alert-dialog, avatar, badge, button, card, checkbox, clipboard, code-block, collapsible, color-picker, combobox, command-palette, context-menu, dialog, drawer, dropdown-menu, file-upload, hover-card, input, kbd, label, list, meter, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, sidebar, skeleton, slider, spinner, stepper, switch, tabs, tags-input, textarea, toast, toggle, toggle-group, tooltip, typography |
| Skeleton | 46 | accordion, alert-dialog, avatar, badge, bottom-navigation, button, card, carousel, checkbox, collapsible, color-picker, combobox, date-picker, dialog, dropdown-menu, file-upload, floating-panel, form, input, label, list, marquee, meter, navigation-menu, pagination, popover, progress, qr-code, radio-group, rating, select, separator, sidebar, skeleton, slider, stepper, switch, table, tabs, tags-input, textarea, toast, toggle-group, tooltip, tree-view, typography |
| SVAR Core | 31 | alert-dialog, avatar, button, calendar, checkbox, color-picker, combobox, date-picker, date-range-picker, dialog, drawer, form, icon, input, locale-provider, number-input, pagination, popover, radio-group, range-calendar, select, slider, switch, tabs, tags-input, textarea, time-picker, toast, toggle, toggle-group, tooltip |
| Sveltestrap | 35 | accordion, alert, badge, breadcrumb, button, button-group, card, carousel, checkbox, collapsible, dialog, drawer, dropdown-menu, file-upload, form, grid, image, input, label, list, navigation-menu, pagination, popover, progress, radio-group, select, slider, spinner, switch, table, tabs, textarea, theme-switcher, toast, tooltip |
| Zag.js | 53 | accordion, alert-dialog, angle-slider, avatar, calendar, carousel, checkbox, clipboard, collapsible, color-picker, combobox, context-menu, date-field, date-picker, date-range-field, date-range-picker, dialog, drawer, dropdown-menu, editable, file-upload, floating-panel, focus-trap, hover-card, image-cropper, list, marquee, navigation-menu, number-input, pagination, password-input, pin-input, popover, progress, radio-group, rating, resizable, scroll-area, select, signature-pad, slider, stepper, switch, table-of-contents, tabs, tags-input, timer, toast, toggle, toggle-group, tooltip, tour, tree-view |

**Tools** (one preview per listed component): Carbon Charts, Carta, driver.js, Embla Carousel,
Floating UI (popover, tooltip), LayerChart, Lucide, Neodrag, PaneForge, SVAR DataGrid,
svelte-chartjs, svelte-dnd-action, Iconify, svelte-easy-crop, svelte-echarts, svelte-highlight, svelte-maplibre,
svelte-maplibre-gl, svelte-select (select, combobox), svelte-sonner, svelte-toast, TanStack Table,
TanStack Virtual, Tiptap; added 2026-11-24: AutoAnimate, emoji-picker-element, Event Calendar,
NumberFlow, phosphor-svelte, PhotoSwipe, SVAR Gantt, svelte-awesome-color-picker,
svelte-codemirror-editor, svelte-confetti, svelte-exmarkdown, Svelte Flow, svelte-gestures,
svelte-i18n, svelte-range-slider-pips, svelte-tel-input, svelte-tiptap, Threlte. Left out on purpose:
`@svelte-put/shortcut` (`ai.status` restricted) and Paraglide JS (a compiler that needs a
project-level code-generation step). Run `node scripts/preview-coverage.js` for the live numbers.

Everything else falls back to a "See it in the official docs" card. The goal is a preview for
every visual component a library lists. Purely non-visual utilities (portals, locale/config
providers) are left out on purpose.

Not covered yet:

- **Svelte UX** 1.x requires Tailwind 3 (its theme is a Tailwind 3 plugin), so it cannot run in
  the Tailwind 4 pipeline. Revisit when Svelte UX 2.0 (Svelte 5 + Tailwind 4) leaves prerelease.
- **Svelte Material UI**: its `ai.status` is `restricted`, so it gets facts and links only.
- Individual gaps: Sivir UI's breadcrumb imports SvelteKit's `$app/state`, which the preview app
  doesn't have; coss ui's file upload generates an empty module; coss ui's rich editor and map
  were left out (see above); shadcn-svelte's typography is not a registry item; unstyled QR codes
  (Ark UI, Zag) overflow the frame; Skeleton's context menu opened at the wrong position; Flowbite's chart and icons, and Sveltestrap's icons, need
  packages we don't install.

## Roadmap

- **Svelte UX 2.0**: add a `styles.css` and previews once 2.0 is stable.
- **Screenshot tests** (Playwright) so preview regressions show up in PRs.
