import { defineLibrary } from '../schema'

// Docs are a Sapper app exported to Firebase Hosting (firebase.json in the repo). Routes come from
// src/routes/[slug].svelte, which looks the slug up in src/routes/demo/index.js, so pages are
// /<ExportName>/ with the export name's casing. The hosting config rewrites unknown paths to the
// home page with a 200, so every link below was fetched on 2026-11-24 and checked to return its
// own exported page (an unknown slug returns the home page HTML byte for byte).
const site = 'https://svelte-atoms.web.app'
const c = (name: string) => `${site}/${name}/`
const repo = 'https://gitlab.com/az67128/svelte-atoms'

export default defineLibrary({
	id: 'svelte-atoms',
	name: 'Svelte Atoms',
	description:
		'A small Svelte 3 component kit following the Atol company look, with form controls, overlays, a grid and its own icon set, styled through CSS variables.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-atoms'],
	license: {
		spdx: 'MIT',
		url: `${repo}/-/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '0.0.27',
	styling: ['css'],
	dependencies: [],
	features: ['icons', 'semantic-colors', 'theming'],
	components: [
		{ id: 'button', name: 'Button', docs: c('Button'), notes: `Takes a status (primary, positive, negative, warning) and a type (filled, flat or empty). An icon-only variant is a separate component: ${c('IconButton')}` },
		{ id: 'input', name: 'Input', docs: c('Input'), notes: 'Has title, hint, error and loading states and an optional icon.' },
		{ id: 'textarea', name: 'Input (textarea)', docs: c('Input'), notes: 'No separate component: Input renders a textarea when its textarea prop is set.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('Checkbox') },
		{ id: 'radio-group', name: 'Radio', docs: c('Radio'), notes: 'Single radio buttons tied together through a shared group binding; there is no group wrapper.' },
		{ id: 'switch', name: 'Switch', docs: c('Switch') },
		{ id: 'select', name: 'Select', docs: c('Select'), notes: 'Custom dropdown list built on the library\'s Input and Dropdown, not a native select.' },
		{ id: 'file-upload', name: 'FileUpload', docs: c('FileUpload'), notes: `A button-style file picker. A drag-and-drop area is a separate component: ${c('DropZone')}` },
		{ id: 'dialog', name: 'Popup', docs: c('Popup'), notes: 'Modal with a header, moved to document.body on mount; closes on Escape.' },
		{ id: 'popover', name: 'Dropdown', docs: c('Dropdown'), notes: 'A trigger that opens arbitrary content in a named slot below it; closest to a popover rather than an action menu.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('Tooltip') },
		{ id: 'tabs', name: 'Tabs', docs: c('Tabs'), notes: 'Renders only the row of tab buttons from a tabs array; showing the matching panel is up to you.' },
		{ id: 'pagination', name: 'Pagination', docs: c('Pagination'), notes: 'Includes a page-size picker. Default labels are in Russian and are set through props.' },
		{ id: 'card', name: 'Block', docs: c('Block'), notes: 'A padded, rounded surface with a few shadow variants.' },
		{ id: 'grid', name: 'Grids (Container, Row, Cell)', docs: c('Grids') },
		{ id: 'alert', name: 'Alert', docs: c('Alert') },
		{ id: 'toast', name: 'Notifications', docs: c('Notifications'), notes: 'Place the Notifications component once, then call the exported sendNotification function.' },
		{ id: 'progress', name: 'Progress', docs: c('Progress') },
		{ id: 'spinner', name: 'Loader', docs: c('Loader'), notes: `A loader that covers a container while it loads is a separate component: ${c('ContainerLoader')}` },
		{ id: 'badge', name: 'Chip', docs: c('Chip'), notes: 'Chips can be selectable, closable and editable in place.' },
		{ id: 'table', name: 'Table', docs: c('Table'), notes: 'Table, Thead and Tbody wrappers for styling; no sorting or filtering.' },
		{ id: 'typography', name: 'Typography', docs: c('Typography') },
		{ id: 'icon', name: 'Icon', docs: c('Icon'), notes: `Ships its own icon set as JS modules. Icons inside a colored circle are a separate component: ${c('IconStatus')}` },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, changelog, LICENSE, CI config; there is no CONTRIBUTING, AGENTS.md or CLAUDE.md) and the docs site: no llms.txt (the path only returns the site\'s fallback page), no MCP server and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/-/blob/master/README.md`,
			`${repo}/-/blob/master/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.0.27', date: '2020-05-22' },
		lastCommit: '2020-05-22',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-atoms', 'https://gitlab.com/az67128/svelte-atoms'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 era: version 0.0.27 declares no peer dependencies, and the repo builds its docs with Svelte ^3.20.1 and Sapper. We list Svelte 3 only; Svelte 4 and 5 support were never stated. Listed for reference and migration planning.',
		'Migration: components use export let, $: statements, slots, createEventDispatcher and $$props.class. Several (Button, IconButton, Checkbox, Radio, Switch, Input, FileUpload, DropZone) forward DOM events by reading component internals through svelte/internal, which Svelte 5 no longer exposes, so those would need rewriting rather than running in legacy mode.',
		'Setup: there is no CSS framework or preprocessor. You render the Variables component once to define the palette CSS variables, then import components by path (svelte-atoms/Button.svelte) or from the package root. The package ships uncompiled .svelte files without a svelte or exports field.',
		'The docs site is a demo page per component with a props table, plus a Color page listing the palette variables. The theming tag reflects those documented variables.',
		'Some default strings are in Russian (e.g. Pagination and ContainerLoader labels).',
		'Documented components with no canonical id here: IconButton, IconStatus, ContainerLoader, DropZone (covered as notes above) and Spacer (a fixed-height vertical gap).',
	],
})
