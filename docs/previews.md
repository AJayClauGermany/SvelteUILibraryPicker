# Live previews

The goal: given a set of libraries, show how one component looks **with each library's default
styling**, side by side, with a docs link for each.

## What "default" means

- **Styled libraries** (Carbon, Sveltestrap, M3, …): load the library's default theme exactly as
  its install guide says, and add nothing.
- **Headless libraries** (Bits UI, Melt, Ark UI): they ship no styles, so the preview is
  intentionally unstyled. That *is* their default, and the compare page says so.
- **Tailwind libraries** (Skeleton, Flowbite Svelte): Tailwind v4 runs inside the preview app
  only. Each library has its own `previews/src/<lib>/styles.css` that imports Tailwind with
  `source(none)`, the library's documented default theme, and `@source` limited to that
  library's folder and package, so themes and utilities never mix between libraries.
- **M3 Svelte** compiles its component styles through the `vite-plugin-functions-mixins` plugin
  from its quick start, registered in `previews/vite.config.ts`; `previews/src/m3-svelte/styles.css`
  holds the quick start's base styles and the theme page's default colour snippet.
- **Copy-paste libraries** (shadcn-svelte): the "default" is the generated component with its
  default theme. Not supported yet, because it needs generated files per component.

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
| SVAR Core | `<WillowDark>` instead of `<Willow>` (the preview reads `theme.current`) |
| Sveltestrap | Bootstrap's `data-bs-theme="dark"` on `<html>` |

The app picks the mode from `?theme=`, else from the embedding site's `dark` class, else the OS,
and the site posts `{ type: 'ulp:theme', theme }` on toggles (see `previews/main.ts`).

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
| Carbon Components Svelte | 62 | accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, card, carousel, checkbox, clipboard, code-block, collapsible, combobox, context-menu, date-picker, date-range-picker, dialog, dropdown-menu, file-upload, form, grid, image, input, link, list, meter, navigation-menu, number-input, pagination, password-input, pin-input, popover, progress, radio-group, search, select, separator, sidebar, skeleton, slider, spinner, split-button, stack, stepper, switch, table, tabs, tags-input, textarea, theme-switcher, time-picker, timer, toast, toggle-group, toolbar, tooltip, tree-view, typography, virtual-list |
| Flowbite Svelte | 62 | accordion, alert, avatar, badge, bottom-navigation, breadcrumb, button, button-group, calendar, card, carousel, checkbox, clipboard, combobox, command-palette, date-picker, date-range-picker, dialog, drawer, dropdown-menu, file-upload, floating-action-button, footer, form, image, input, kbd, label, link, list, navigation-menu, number-input, pagination, popover, progress, radio-group, rating, resizable, search, select, separator, sidebar, skeleton, slider, spinner, stepper, switch, table, table-of-contents, tabs, tags-input, textarea, theme-switcher, time-picker, timeline, toast, toggle-group, toolbar, tooltip, tour, typography, virtual-list |
| M3 Svelte | 27 | badge, button, button-group, card, checkbox, date-picker, dialog, drawer, dropdown-menu, floating-action-button, icon, input, list, navigation-menu, progress, radio-group, select, separator, sidebar, slider, spinner, split-button, switch, tabs, textarea, time-picker, toast |
| Melt UI (next-gen) | 17 | accordion, avatar, collapsible, combobox, dialog, file-upload, pin-input, popover, progress, radio-group, select, slider, tabs, toast, toggle, tooltip, tree-view |
| Skeleton | 46 | accordion, alert-dialog, avatar, badge, bottom-navigation, button, card, carousel, checkbox, collapsible, color-picker, combobox, date-picker, dialog, dropdown-menu, file-upload, floating-panel, form, input, label, list, marquee, meter, navigation-menu, pagination, popover, progress, qr-code, radio-group, rating, select, separator, sidebar, skeleton, slider, stepper, switch, table, tabs, tags-input, textarea, toast, toggle-group, tooltip, tree-view, typography |
| SVAR Core | 31 | alert-dialog, avatar, button, calendar, checkbox, color-picker, combobox, date-picker, date-range-picker, dialog, drawer, form, icon, input, locale-provider, number-input, pagination, popover, radio-group, range-calendar, select, slider, switch, tabs, tags-input, textarea, time-picker, toast, toggle, toggle-group, tooltip |
| Sveltestrap | 35 | accordion, alert, badge, breadcrumb, button, button-group, card, carousel, checkbox, collapsible, dialog, drawer, dropdown-menu, file-upload, form, grid, image, input, label, list, navigation-menu, pagination, popover, progress, radio-group, select, slider, spinner, switch, table, tabs, textarea, theme-switcher, toast, tooltip |

Everything else falls back to a "See it in the official docs" card. The goal is a preview for
every visual component a library lists. Purely non-visual utilities (portals, locale/config
providers) are left out on purpose.

Not covered yet:

- **Svelte UX** 1.x requires Tailwind 3 (its theme is a Tailwind 3 plugin), so it cannot run in
  the Tailwind 4 pipeline. Revisit when Svelte UX 2.0 (Svelte 5 + Tailwind 4) leaves prerelease.
- **shadcn-svelte** is copy-paste; see above.

## Roadmap

- **shadcn-svelte previews**: generate the default components with its CLI into a dedicated
  folder under `previews/src/shadcn-svelte/` and reuse the Tailwind setup above.
- **Svelte UX 2.0**: add a `styles.css` and previews once 2.0 is stable.
- **Screenshot tests** (Playwright) so preview regressions show up in PRs.
