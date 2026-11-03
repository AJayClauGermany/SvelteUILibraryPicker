# Live previews

The goal: given a set of libraries, show how one component looks **with each library's default
styling**, side by side, with a docs link for each.

## What "default" means

- **Styled libraries** (Carbon, Sveltestrap, M3, …): load the library's default theme exactly as
  its install guide says, and add nothing.
- **Headless libraries** (Bits UI, Melt, Ark UI): they ship no styles, so the preview is
  intentionally unstyled. That *is* their default, and the compare page says so.
- **Copy-paste libraries** (shadcn-svelte): the "default" is the generated component with its
  default theme. Not supported yet, because it needs Tailwind and generated files.

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
| Bits UI | accordion, button, switch |
| Carbon Components Svelte | button, switch |

Everything else falls back to a "See it in the official docs" card.

## Roadmap

- **Tailwind-based libraries** (Skeleton, Flowbite, shadcn-svelte, Svelte UX): add Tailwind v4
  (`@tailwindcss/vite`) to the preview app, with one CSS entry per library
  (`previews/src/<lib>/styles.css`: `@import "tailwindcss"`, the library's theme, and
  `@source` limited to that library's folder and package), imported by its previews. That keeps
  each library's utilities and theme separate.
- **Dark mode toggle** for previews, where a library has a documented default dark theme.
- **Screenshot tests** (Playwright) so preview regressions show up in PRs.
