import { defineLibrary } from '../schema'

// Docs are a prerendered SvelteKit site built from src/www in the library repo (master at
// df81bd8) and deployed by tilde-lab/svelte-spectre-storybook to its gh-pages branch, which holds
// one .html file per page. Pages are served at /docs/components/<slug> and /docs/layouts/<slug>
// WITHOUT a trailing slash (the slashed form returns 404 on this host). Every page below was
// fetched live on 2026-11-24 (200), and made-up slugs under both paths return 404. Headings on
// the pages carry no ids, so we link whole pages only.
const site = 'https://kit.optimade.science'
const c = (slug: string) => `${site}/docs/components/${slug}`
const l = (slug: string) => `${site}/docs/layouts/${slug}`
const repo = 'https://github.com/basf/svelte-spectre'

export default defineLibrary({
	id: 'svelte-spectre',
	name: 'Svelte Spectre',
	description:
		'A Svelte 3 kit wrapping the Spectre.css framework in components with precompiled styles, plus scientific widgets such as a periodic table and a crystal structure viewer.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-spectre'],
	license: {
		spdx: 'BSD-3-Clause',
		url: `${repo}/blob/master/LICENSE`,
		notes: 'The LICENSE file carries the standard three-clause BSD text; package.json spells it "BSD 3-Clause".',
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '0.5.7',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'semantic-colors', 'dark-mode', 'forms', 'icons'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: 'Accordions sharing a group name close each other; Accordioner is a second export from the same module.' },
		{ id: 'combobox', name: 'Autocomplete', docs: c('autocomplete'), notes: 'Filters a predefined list as you type, with optional grouping; picked values show as removable chips.' },
		{ id: 'tags-input', name: 'Autocomplete', docs: c('autocomplete'), notes: 'A creatable option lets you add values that are not in the list, each shown as a chip.' },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: 'Image or initials, with sizes, a presence status and an optional badge.' },
		{ id: 'badge', name: 'Badge', docs: c('badge'), notes: `A number or dot attached to another element, available as a component or a badge action. For a standalone tag-like label see Chip: ${c('chip')}` },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: c('breadcrumbs') },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Variants, sizes, loading and active states, built-in tooltip props, and an href that renders a link. IconButton is shown on the same page.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button'), notes: 'Shown in the Button groups section of the Button page.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'separator', name: 'Divider', docs: c('divider'), notes: 'Horizontal or vertical, optionally with text in the middle.' },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders the Spectre.css icon set by name, or an SVG you pass in.' },
		{ id: 'input', name: 'Input', docs: c('input'), notes: 'Label, hint and icon slots plus validity states. InputGroup, on the same page, joins inputs, selects and buttons.' },
		{ id: 'textarea', name: 'Input', docs: c('input'), notes: 'Setting rows above 1 renders a textarea.' },
		{ id: 'meter', name: 'Meter', docs: c('meter') },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: `Bars (${c('bars')}) stacks several colored segments in one bar.` },
		{ id: 'radio-group', name: 'Radio', docs: c('radio') },
		{ id: 'slider', name: 'Range', docs: c('range'), notes: 'Single-handle by default; a dual-handle mode selects a range.' },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'Native select styling; a multiple prop allows several values.' },
		{ id: 'stepper', name: 'Steps', docs: c('steps'), notes: 'A progress indicator for a sequence; steps can be links with tooltips.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Tabs are driven by paths (for example a query string), so they act as navigation; tabs can show a badge.' },
		{ id: 'timer', name: 'Timer', docs: c('timer'), notes: 'A countdown computed from a start timestamp and a duration, with no controls.' },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: 'Single Toast elements, or a Toaster host with a toast function that places messages at one of nine positions.' },
		{ id: 'card', name: 'Card', docs: l('card'), notes: `Panel (${l('panel')}) is a card-like container with header, nav, body and footer slots and a scrolling body.` },
		{ id: 'code-block', name: 'Code', docs: l('code'), notes: 'Styles a code snippet and shows a language label; no syntax highlighting is described.' },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: l('dropdown'), notes: `Opens a Menu built from an items array (dividers, icons, badges, checkboxes, switches). Menu on its own: ${c('menu')}` },
		{ id: 'empty-state', name: 'Empty', docs: l('empty') },
		{ id: 'image', name: 'Figure', docs: l('figure'), notes: 'An image with a caption.' },
		{ id: 'form', name: 'Form', docs: l('form'), notes: 'Form and FormGroup lay out labels and controls, horizontal or stacked, with validity states on the group. No validation logic.' },
		{ id: 'grid', name: 'Grid', docs: l('grid'), notes: 'Grid and Col wrap the Spectre.css flexbox columns with responsive sizes.' },
		{ id: 'dialog', name: 'Modal', docs: l('modal'), notes: 'Sizes, a bindable open state and a close event.' },
		{ id: 'navigation-menu', name: 'Navbar', docs: l('navbar'), notes: 'A header bar with left, center and right slots for your own content; it has no built-in links or flyout menus.' },
		{ id: 'popover', name: 'Popover', docs: l('popover'), notes: 'Opens on hover, in one of four positions.' },
		{ id: 'sidebar', name: 'Sidebar', docs: l('sidebar'), notes: 'An off-canvas layout whose side panel slides in and stays open above a breakpoint. The docs page is prose only; the docs site itself is built with it.' },
		{ id: 'collapsible', name: 'Toggle', docs: l('toggle'), notes: 'A wrapper with a toggler slot that shows or hides its content from a bindable flag.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the library repo (README, LICENSE, package.json; it has no CONTRIBUTING, .github folder, AGENTS.md or CLAUDE.md), the docs repo (only a deploy workflow) and the docs site: no llms.txt (404), no MCP server or agent skills, and no mention of AI tools. The BSD-3-Clause license has no AI-specific terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/LICENSE`,
			'https://github.com/tilde-lab/svelte-spectre-storybook',
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.5.7', date: '2026-07-14' },
		lastCommit: '2026-07-14',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-spectre', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only. svelte-spectre 0.5.7 declares no svelte peer; the repo develops against svelte ^3.50.1 and SvelteKit 1 prereleases, and an automated upgrade to Svelte 4 was merged and then reverted. Components use export let, slots, on: events, createEventDispatcher, $: statements and $$restProps, and the published package ships them as uncompiled .svelte files, so on Svelte 5 they would only run in legacy mode, which we have not seen tested upstream.',
		'Styling: component styles are written in Sass against Spectre.css and compiled before publishing, so your project needs no Sass, PostCSS or separate Spectre.css stylesheet. Component CSS is scoped under a .spectre class, which the default-exported Spectre wrapper component adds along with base typography and utilities; the docs site wraps its whole layout in it.',
		'The docs site doubles as a component explorer with knobs and API tables per page. Its installation and customize pages describe working in the library repo (install, dev server, package build) rather than adding the package to your own app, and the customize page is marked as under construction.',
		'Theming means editing the Sass variables in the repo and building your own package; there is no runtime theme layer. A dark palette applies automatically with prefers-color-scheme, or can be forced with a color-scheme="dark" or "light" attribute on an ancestor element.',
		'Types ship as generated .d.ts files next to each component.',
		'Chip, Bars and Menu have their own docs pages and are linked from the Badge, Progress and Dropdown entries. Documented components with no canonical id here: Container, Hero, Tile, PeriodicTable (a chemical element picker) and CIFPlayer (a viewer for crystal structure files). The Transition page is a placeholder marked under construction.',
	],
})
