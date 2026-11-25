/**
 * Previews we leave out on purpose, and why.
 *
 * Every component a library or tool lists either has a preview
 * (`previews/src/<id>/<component>.svelte`), or is explained here, or is still to do.
 * `pnpm coverage` reads this file to tell those apart, so "what is missing and why" has one
 * answer instead of notes spread over several docs.
 *
 * - Key `'*'` covers every component of an entry that has no preview.
 * - Entries whose `ai.status` is `restricted` or `unreviewed` need no entry: previews are never
 *   allowed for them (`pnpm validate` enforces it).
 * - When a reason stops being true, delete the line; `pnpm coverage` then lists the component
 *   as to do. `pnpm validate` fails on a skip for a component that already has a preview or that
 *   the entry doesn't list.
 */
import type { ComponentId } from './components'

/** Components that render nothing visible on their own, so they never need a preview. */
export const nonVisualComponents: ComponentId[] = ['portal', 'locale-provider', 'focus-trap']

const svelteInternal
	= 'Imports `svelte/internal`, which Svelte 5 no longer exposes, so it cannot run in the Svelte 5 preview app (docs/legacy-libraries.md).'
const legacySyntax
	= 'Svelte 3/4 kit with an older build toolchain; not attempted in the Svelte 5 + Vite preview app (docs/legacy-libraries.md).'

const originExampleOnly = 'No base component: the look is written in the docs example itself.'

export const previewSkips: Record<string, Partial<Record<ComponentId | '*', string>>> = {
	// --- Libraries that cannot run in the preview app -------------------------------------------
	'svelte-ux': { '*': 'Svelte UX 1.x needs Tailwind 3 (its theme is a Tailwind 3 plugin); the preview app runs Tailwind 4. Revisit when 2.0 is stable.' },
	'svelteui': { '*': svelteInternal },
	'stwui': { '*': `${svelteInternal} Also needs Tailwind 3 plugins.` },
	'fluent-svelte': { '*': svelteInternal },
	'svelte-atoms': { '*': svelteInternal },
	'rgossiaux-svelte-headlessui': { '*': svelteInternal },
	'mdbsvelte': { '*': `${svelteInternal} Also expects Bootstrap 4 and MDB 4 from a CDN.` },
	'svelte-chota': { '*': svelteInternal },
	'svelma': { '*': `${svelteInternal} Also needs Bulma 0.9 compiled with node-sass.` },
	'kahi-ui': { '*': svelteInternal },
	'grail-ui': { '*': 'Its shared lifecycle helper imports `svelte/internal`, so the builders break on Svelte 5 (docs/legacy-libraries.md).' },
	'attractions': { '*': `${legacySyntax} Needs svelte-preprocess 4 and a custom Sass importer.` },
	'smelte': { '*': `${legacySyntax} Needs a Rollup plugin with Tailwind 2.` },
	'ikun-ui': { '*': `${legacySyntax} Needs UnoCSS 0.57 presets.` },
	'ato-ui': { '*': `${legacySyntax} Needs UnoCSS 0.57 presets and @melt-ui/svelte 0.63 (Svelte <5).` },
	'radix-svelte': { '*': legacySyntax },
	'svelte-materialify': { '*': `${legacySyntax} Needs svelte-preprocess 4 and a Sass include path.` },
	'svelte-mui': { '*': legacySyntax },
	'vitamin-svelte': { '*': `${legacySyntax} Needs postcss-import.` },
	'proi-ui': { '*': legacySyntax },
	'svelte-spectre': { '*': legacySyntax },
	'sveltin-essentials': { '*': legacySyntax },
	'nick-mazuk-ui-svelte': { '*': `${legacySyntax} Needs a Tailwind 2 preset.` },
	'figma-plugin-ds-svelte': { '*': legacySyntax },

	// --- Single components ----------------------------------------------------------------------
	'ark-ui': { 'qr-code': 'Unstyled, the QR code overflows the preview frame.' },
	'zag-js': { 'qr-code': 'Unstyled, the QR code overflows the preview frame.' },
	'sivir-ui': { breadcrumb: 'Imports SvelteKit\'s `$app/state`, which the preview app does not have.' },
	'cossui-svelte': {
		'file-upload': 'The registry CLI generated an empty module.',
		'map': 'Needs about 30 extra packages (MapLibre and friends).',
		'rich-text-editor': 'Needs about 30 extra packages (Tiptap, Mermaid).',
	},
	'shadcn-svelte': { typography: 'A docs page of utility classes, not a registry item, so there is nothing to generate.' },
	'skeleton': { 'context-menu': 'Opened at the wrong position inside the preview frame.' },
	'flowbite-svelte': {
		chart: 'Needs its separate chart package, which is not installed.',
		icon: 'Needs the separate flowbite-svelte-icons package, which is not installed.',
	},
	'sveltestrap': { icon: 'Needs the bootstrap-icons font, which its docs load from a CDN.' },
	'perfectthings-ui': { resizable: 'The Splitter is only a drag handle between elements the app lays out itself, so a preview would need layout styles of ours.' },
	// Origin UI has no base component for these: the look lives in each docs example's own markup,
	// so a preview would copy the example.
	'origin-ui-svelte': {
		'alert': originExampleOnly,
		'button-group': originExampleOnly,
		'password-input': originExampleOnly,
		'number-input': originExampleOnly,
		'pin-input': originExampleOnly,
		'date-picker': originExampleOnly,
		'date-range-picker': originExampleOnly,
		'clipboard': originExampleOnly,
		'phone-input': originExampleOnly,
		'tour': originExampleOnly,
		'combobox': originExampleOnly,
	},
	'yesvelte': { icon: 'Icon is the `iconify-icon` web component, which fetches icon data from api.iconify.design at runtime.' },

	// --- Tools ----------------------------------------------------------------------------------
	'internationalized-date': { '*': 'Date and calendar utilities with no UI; libraries build their date components on it.' },
	'formsnap': { form: 'Needs a SvelteKit form action, which the preview app does not have.' },
	'sveltekit-superforms': { form: 'Needs a SvelteKit form action, which the preview app does not have.' },
	'mode-watcher': { 'theme-switcher': 'Would fight the preview app\'s own light/dark switch.' },
	'paraglide-js': { i18n: 'A compiler that needs a project-level code-generation step.' },
	'vaul-svelte': { drawer: 'The installed Svelte 5 prerelease differs from the recorded version.' },
}
