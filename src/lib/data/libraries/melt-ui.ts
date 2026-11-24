import { defineLibrary } from '../schema'

// Docs site routes (checked against the repo at commit 84b582f, package.json 0.86.6, and fetched
// live on 2026-11-24): builder pages are /docs/builders/<slug> with slugs from
// src/docs/content/builders/*.md (an unknown slug returns 404). Guide pages are /docs/<slug>
// from src/docs/content/*.md.
const site = 'https://melt-ui.com'
const b = (slug: string) => `${site}/docs/builders/${slug}`
const repo = 'https://github.com/melt-ui/melt-ui'

export default defineLibrary({
	id: 'melt-ui',
	name: 'Melt UI (legacy builders)',
	description:
		'The original store-based Melt UI: headless, accessible builder functions that return Svelte stores and actions you attach to your own markup, written for Svelte 3 and 4.',
	docs: site,
	repository: repo,
	packages: ['@melt-ui/svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/develop/LICENSE`,
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.0.0 || ^4.0.0 || ^5.0.0-next.118',
		runes: false,
	},
	version: '0.86.6',
	styling: ['headless'],
	dependencies: [
		{
			package: '@internationalized/date',
			kind: 'peer',
			required: false,
			notes: 'Only for the date and calendar builders. The Dates guide asks you to install it, although @melt-ui/svelte also lists it as a regular dependency (^3.5.0).',
			source: `${site}/docs/dates`,
		},
		{
			package: '@melt-ui/pp',
			kind: 'build-plugin',
			required: false,
			notes: 'Optional Svelte preprocessor that rewrites `use:melt={$builder}` into spread attributes plus the action; you add it last in the preprocess array of svelte.config.js. The CLI can set it up for you.',
			source: `${site}/docs/installation`,
		},
	],
	features: ['typescript', 'ssr', 'accessibility', 'forms', 'i18n', 'cli'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: b('accordion') },
		{ id: 'avatar', name: 'Avatar', docs: b('avatar') },
		{ id: 'calendar', name: 'Calendar', docs: b('calendar') },
		{ id: 'checkbox', name: 'Checkbox', docs: b('checkbox') },
		{ id: 'collapsible', name: 'Collapsible', docs: b('collapsible') },
		{ id: 'combobox', name: 'Combobox', docs: b('combobox') },
		{ id: 'context-menu', name: 'Context Menu', docs: b('context-menu') },
		{ id: 'date-field', name: 'Date Field', docs: b('date-field') },
		{ id: 'date-picker', name: 'Date Picker', docs: b('date-picker') },
		{ id: 'date-range-field', name: 'Date Range Field', docs: b('date-range-field') },
		{ id: 'date-range-picker', name: 'Date Range Picker', docs: b('date-range-picker') },
		{ id: 'dialog', name: 'Dialog', docs: b('dialog') },
		{ id: 'alert-dialog', name: 'Dialog (role: alertdialog)', docs: b('dialog'), notes: 'No separate builder: the Dialog page covers alert dialogs through a `role` option and an example.' },
		{ id: 'drawer', name: 'Drawer (Dialog example)', docs: b('dialog'), notes: 'Shown as an example built on the Dialog builder, not a builder of its own.' },
		{ id: 'dropdown-menu', name: 'Dropdown Menu', docs: b('dropdown-menu') },
		{ id: 'hover-card', name: 'Link Preview', docs: b('link-preview') },
		{ id: 'label', name: 'Label', docs: b('label') },
		{ id: 'menubar', name: 'Menubar', docs: b('menubar') },
		{ id: 'pagination', name: 'Pagination', docs: b('pagination') },
		{ id: 'pin-input', name: 'PIN Input', docs: b('pin-input') },
		{ id: 'popover', name: 'Popover', docs: b('popover') },
		{ id: 'progress', name: 'Progress', docs: b('progress') },
		{ id: 'radio-group', name: 'Radio Group', docs: b('radio-group') },
		{ id: 'range-calendar', name: 'Range Calendar', docs: b('range-calendar') },
		{ id: 'scroll-area', name: 'Scroll Area', docs: b('scroll-area') },
		{ id: 'select', name: 'Select', docs: b('select') },
		{ id: 'separator', name: 'Separator', docs: b('separator') },
		{ id: 'slider', name: 'Slider', docs: b('slider') },
		{ id: 'switch', name: 'Switch', docs: b('switch') },
		{ id: 'table-of-contents', name: 'Table of Contents', docs: b('table-of-contents') },
		{ id: 'tabs', name: 'Tabs', docs: b('tabs') },
		{ id: 'tags-input', name: 'Tags Input', docs: b('tags-input') },
		{ id: 'toast', name: 'Toast', docs: b('toast') },
		{ id: 'toggle', name: 'Toggle', docs: b('toggle') },
		{ id: 'toggle-group', name: 'Toggle Group', docs: b('toggle-group') },
		{ id: 'toolbar', name: 'Toolbar', docs: b('toolbar') },
		{ id: 'tooltip', name: 'Tooltip', docs: b('tooltip') },
		{ id: 'tree-view', name: 'Tree View', docs: b('tree') },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, CONTRIBUTING, LICENSE, .github) and the docs site: no llms.txt (404 on melt-ui.com), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/develop/CONTRIBUTING.md`,
			`${repo}/blob/develop/README.md`,
			`${repo}/blob/develop/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.86.6', date: '2025-03-28' },
		lastCommit: '2025-09-30',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@melt-ui/svelte', 'https://github.com/melt-ui/melt-ui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'This is the Svelte 3/4-era, store-based Melt UI. Its runes-based successor for Svelte 5 is a separate package, `melt` (listed here as "Melt UI (next-gen)"). The melt-ui.com docs show a banner pointing to the new version, but neither npm nor the README marks @melt-ui/svelte as deprecated.',
		'Svelte 5: the 0.80.0 changelog entry says the peer range was widened to support Svelte 5; the current range accepts Svelte 5 from its late prereleases through the stable 5.x releases. The builders return stores and Svelte actions (`use:melt={$trigger}`), so on Svelte 5 they run as plain stores rather than runes; the repo itself is built and tested with Svelte 4 (its own svelte dev dependency is ^4.2.9).',
		'Migrating to `melt` means rewriting each usage: `createDialog()` with destructured stores becomes `new Dialog()` with attributes you spread, so markup, state reads and event callbacks all change.',
	],
})
