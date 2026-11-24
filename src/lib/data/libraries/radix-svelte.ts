import { defineLibrary } from '../schema'

// Docs routes (checked against the repo at commit 357a8d7 on the develop branch, the 0.9.0 state,
// and fetched live on 2026-11-24): src/routes/docs/[component] serves /docs/<key> for each key in
// src/routes/(previews)/schemas.ts and 404s for anything else. The README links
// https://www.radix-svelte.com, which now 301-redirects to the apex domain, so we link the apex directly.
const site = 'https://radix-svelte.com'
const c = (key: string) => `${site}/docs/${key}`
const repo = 'https://github.com/radix-svelte/radix-svelte'

export default defineLibrary({
	id: 'radix-svelte',
	name: 'Radix Svelte',
	description:
		'Headless Svelte 3/4 components modelled on the Radix UI Primitives API, built by volunteers with no tie to the Radix team. Each component is split into parts you style yourself.',
	docs: `${site}/`,
	repository: repo,
	packages: ['radix-svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/develop/LICENSE`,
	},
	svelte: {
		supported: [4],
		peerRange: '^4.1.1',
		runes: false,
	},
	version: '0.9.0',
	styling: ['headless'],
	dependencies: [],
	features: ['typescript'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'alert-dialog', name: 'Alert Dialog', docs: c('alertdialog') },
		{ id: 'aspect-ratio', name: 'Aspect Ratio', docs: c('aspect-ratio') },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'collapsible', name: 'Collapsible', docs: c('collapsible') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog') },
		{ id: 'hover-card', name: 'Hover Card', docs: c('hovercard') },
		{ id: 'label', name: 'Label', docs: c('label') },
		{ id: 'progress', name: 'Progress', docs: c('progress') },
		{ id: 'radio-group', name: 'Radio Group', docs: c('radiogroup') },
		{ id: 'separator', name: 'Separator', docs: c('separator') },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'toggle', name: 'Toggle', docs: c('toggle') },
		{ id: 'toggle-group', name: 'Toggle Group', docs: c('togglegroup') },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at the 0.9.0 state (README, CONTRIBUTING, ANNOUNCEMENT, LICENSE, .github) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/develop/README.md`,
			`${repo}/blob/develop/CONTRIBUTING.md`,
			`${repo}/blob/develop/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.9.0', date: '2023-07-23' },
		lastCommit: '2023-07-24',
		archived: true,
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/radix-svelte', 'https://github.com/radix-svelte/radix-svelte'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'The README links an announcement in which the author says he stopped building new components (fixes and outside contributions still welcome) and started Melt UI, a builder-based headless library, as a separate project. npm does not mark the package deprecated.',
		'Svelte 4 only: 0.9.0, whose changelog entry is the move to Svelte 4, has the peer range ^4.1.1; earlier releases such as 0.8.0 declared svelte ^3.58.0. Components use export let, slots, on: events, createEventDispatcher and $$restProps, and take a `use` prop for passing actions.',
		'Headless: components ship no styles and are meant to be styled per part (they set data-state and similar attributes). The docs site uses Tailwind for its own examples, but you do not need it. Floating UI is a regular dependency that npm installs.',
		'Select was dropped from the exports in 0.8.0 and has no docs page; Context Menu, Dropdown Menu, Popover and the other Radix menus were never ported.',
		'The docs also have a page for Popper, the internal positioning primitive behind Hover Card and Tooltip (importable from radix-svelte/internal/components); it has no canonical id here.',
		'The repository moved from TGlide/radix-svelte to the radix-svelte organization; the old URL redirects. Its default branch is develop.',
	],
})
