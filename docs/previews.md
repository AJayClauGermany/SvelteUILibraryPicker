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

| Library | Previews |
| --- | --- |
| Ark UI | accordion, checkbox, dialog, switch, tabs |
| Bits UI | accordion, button, checkbox, dialog, switch, tabs |
| Carbon Components Svelte | accordion, alert, badge, button, checkbox, dialog, switch, tabs |
| Flowbite Svelte | accordion, alert, badge, button, checkbox, dialog, switch, tabs |
| M3 Svelte | badge, button, checkbox, dialog, switch, tabs |
| Melt UI (next-gen) | accordion, dialog, tabs |
| Skeleton | accordion, badge, button, checkbox, dialog, switch, tabs |
| SVAR Core | button, checkbox, dialog, switch, tabs |
| Sveltestrap | accordion, alert, badge, button, checkbox, dialog, switch, tabs |

Everything else falls back to a "See it in the official docs" card. The target set for every
library is button, switch, checkbox, accordion, tabs, dialog, badge and alert, where the library
has them; headless libraries have no button, badge or alert.

Not covered yet:

- **Svelte UX** 1.x requires Tailwind 3 (its theme is a Tailwind 3 plugin), so it cannot run in
  the Tailwind 4 pipeline. Revisit when Svelte UX 2.0 (Svelte 5 + Tailwind 4) leaves prerelease.
- **shadcn-svelte** is copy-paste; see above.

## Roadmap

- **shadcn-svelte previews**: generate the default components with its CLI into a dedicated
  folder under `previews/src/shadcn-svelte/` and reuse the Tailwind setup above.
- **Svelte UX 2.0**: add a `styles.css` and previews once 2.0 is stable.
- **Screenshot tests** (Playwright) so preview regressions show up in PRs.
