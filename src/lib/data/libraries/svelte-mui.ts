import { defineLibrary } from '../schema'

// Docs are the demo app in the repo's example/ folder (master branch at its final commit), deployed
// to Vercel; the README's svelte-mui.now.sh link redirects (308) there. It is a client-rendered
// app routed with page.js (pushState paths, not hashes), so every path returns the same HTML shell.
// The routes below come from example/src/sitenav.js, and the live bundle.js (fetched 2026-11-24)
// registers exactly these paths. The docs pages link each other the same way (e.g. /datepicker/datefield).
const site = 'https://svelte-mui.vercel.app'
const c = (path: string) => `${site}/${path}`
const repo = 'https://github.com/vikignt/svelte-mui'

export default defineLibrary({
	id: 'svelte-mui',
	name: 'svelte-mui',
	description:
		'A small set of Material Design inspired components for Svelte 3 and 4, with scoped styles that read a handful of CSS custom properties.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-mui'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3, 4],
		peerRange: '^3.53.0 || ^4.0.0',
		runes: false,
	},
	version: '0.5.12',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'design-system', 'forms', 'i18n', 'icons'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Text, raised, unelevated and outlined variants, each optionally dense or shaped, with an optional ripple.' },
		{ id: 'floating-action-button', name: 'Button', docs: c('button'), notes: 'A Button mode: set icon and fab for a round, raised action button.' },
		{ id: 'toggle', name: 'Button', docs: c('button'), notes: 'A Button mode: the toggle prop turns it into a two-state button with an active prop and a change event.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button/button-group'), notes: 'A plain wrapper that joins buttons visually; the demo uses it with toggle buttons for formatting toolbars.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: `Supports an indeterminate state and bind:group. A separate Checkbox Group page (${c('checkbox/checkbox-group')}) is only a demo of several Checkbox components bound to one array, not a component of its own.` },
		{ id: 'radio-group', name: 'Radio', docs: c('radio-button'), notes: 'Single radio buttons combined through a shared group binding; there is no group container component.' },
		{ id: 'input', name: 'Textfield', docs: c('textfield'), notes: 'Filled or outlined, with label, helper message and error states. No multiline mode is documented.' },
		{ id: 'calendar', name: 'Datepicker', docs: c('datepicker'), notes: 'An inline month view with month and year views; dates can be disabled with a callback, and the locale sets formatting and the first day of the week.' },
		{ id: 'date-picker', name: 'Datefield', docs: c('datepicker/datefield'), notes: 'A text input with a configurable date format that opens the Datepicker in a popover from an icon or the space bar.' },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: 'Modal with overlay, closable by outside click or Escape; title, actions and footer slots.' },
		{ id: 'accordion', name: 'ExpansionPanel', docs: c('expansion-panel'), notes: 'Panels bound to the same group prop act as an accordion, one open at a time.' },
		{ id: 'collapsible', name: 'ExpansionPanel', docs: c('expansion-panel'), notes: 'A single ExpansionPanel expands and collapses on its own.' },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders an SVG path you pass in, with spin, pulse and flip options. No icon set is included.' },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Opened from whatever you put in its activator slot; Menuitem entries render as links when given an href.' },
		{ id: 'drawer', name: 'Sidepanel', docs: c('side-panel'), notes: 'Left or right panel with overlay; on touch screens it can be opened and closed by swiping from the edge.' },
		{ id: 'toast', name: 'Snackbar', docs: c('snackbar'), notes: 'A single message bar with a close action by default and an action slot; there is no queue or notification store.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at its final commit (README, CHANGELOG, LICENSE, example app) and the demo site: no CONTRIBUTING, AGENTS.md or CLAUDE.md, no .github folder, no MCP server or agent skills, and no mention of AI tools. The site has no llms.txt (the path returns the app shell). The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.5.12', date: '2024-09-17' },
		lastCommit: '2024-09-17',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-mui', 'https://github.com/vikignt/svelte-mui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 and 4: the peer range is ^3.53.0 || ^4.0.0, and the changelog records the Svelte 4 compatibility work. Components use export let, $$props spreading, slots, on: events and createEventDispatcher; on Svelte 5 that syntax only runs in legacy mode, and the peer range does not include Svelte 5. Listed for reference and migration planning.',
		'Install is the package alone; there is no CSS file to import and no build plugin. The README asks you to add your own global styles for the disabled state (reduced opacity, no pointer events).',
		'Styling: each component carries scoped CSS that reads custom properties such as --primary, --accent, --color, --label and --divider, with built-in fallback colors. The docs do not list these variables; the demo app sets them in its global stylesheet. No dark theme is documented.',
		'Date components format and order dates with the browser Intl API, using a locale prop that defaults to the browser language.',
		'Types: the package ships .d.ts files generated from the JavaScript components by svelte-package, so many props are loosely typed.',
		'Not linked from any component page: Ripple has its own docs page (a click/touch wave effect you place inside an element) but no canonical id here. Popover and Modal are exported (Menu, Dialog and Datefield are built on them) but have no docs page.',
	],
})
