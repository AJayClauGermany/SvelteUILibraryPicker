import { defineLibrary } from '../schema'

// Docs are a client-rendered Vite app (docs/ in the repo, master at f420fba) deployed to
// GitHub Pages. Pages are selected by the URL hash: docs/nav/Nav.svelte lists each NavItem, whose
// hash is its name with spaces removed (docs/nav/NavItem.svelte), and that hash is looked up among
// the exports of docs/components/index.ts. Every hash below appears in that nav and matches an
// export; most also appear as @see links in the component source. The live site serves 10.1.9.
const site = 'https://ui.perfectthings.dev'
const c = (page: string) => `${site}/#${page}`
const repo = 'https://github.com/perfect-things/ui'

export default defineLibrary({
	id: 'perfectthings-ui',
	name: 'PerfectThings UI',
	description:
		'A Svelte 5 component set for client-rendered web apps, styled with its own CSS and CSS variables, with light and dark palettes and a desktop-app feel.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@perfectthings/ui'],
	license: {
		spdx: 'GPL-3.0-or-later',
		url: `${repo}/blob/master/LICENSE`,
		notes: 'The LICENSE file is the plain GNU GPL v3 text with no project header; the "or later" part comes from the license field in package.json. GPL is a copyleft license, so check its terms for your project before you ship software that includes the library.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.55.4',
		runes: true,
	},
	version: '10.1.9',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'semantic-colors', 'dark-mode', 'forms', 'icons', 'data-grid', 'runes'],
	components: [
		{ id: 'button', name: 'Button', docs: c('Button'), notes: 'Info, success, warning and danger colors, plus outline, text, link, round and icon-only styles.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('ButtonGroup') },
		{ id: 'toggle', name: 'PushButton', docs: c('PushButton'), notes: 'A button that stays pressed until clicked again.' },
		{ id: 'toggle-group', name: 'ButtonToggle', docs: c('ButtonToggle'), notes: 'A radio group drawn as a row of buttons, one selected at a time.' },
		{ id: 'input', name: 'InputText', docs: c('InputText') },
		{ id: 'textarea', name: 'Textarea', docs: c('Textarea'), notes: 'Has an autogrow option.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('Checkbox'), notes: 'Supports an indeterminate state.' },
		{ id: 'radio-group', name: 'Radio', docs: c('Radio') },
		{ id: 'switch', name: 'Toggle', docs: c('Toggle') },
		{ id: 'select', name: 'Select', docs: c('Select'), notes: 'Styled native select element.' },
		{ id: 'combobox', name: 'Combobox', docs: c('Combobox'), notes: 'Can accept values that are not in the list.' },
		{ id: 'tags-input', name: 'Combobox (multiselect)', docs: c('ComboboxMultiselect'), notes: 'A multiselect prop on Combobox that adds checkboxes to the list items; it does not render selected values as chips.' },
		{ id: 'number-input', name: 'InputNumber', docs: c('InputNumber'), notes: `InputMath (${c('InputMath')}) is a number field that also evaluates simple arithmetic typed into it.` },
		{ id: 'password-input', name: 'InputPassword', docs: c('InputPassword'), notes: 'Optional password strength indicator.' },
		{ id: 'search', name: 'InputSearch', docs: c('InputSearch') },
		{ id: 'rating', name: 'InputRating', docs: c('InputRating'), notes: 'The symbol and the number of stars can be changed.' },
		{ id: 'slider', name: 'Range', docs: c('Range'), notes: 'Wraps the native range input; tick marks show by default and can be hidden.' },
		{ id: 'date-picker', name: 'InputDate', docs: c('InputDate'), notes: 'Built on the vanillajs-datepicker package; can fall back to the native date input on mobile.' },
		{ id: 'time-picker', name: 'InputTime', docs: c('InputTime'), notes: 'A thin wrapper over the native time input.' },
		{ id: 'alert', name: 'InfoBar', docs: c('InfoBar'), notes: 'Info, success, warning and error types, with shorthand components for each.' },
		{ id: 'alert-dialog', name: 'MessageBox', docs: c('MessageBox'), notes: 'Function-call message boxes built on a single shared Dialog, with optional buttons and callbacks.' },
		{ id: 'toast', name: 'NotificationCenter', docs: c('NotificationCenter'), notes: 'Notifications are shown by calling a function; they can auto-close or stay until dismissed.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('Tooltip'), notes: 'Color variants, HTML content and keyboard shortcut display.' },
		{ id: 'dialog', name: 'Dialog', docs: c('Dialog'), notes: 'The docs mention keyboard support and a focus trap; a modal option stops it closing on outside clicks or Escape.' },
		{ id: 'drawer', name: 'Drawer', docs: c('Drawer') },
		{ id: 'popover', name: 'Popover', docs: c('Popover') },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('Menu'), notes: 'Opened from code against a target element, with items, separators and shortcut labels.' },
		{ id: 'context-menu', name: 'Menu', docs: c('Menu'), notes: 'A context type on Menu, opened by right-click or long-press on matching elements.' },
		{ id: 'card', name: 'Panel', docs: c('Panel'), notes: 'Container with an optional title and color variants.' },
		{ id: 'collapsible', name: 'Panel', docs: c('Panel'), notes: 'A collapsible prop makes the title toggle the content.' },
		{ id: 'table', name: 'Table', docs: c('Table'), notes: `Styles a table you write yourself and adds row selection with keyboard navigation. Grid (${c('Grid')}), marked alpha in the docs, renders rows from data with sortable columns, totals and checkbox multi-select.` },
		{ id: 'tree-view', name: 'Tree', docs: c('Tree') },
		{ id: 'resizable', name: 'Splitter', docs: c('Splitter') },
		{ id: 'skeleton', name: 'Skeleton', docs: c('Skeleton'), notes: 'Preset shapes and layouts, or build your own.' },
		{ id: 'badge', name: 'Tag', docs: c('Tag'), notes: 'Colored, round and clickable variants, with an optional icon.' },
		{ id: 'icon', name: 'Icon', docs: c('Icon'), notes: 'Built-in icons based on Tabler Icons; custom icons can be registered.' },
		{ id: 'kbd', name: 'Shortcut', docs: c('Shortcut'), notes: 'Formats a key combination; Menu and Tooltip use it too.' },
		{ id: 'theme-switcher', name: 'ThemeSwitcher', docs: c('ThemeSwitcher'), notes: 'Light, dark or follow the OS setting; the choice is kept in localStorage.' },
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repo keeps a CLAUDE.md and GitHub Copilot instructions (.github/copilot-instructions.md) that describe the codebase for coding agents, so the maintainers work with AI tools. There is no llms.txt on the docs site (404), no MCP server, no CONTRIBUTING file and no AI policy in the README; the GPL v3 text adds no AI-specific terms.',
		sources: [
			`${repo}/blob/master/CLAUDE.md`,
			`${repo}/blob/master/.github/copilot-instructions.md`,
			`${repo}/blob/master/README.md`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '10.1.9', date: '2026-07-08' },
		lastCommit: '2026-07-16',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@perfectthings/ui', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 5 only (peer svelte ^5.55.4). Version 10 was the rewrite for Svelte 5: components use $props(), are written in TypeScript, and events are callback props (onchange and so on) that receive the DOM event plus a data object instead of event.detail.',
		'Client-side only: the docs say the components need a browser and do not work with server rendering, so in SvelteKit you turn SSR off in the root layout.',
		'Styling: each component imports its own CSS file, and importing the package also loads a root stylesheet of --ui-* CSS variables with light and dark palettes and initialises the UI helper. Dark mode follows the OS preference unless ThemeSwitcher stores a choice. The docs list the palette but do not describe overriding it.',
		'InputPassword loads the zxcvbn library from the jsDelivr CDN at runtime for its strength meter, unless window.zxcvbn is already present.',
		'The README credits Apple\'s Human Interface Guidelines as a design reference and Tabler Icons for the icon set, and suggests installing the package as a dev dependency.',
		'npm shows an 11.0.0 entry in its version history that cannot be installed; the latest tag points to the 10.1.x line.',
		'Documented pages with no canonical id here: Color Palette (the CSS color variables), Utils (helper functions such as fuzzy search, timeAgo and animate) and InputMath (linked from the number input entry).',
	],
})
