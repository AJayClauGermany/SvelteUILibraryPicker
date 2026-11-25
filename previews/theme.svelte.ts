/**
 * Light/dark mode for previews.
 *
 * The site is light or dark, and a preview should match it so defaults can be judged in
 * context. Every library gets the browser's own dark rendering (`color-scheme`, which also
 * darkens the page canvas and form controls); that is the whole story for headless libraries.
 * Styled libraries additionally get their OWN documented dark mode switch, listed below with
 * the docs that describe it. Nothing here is styling of ours.
 *
 * `theme` is reactive so a preview can read it where a library switches themes through a
 * component rather than a document attribute (SVAR Core).
 */
export type PreviewTheme = 'light' | 'dark'

export const theme = $state<{ current: PreviewTheme }>({ current: 'light' })

/** Per-library switch, keyed by preview folder. Omitted libraries have no documented dark mode. */
const switches: Record<string, (dark: boolean) => void> = {
	// Docs: dark mode page ("class strategy"): put `class="dark"` on <html>; the custom variant in
	// ./src/flowbite-svelte/styles.css makes the `dark:` utilities follow it.
	'flowbite-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	// README "Dynamic theming": with all.css loaded, the `theme` attribute on <html> picks the
	// theme; "white" is the default. g100 is the dark half of the pair its Theme component
	// toggles by default (docs: https://svelte.carbondesignsystem.com/components/Theme).
	'carbon-components-svelte': dark => document.documentElement.setAttribute('theme', dark ? 'g100' : 'white'),
	// Docs "Dark Mode" guide, data-attribute strategy: `data-mode` on <html> plus the matching
	// custom variant in ./src/skeleton/styles.css. Skeleton's colours are light-dark() pairs.
	'skeleton': dark => document.documentElement.setAttribute('data-mode', dark ? 'dark' : 'light'),
	// Bootstrap 5.3 colour modes (`[data-bs-theme=dark]` in bootstrap.css); Sveltestrap's own
	// useColorMode() helper writes the same attribute.
	'sveltestrap': dark => document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light'),
	// Bootstrap Svelte: same Bootstrap 5.3 colour modes (docs "Theming": https://bootstrap-svelte.vercel.app/theming).
	'bootstrap-svelte': dark => document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light'),
	// YeSvelte: tabler.css carries `[data-bs-theme=dark]` rules, and the docs site's own dark toggle
	// sets `data-bs-theme` (https://github.com/yesvelte/yesvelte/blob/dev/src/doc-components/Layout.svelte).
	'yesvelte': dark => document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light'),
	// AgnosUI (Bootstrap package): Bootstrap 5.3 colour modes; its docs' example frames set
	// `data-bs-theme="dark"` on <html> when the docs theme is dark
	// (https://github.com/AmadeusITGroup/AgnosUI/blob/main/svelte/demo/src/bootstrap/index.html).
	'agnosui': dark => document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light'),
	// Kampsy UI: kampsy-ui/theme.css declares `@variant dark (&:where(.dark, .dark *))`, so `class="dark"`
	// on <html> selects its dark tokens (https://ui.kampsy.xyz/installation).
	'kampsy-ui': dark => document.documentElement.classList.toggle('dark', dark),
	// Konsta UI: its theme declares `@custom-variant dark (&:where(.dark, .dark *))`; the library's own
	// kitchen-sink toggles `class="dark"` on <html> (https://konstaui.com/svelte/konsta-provider, prop "dark").
	'konsta': dark => document.documentElement.classList.toggle('dark', dark),
	// Sivir UI docs "Theming": dark mode applies when <html> has the `.dark` class (https://sivir.dev/docs/theming).
	'sivir-ui': dark => document.documentElement.classList.toggle('dark', dark),
	// shadcn-svelte and the registries built on it use the class strategy: `.dark` on <html> (which
	// mode-watcher sets in an app) plus `@custom-variant dark (&:is(.dark *))` and the `.dark { ... }`
	// variables in each library's generated ./src/<lib>/styles.css.
	// Docs: https://shadcn-svelte.com/docs/dark-mode/svelte (lily: https://lily-svelte.levish.workers.dev/docs/dark-mode;
	// coss ui: https://cossui-svelte.com/docs/styling; RetroUI: https://retroui-svelte.netlify.app/docs/getting-started;
	// neobrutalism-svelte's dark mode page links to shadcn-svelte's).
	'shadcn-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	'shadcn-svelte-extras': dark => document.documentElement.classList.toggle('dark', dark),
	'cossui-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	'neobrutalism-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	'retroui-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	'lily': dark => document.documentElement.classList.toggle('dark', dark),
	// Spaper: its PapierCSS styles switch to dark tokens with `class="dark"` on a parent, usually <html>
	// (PapierCSS README, section "Theme": https://github.com/Oli8/papiercss#readme).
	'spaper': dark => document.documentElement.classList.toggle('dark', dark),
	// Origin UI - Svelte: the README's CSS variables block has a `.dark { ... }` set, and the repo's
	// src/app.css (./src/origin-ui-svelte/styles.css) adds `@custom-variant dark (&:is(.dark *))`
	// (https://github.com/max-got/originui-svelte#css-variables).
	'origin-ui-svelte': dark => document.documentElement.classList.toggle('dark', dark),
	// M3 Svelte needs nothing extra: its theme CSS is `color-scheme: light dark` with light-dark()
	// colours, so the baseline color-scheme switch above selects the dark palette.
	// SVAR Core themes through wrapper components (<Willow> / <WillowDark>), so each SVAR preview
	// reads `theme.current` itself.
	// Event Calendar README "Theming": the built-in dark theme applies when any parent of the calendar
	// has the `ec-dark` class (https://github.com/vkurko/calendar#theming).
	'event-calendar': dark => document.documentElement.classList.toggle('ec-dark', dark),
	// PerfectThings UI: its ThemeSwitcher and initThemes() (https://ui.perfectthings.dev/#ThemeSwitcher) put
	// `theme-light` or `theme-dark` on <html> (src/theme-switcher/utils.ts); with neither, its root CSS is dark.
	'perfectthings-ui': dark => {
		document.documentElement.classList.toggle('theme-dark', dark)
		document.documentElement.classList.toggle('theme-light', !dark)
	},
}

/**
 * Folders that stay `color-scheme: light` even in dark mode, because the package documents no dark
 * mode and paints fixed light surfaces whose text would inherit the browser's dark (light-coloured)
 * text: the result would be unreadable, which is not the package's default either.
 */
const lightOnly = new Set([
	// svelte-select: the list background is `var(--list-background, #fff)` while item text inherits.
	'svelte-select',
	// carta-md: default.css ships `*-dark` variables, but switching to them is CSS the app writes
	// itself (docs "Editing Styles"), which would be styling of ours.
	'carta-md',
	// svelte-codemirror-editor: CodeMirror's base theme paints a fixed light gutter and light-theme
	// highlight colours; the README documents no dark mode (only an optional oneDark `theme` prop).
	'svelte-codemirror-editor',
	// svelte-awesome-color-picker: the popup is `var(--cp-bg-color, white)` while input text inherits;
	// its dark theme is CSS variables the app sets itself (docs Examples > Dark theme).
	'svelte-awesome-color-picker',
])

export function applyTheme(library: string, next: PreviewTheme) {
	theme.current = next
	document.documentElement.style.colorScheme = lightOnly.has(library) ? 'light' : next
	switches[library]?.(next === 'dark')
}
