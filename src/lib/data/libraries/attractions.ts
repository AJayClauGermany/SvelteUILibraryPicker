import { defineLibrary } from '../schema'

// Docs are a Sapper site (docs/src/routes in the repo, main branch at aad470e) exported to GitHub
// Pages. Component pages are /docs/components/<slug>/ where <slug> is the .svx file name under
// docs/src/routes/docs/components. Every page below was fetched live on 2026-11-24 (200), and a
// made-up slug returns 404.
const site = 'https://illright.github.io/attractions'
const c = (slug: string) => `${site}/docs/components/${slug}/`
const repo = 'https://github.com/illright/attractions'

export default defineLibrary({
	id: 'attractions',
	name: 'Attractions',
	description:
		'A Svelte 3 component kit whose components carry their own Sass styles, compiled in your build through svelte-preprocess and themed by overriding Sass variables.',
	docs: `${site}/`,
	repository: repo,
	packages: ['attractions'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3],
		peerRange: '^3.31.0',
		runes: false,
	},
	version: '3.7.2',
	styling: ['css'],
	dependencies: [
		{
			package: 'svelte-preprocess',
			kind: 'build-plugin',
			range: '^4.0.10',
			required: true,
			notes: 'Peer of attractions. Components load their styles from .scss files via <style src>, so svelte-preprocess must be in your preprocess chain. The peer range stops at major 4.',
			source: `${site}/docs/installation/`,
		},
		{
			package: 'sass',
			kind: 'sass',
			range: '>=1.33.0',
			required: true,
			notes: 'Peer of attractions; compiles the component styles. Theming also uses a Sass importer from attractions/importer.js to override the library variables.',
			source: `${site}/docs/installation/`,
		},
		{
			package: 'postcss',
			kind: 'postcss',
			range: '>=7 <9',
			required: true,
			notes: 'Peer of attractions, installed alongside svelte-preprocess and sass per the install steps. No PostCSS config of your own is described.',
			source: `${site}/docs/installation/`,
		},
	],
	features: ['typescript', 'theming', 'forms'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: `Sections are AccordionSection: ${c('accordion-section')}` },
		{ id: 'combobox', name: 'Autocomplete', docs: c('autocomplete'), notes: `Async option loading; selected items show as removable chips, so it also works as a multi-select. Parts: AutocompleteField (${c('autocomplete-field')}) and AutocompleteOption (${c('autocomplete-option')}).` },
		{ id: 'badge', name: 'Chip', docs: c('chip'), notes: `A small label, with an outline variant. Badge (${c('badge')}) is a different thing: a colored dot pinned to the element it wraps, with no count. Dot (${c('dot')}) is a standalone colored dot.` },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: c('breadcrumbs') },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Flat by default, with filled and outline styles and danger or neutral colors; an href turns it into a link.' },
		{ id: 'calendar', name: 'Calendar', docs: c('calendar') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: `CheckboxGroup renders a list from items: ${c('checkbox-group')}` },
		{ id: 'date-picker', name: 'DatePicker', docs: c('date-picker') },
		{ id: 'date-range-picker', name: 'DatePicker', docs: c('date-picker'), notes: 'A range prop on DatePicker, not a separate component.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: `Modal is the overlay; Dialog (${c('dialog')}) is the styled window meant to go inside it.` },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('dropdown'), notes: `A general floating container rather than a menu with items. DropdownShell manages open state: ${c('dropdown-shell')}` },
		{ id: 'file-upload', name: 'FileInput', docs: c('file-input'), notes: `FileDropzone (${c('file-dropzone')}) adds drag and drop; FileTile (${c('file-tile')}) shows one file.` },
		{ id: 'form', name: 'FormField', docs: c('form-field'), notes: 'Layout wrapper with name, help text, required/optional marks and error list. No validation logic.' },
		{ id: 'input', name: 'TextField', docs: c('text-field') },
		{ id: 'textarea', name: 'TextField', docs: c('text-field'), notes: 'A multiline prop on TextField renders a textarea.' },
		{ id: 'spinner', name: 'Loading', docs: c('loading') },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'popover', name: 'Popover', docs: c('popover'), notes: `PopoverButton is a button styled to sit inside the popover content: ${c('popover-button')}` },
		{ id: 'radio-group', name: 'RadioGroup', docs: c('radio-group'), notes: `Single radios are RadioButton: ${c('radio-button')}` },
		{ id: 'rating', name: 'StarRating', docs: c('star-rating') },
		{ id: 'slider', name: 'Slider', docs: c('slider'), notes: 'Passing two values makes a range slider.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'toggle-group', name: 'RadioChipGroup', docs: c('radio-chip-group'), notes: `Options shown as selectable chips, one at a time. CheckboxChipGroup (${c('checkbox-chip-group')}) allows several; RadioChip and CheckboxChip are the single chips.` },
		{ id: 'table', name: 'Table', docs: c('table'), notes: 'Renders headers and rows from arrays; no sorting or filtering is documented.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: `Tab gives control over individual tabs: ${c('tab')}` },
		{ id: 'time-picker', name: 'TimePicker', docs: c('time-picker') },
		{ id: 'toast', name: 'Snackbar', docs: c('snackbar'), notes: `Shown through SnackbarContainer, which exposes a showSnackbar function: ${c('snackbar-container')}` },
		{ id: 'typography', name: 'Typography', docs: c('typography'), notes: 'H1, H2, H3, Headline, Subhead and Label components.' },
		{ id: 'separator', name: 'Divider', docs: c('divider'), notes: 'Can show text in the middle of the line.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at its final commit (README, MAINTAINER_GUIDE, .github workflows, LICENSE) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, no CONTRIBUTING file and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '3.7.2', date: '2024-03-01' },
		lastCommit: '2024-11-22',
		archived: true,
		deprecated: {
			summary: 'The README opens with a deprecation notice recommending shadcn-svelte or Melt UI instead, and npm marks the package as no longer supported.',
			source: 'https://github.com/illright/attractions/blob/main/README.md',
		},
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/attractions', 'https://github.com/illright/attractions'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Deprecated upstream: the README says the kit was built for Svelte 3 and points users to shadcn-svelte and Melt UI instead, and npm marks the package deprecated. Listed for reference and migration planning.',
		'Svelte 3 only: the peer range is svelte ^3.31.0, and the required svelte-preprocess ^4 also peers on Svelte 3. Components use export let, $: statements, slots, on: events, createEventDispatcher and $$restProps; on Svelte 5 that syntax only runs in legacy mode.',
		'Styling: each component loads a .scss file through <style src>, so your build compiles the styles with svelte-preprocess and Sass. Theming means overriding Sass variables (main color, font, radii, shadows) via a theme file passed to the bundled importer; there is no theme layer of CSS custom properties and no dark theme in the docs.',
		'Types come from .d.ts files generated with sveld and shipped in the package.',
		'A prebuilt bundle on unpkg registers the components as custom elements (e.g. a-button) for use without a Svelte build; events and non-lowercase props then go through the component API rather than HTML attributes.',
		'Documented components with no canonical id of their own here: Badge (a dot attached to another element) and Dot. Both are linked from the Chip entry.',
	],
})
