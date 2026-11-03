import { defineLibrary } from '../schema'

// The docs site has no per-component pages: every component is a demo card on the
// home page, with a heading anchor built as `${title.toLowerCase().replaceAll(" ", "-")}-demo`
// (see src/routes/_card.svelte in the repo).
const c = (anchor: string) => `https://kendell.dev/m3-svelte/#${anchor}-demo`

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
	features: ['typescript', 'theming', 'dark-mode', 'design-system'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button') },
		{ id: 'button-group', name: 'ConnectedButtons', docs: c('connected-buttons'), notes: 'Can also act as a single/multi-select segmented control.' },
		{ id: 'floating-action-button', name: 'FAB', docs: c('fab') },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'input', name: 'TextField', docs: c('text-field'), notes: 'Filled and outlined (TextFieldOutlined) variants.' },
		{ id: 'textarea', name: 'TextFieldMultiline', docs: c('text-field') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'radio-group', name: 'RadioAnim1', docs: c('radio'), notes: 'Three animation variants: RadioAnim1, RadioAnim2, RadioAnim3.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'SelectOutlined is the outlined variant.' },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog') },
		{ id: 'drawer', name: 'BottomSheet', docs: c('bottom-sheet') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'VariableTabs sizes tabs to their content.' },
		{ id: 'navigation-menu', name: 'NavCMLX', docs: c('nav-for-c/m/l/x'), notes: 'Adaptive navigation that changes form by window size class.' },
		{ id: 'sidebar', name: 'NavigationRail', docs: c('navigation-rail') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'separator', name: 'Divider', docs: c('list'), notes: 'Shown inside the List demo; no demo of its own.' },
		{ id: 'toast', name: 'Snackbar', docs: c('snackbar') },
		{ id: 'progress', name: 'LinearProgress', docs: c('progress'), notes: 'Also wavy and circular variants, plus time-estimate versions.' },
		{ id: 'spinner', name: 'LoadingIndicator', docs: c('loading') },
		{ id: 'badge', name: 'Chip', docs: c('chip'), notes: 'Material chips are interactive (assist, filter, input), not passive badges.' },
		{ id: 'list', name: 'ListItem', docs: c('list'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'date-picker', name: 'DateField', docs: c('date-field'), notes: 'Text field with a docked calendar picker; DateFieldOutlined is the outlined variant.' },
		{ id: 'time-picker', name: 'TimePickerDial', docs: c('time-picker') },
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
	lastVerified: '2026-11-03',
	notes: [
		'Docs have no per-component pages; component links point to the demo cards on the docs home page.',
		'Needs the vite-plugin-functions-mixins Vite plugin and @ktibow/material-color-utilities-nightly as peer dependencies.',
		'Tailwind and UnoCSS integrations are optional extras; styling ships as plain CSS custom properties.',
		'Split button and an Icon component are also included but have no matching comparison category.',
	],
})
