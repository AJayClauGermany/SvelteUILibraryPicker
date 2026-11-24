import { defineLibrary } from '../schema'

// Docs are a Sapper site (packages/docs in the repo, master branch at 75be9ff) exported to Vercel.
// Component pages are /components/<slug>/ where <slug> is the .md file name under
// packages/docs/src/routes/components; the sidebar lives in packages/docs/src/util/routes.js.
// Every page and anchor below was fetched live on 2026-11-24 (200, anchor ids present in the
// HTML), and a made-up slug returns 404.
const site = 'https://svelte-materialify.vercel.app'
const c = (slug: string, anchor?: string) => `${site}/components/${slug}/${anchor ? `#${anchor}` : ''}`
const repo = 'https://github.com/TheComputerM/svelte-materialify'
const install = `${site}/getting-started/installation/`

export default defineLibrary({
	id: 'svelte-materialify',
	name: 'Svelte Materialify',
	description:
		'A Svelte 3 Material Design kit modeled on Vuetify, with light and dark themes set on a MaterialApp wrapper and styles customizable through Sass variables.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-materialify'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		peerRange: '>=3.29.4',
		runes: false,
	},
	version: '0.3.11',
	styling: ['css'],
	dependencies: [
		{
			package: 'svelte-preprocess',
			kind: 'build-plugin',
			required: false,
			notes: 'Only for the custom-styles setup, where you import from svelte-materialify/src and compile the SCSS yourself with an includePaths entry pointing at your theme folder. The default install uses precompiled styles and needs none of these.',
			source: install,
		},
		{
			package: 'sass',
			kind: 'sass',
			required: false,
			notes: 'Compiles the component SCSS in the custom-styles setup, where a _material-theme.scss file overrides the library variables.',
			source: install,
		},
		{
			package: 'postcss',
			kind: 'postcss',
			required: false,
			notes: 'Listed in the custom-styles install command alongside svelte-preprocess and sass; no PostCSS config of your own is described.',
			source: install,
		},
		{
			package: '@mdi/js',
			kind: 'peer',
			required: false,
			notes: 'Recommended icon source: the Icon component takes SVG path data, and the docs suggest this package. Any icon set that exports paths works.',
			source: c('icons'),
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'forms', 'icons', 'design-system'],
	components: [
		{ id: 'alert', name: 'Alert', docs: c('alerts'), notes: 'Border, colored border, outlined, text and dismissible variants.' },
		{ id: 'navigation-menu', name: 'AppBar', docs: c('app-bar'), notes: 'A top app bar with slots for a nav icon, title and actions, including dense and collapsing modes; it has no built-in menu links or flyouts.' },
		{ id: 'avatar', name: 'Avatar', docs: c('avatars') },
		{ id: 'badge', name: 'Badge', docs: c('badges'), notes: `A count or dot pinned to the element it wraps. Chip (${c('chips')}) is the standalone label, with closable, outlined and label variants.` },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: c('breadcrumbs') },
		{ id: 'button', name: 'Button', docs: c('buttons'), notes: 'Raised, depressed, outlined, text, rounded, tile, block and icon styles.' },
		{ id: 'floating-action-button', name: 'Button', docs: c('buttons', 'floating-action-buttons'), notes: 'A Button mode (fab), shown on the buttons page.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button-groups') },
		{ id: 'toggle-group', name: 'ButtonGroup', docs: c('button-groups', 'selectable'), notes: 'ButtonGroup can track the active button, allow several (multiple) and require one (mandatory). SlideGroup and ListItemGroup offer the same selection model for slides and list items.' },
		{ id: 'card', name: 'Card', docs: c('cards'), notes: 'Parts: CardTitle, CardSubtitle, CardText, CardActions.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkboxes') },
		{ id: 'table', name: 'DataTable', docs: c('data-table'), notes: 'Composed from DataTableHead, DataTableBody, DataTableRow and DataTableCell. The page has headings for row selection, pagination, sorting and more, but in the docs source only the basic example file has content, so those features are not demonstrated.' },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: 'Modal (persistent), fullscreen and nested dialogs.' },
		{ id: 'separator', name: 'Divider', docs: c('dividers'), notes: 'Horizontal, inset and vertical.' },
		{ id: 'accordion', name: 'ExpansionPanels', docs: c('expansion-panels'), notes: 'Panels are ExpansionPanel; one open at a time by default, with multiple, accordion, popout and inset styles.' },
		{ id: 'footer', name: 'Footer', docs: c('footer') },
		{ id: 'grid', name: 'Container / Row / Col', docs: c('grid'), notes: '12-column grid with breakpoint sizing and offsets.' },
		{ id: 'icon', name: 'Icon', docs: c('icons'), notes: 'Takes SVG path data (or an icon font class); no icon set is bundled.' },
		{ id: 'list', name: 'List', docs: c('lists'), notes: `ListItem, ListGroup (nested) and dense styles. ListItemGroup makes items selectable: ${c('list-item-groups')}` },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menus'), notes: 'Opens from an activator slot, on click or hover, with offsets and optional close on content click.' },
		{ id: 'drawer', name: 'NavigationDrawer', docs: c('navigation-drawer'), notes: 'Permanent, temporary, mini and right-side modes; meant to hold app navigation, so it also covers the sidebar role.' },
		{ id: 'progress', name: 'ProgressLinear', docs: c('progress-linear'), notes: `Determinate, indeterminate, striped, stream and reversed. ProgressCircular is the round version: ${c('progress-circular')}` },
		{ id: 'spinner', name: 'ProgressCircular', docs: c('progress-circular', 'indeterminate'), notes: 'The indeterminate mode of ProgressCircular.' },
		{ id: 'radio-group', name: 'Radio', docs: c('radio', 'groups'), notes: 'Radios share a bind:group value; there is no separate group component.' },
		{ id: 'select', name: 'Select', docs: c('selects'), notes: 'Supports multiple selection and showing selected values as chips.' },
		{ id: 'slider', name: 'Slider', docs: c('sliders'), notes: 'Passing two values makes a range slider.' },
		{ id: 'toast', name: 'Snackbar', docs: c('snackbars'), notes: 'One component shown through a bound active prop, with an optional timeout; no queue or function-call API.' },
		{ id: 'switch', name: 'Switch', docs: c('switches') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Tab and TabContent parts; built on SlideGroup and Window, with vertical, centered and grow options.' },
		{ id: 'input', name: 'TextField', docs: c('text-field'), notes: 'Filled, outlined and solo styles, clearable, counter and validation rules.' },
		{ id: 'password-input', name: 'TextField', docs: c('text-field', 'password'), notes: 'Shown as a TextField example with a show/hide icon you wire up yourself.' },
		{ id: 'textarea', name: 'Textarea', docs: c('textarea'), notes: 'Auto-grow, counter and no-resize options.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltips'), notes: 'Needs an explicit position prop (top, bottom, left or right).' },
		{ id: 'typography', name: 'Text and typography', docs: `${site}/styles/text-and-typography/`, notes: 'Utility classes for the Material type scale, weights and alignment, not a component.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo (README, CODE_OF_CONDUCT, .github workflows, LICENSE) has no AGENTS.md, CLAUDE.md or AI guidance, the contributing page on the docs site does not mention AI tools, the docs site has no llms.txt (404), there is no MCP server, and the MIT LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/LICENSE`,
			`${site}/getting-started/contributing/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.3.11', date: '2021-06-15' },
		lastCommit: '2022-09-26',
		archived: true,
		deprecated: {
			summary: 'The README opens with a notice from the author saying the project is being archived and pointing to Beer CSS and SvelteUI as alternatives, and npm marks the package as no longer supported.',
			source: `${repo}/blob/master/README.md`,
		},
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-materialify', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Archived and deprecated upstream: the README says the author stopped work and suggests Beer CSS and SvelteUI instead, and npm marks the package deprecated. Listed for reference and migration planning.',
		'Svelte 3 only. The peer range >=3.29.4 is open-ended, but the package and docs were built and tested against Svelte 3 (devDependency ^3.32.1), the final commit predates Svelte 4, and we found no Svelte 4 or 5 work. Components use export let, $: statements, slots, on: events, createEventDispatcher and $$restProps; on Svelte 5 that syntax only runs in legacy mode.',
		'Two ways to install: import from svelte-materialify for precompiled default styles, or from svelte-materialify/src and compile the SCSS in your own build (svelte-preprocess and Sass) to override theme variables such as primary, secondary, error and success colors.',
		'All components are meant to sit inside a MaterialApp wrapper, which loads the global styles and takes a light or dark theme prop; MaterialAppMin drops the utility classes and typography defaults. A theme--dark or theme--light class forces a theme on a subtree.',
		'The docs also cover CSS utility classes (spacing, flex, elevation, colors, display helpers) and actions (ripple, click outside, intersection observer, jump, touch).',
		'Type definitions (.d.ts) ship in the package under @types.',
		'Pages for Autocomplete, Carousels, Lazy and Virtual Lists exist on the docs site but only say the component is coming soon, so they are not listed here. VirtualList, Lazy and Table are exported from the package without usable docs.',
		'Documented components with no canonical id here: Overlay (a scrim layer), Subheader, SlideGroup and Window (a content switcher with transitions that the tabs use).',
	],
})
