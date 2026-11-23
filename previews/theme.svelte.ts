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
	// M3 Svelte needs nothing extra: its theme CSS is `color-scheme: light dark` with light-dark()
	// colours, so the baseline color-scheme switch above selects the dark palette.
	// SVAR Core themes through wrapper components (<Willow> / <WillowDark>), so each SVAR preview
	// reads `theme.current` itself.
}

export function applyTheme(library: string, next: PreviewTheme) {
	theme.current = next
	document.documentElement.style.colorScheme = next
	switches[library]?.(next === 'dark')
}
