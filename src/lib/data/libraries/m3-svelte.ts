import { defineLibrary } from '../schema'

// The docs site has no per-component pages: every component is a demo card on the
// home page (src/demos.md in the repo), with a heading anchor built as
// `${title.toLowerCase().replaceAll(" ", "-")}-demo` (see src/routes/_card.svelte). Cards whose
// demo has no interactive controls (Bottom sheet, Snackbar, Time picker, Layer) render a plain
// button with no id, so they have no anchor and link to the home page instead.
const home = 'https://kendell.dev/m3-svelte/'
const c = (anchor: string) => `${home}#${anchor}-demo`
// The docs site was unreachable when checking dependencies, so sources point at the docs
// source files in the repo instead.
const src = 'https://github.com/KTibow/m3-svelte/blob/main'
const quickStart = `${src}/src/routes/docs/quick-start/+page.svelte`

export default defineLibrary({
	id: 'm3-svelte',
	name: 'M3 Svelte',
	description:
		"A runes-based Svelte 5 take on Google's Material 3 (including M3 Expressive), covering components, motion, shapes and generated color themes.",
	docs: 'https://kendell.dev/m3-svelte/',
	repository: 'https://github.com/KTibow/m3-svelte',
	packages: ['m3-svelte'],
	license: {
		spdx: 'Apache-2.0 OR GPL-3.0-only',
		url: 'https://github.com/KTibow/m3-svelte/blob/main/LICENSE',
		notes: 'Dual-licensed: you may use it under either Apache 2.0 or GPL 3.0 (only); both texts are in the single LICENSE file.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.40.0',
		runes: true,
	},
	version: '7.2.1',
	styling: ['css'],
	dependencies: [
		{
			package: 'vite-plugin-functions-mixins',
			kind: 'build-plugin',
			range: '^0.4.1',
			required: true,
			notes: 'npm marks this peer optional, but the quick start always installs it and registers it in vite.config with m3-svelte as a dep, since the component styles use CSS custom functions and @apply mixins.',
			source: quickStart,
		},
		{
			package: '@fontsource-variable/google-sans-flex',
			kind: 'peer',
			required: false,
			notes: 'Font suggested by the quick start; you can instead point --m3-font at a font of your choice.',
			source: quickStart,
		},
		{
			package: 'vite-plugin-token-shaker',
			kind: 'build-plugin',
			required: false,
			notes: 'Optional quick-start add-on that inlines or mangles the design tokens to shrink CSS.',
			source: quickStart,
		},
		{
			package: '@ktibow/material-color-utilities-nightly',
			kind: 'peer',
			range: '^0.4.1768930731000',
			required: false,
			notes: 'Optional peer, imported only by the m3-svelte/etc/colors helpers (generating a color scheme in code) and the UnoCSS preset. Themes pasted from the theme page do not need it.',
			source: `${src}/src/lib/etc/colors.ts`,
		},
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			required: false,
			notes: 'Only for the Tailwind app type: the theme page adds m3-svelte/etc/tailwind-styles.css (Tailwind v4 @theme syntax). Docs warn Tailwind may not handle the CSS mixins yet.',
			source: `${src}/src/routes/theme/SchemeShowcase.svelte`,
		},
		{
			package: 'unocss',
			kind: 'unocss',
			required: false,
			notes: 'Only for the m3-svelte/etc/unocss-preset export; the docs pages do not cover it.',
			source: `${src}/src/lib/etc/unocss-preset.ts`,
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'design-system'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button') },
		{ id: 'button-group', name: 'ConnectedButtons', docs: c('connected-buttons'), notes: 'Can also act as a single/multi-select segmented control.' },
		{ id: 'floating-action-button', name: 'FAB', docs: c('fab') },
		{ id: 'split-button', name: 'SplitButton', docs: c('split-button'), notes: 'Main action plus a Menu of alternatives; elevated, filled, tonal and outlined variants.' },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'input', name: 'TextField', docs: c('text-field'), notes: 'Filled and outlined (TextFieldOutlined) variants.' },
		{ id: 'textarea', name: 'TextFieldMultiline', docs: c('text-field') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'radio-group', name: 'RadioAnim1', docs: c('radio'), notes: 'Three animation variants: RadioAnim1, RadioAnim2, RadioAnim3.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'SelectOutlined is the outlined variant.' },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog') },
		{ id: 'drawer', name: 'BottomSheet', docs: home, notes: 'Bottom edge only. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'VariableTabs sizes tabs to their content.' },
		{ id: 'navigation-menu', name: 'NavCMLX', docs: c('nav-for-c/m/l/x'), notes: 'Adaptive navigation that changes form by window size class.' },
		{ id: 'sidebar', name: 'NavigationRail', docs: c('navigation-rail') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'separator', name: 'Divider', docs: c('list'), notes: 'Shown inside the List demo; no demo of its own.' },
		{ id: 'toast', name: 'Snackbar', docs: home, notes: 'Queued through a snackbar() helper. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'progress', name: 'LinearProgress', docs: c('progress'), notes: 'Also wavy and circular variants, plus time-estimate versions.' },
		{ id: 'spinner', name: 'LoadingIndicator', docs: c('loading') },
		{ id: 'badge', name: 'Chip', docs: c('chip'), notes: 'Material chips are interactive (assist, filter, input), not passive badges.' },
		{ id: 'list', name: 'ListItem', docs: c('list'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'date-picker', name: 'DateField', docs: c('date-field'), notes: 'Text field with a docked calendar picker; DateFieldOutlined is the outlined variant.' },
		{ id: 'time-picker', name: 'TimePickerDial', docs: home, notes: 'Dial-style picker opened in a dialog. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'icon', name: 'Icon', docs: c('icons'), notes: 'Renders Iconify-format icon objects; @ktibow/iconset-material-symbols comes in as a regular dependency of 7.2.1.' },
	],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site builds and links an llms.txt aimed at AI coding tools, bundling the quick-start and walkthrough pages plus every component demo. No restrictions on AI use were found.',
		sources: [
			'https://github.com/KTibow/m3-svelte/blob/main/vite-plugin-llms-txt.ts',
			'https://github.com/KTibow/m3-svelte/blob/main/scripts/llms-txt-template.md',
			'https://kendell.dev/m3-svelte/llms.txt',
		],
		llmsTxt: 'https://kendell.dev/m3-svelte/llms.txt',
	},
	lastVerified: '2026-11-04',
	notes: [
		'Docs have no per-component pages; component links point to the demo cards on the docs home page.',
		'Also ships Material motion helpers (UI transitions, easings), a state-layer CSS class and shape paths, which have no comparison category.',
		'ChipChooser and DatePickerDocked are exported but have no demo card of their own, so they are not listed here.',
	],
})
