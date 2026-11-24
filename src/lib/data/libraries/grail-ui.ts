import { defineLibrary } from '../schema'

// Docs site routes (checked against the repo at commit 100d79b, the 0.11.0 release, and fetched
// live): every module page is /svelte/<slug>, where the slug is the camelCase folder name under
// apps/docs/src/lib/modules/ (e.g. numberInput, focusTrap). A made-up slug, or a kebab-case one
// such as number-input, returns 400.
const site = 'https://grail-ui.vercel.app'
const repo = 'https://github.com/grail-ui/grail-ui'
const c = (slug: string) => `${site}/svelte/${slug}`

export default defineLibrary({
	id: 'grail-ui',
	name: 'Grail UI',
	description:
		'A Svelte 3-era set of unstyled, accessible primitives where each widget is a create… function returning stores, attribute objects and use: actions for your own markup.',
	docs: site,
	repository: repo,
	packages: ['@grail-ui/svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		peerRange: '3.x',
		runes: false,
	},
	version: '0.11.0',
	styling: ['headless'],
	dependencies: [],
	features: ['typescript', 'ssr', 'accessibility'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: 'createAccordion.' },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'createMenu, positioned with Floating UI.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: 'createModal, with focus trap, portal and outside-click dismissal built in.' },
		{ id: 'popover', name: 'Popover', docs: c('popover'), notes: 'createPopover.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip'), notes: 'createTooltip.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'createTabs.' },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination'), notes: 'createPagination.' },
		{ id: 'number-input', name: 'Number Input', docs: c('numberInput'), notes: 'createNumberInput.' },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: 'createProgress.' },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: 'createToast, with durations, a cap on visible toasts and promise handling.' },
		{ id: 'textarea', name: 'Textarea Autosize', docs: c('textareaAutosize'), notes: 'A utility (createTextareaAutosize) that grows a native textarea with its content, not a field component.' },
		{ id: 'portal', name: 'Portal', docs: c('portal'), notes: 'usePortal action and createPortal.' },
		{ id: 'focus-trap', name: 'Focus Trap', docs: c('focusTrap'), notes: 'createFocusTrap, built on the focus-trap package.' },
		{ id: 'clipboard', name: 'Clipboard', docs: c('clipboard'), notes: 'createClipboard.' },
		{ id: 'hotkeys', name: 'Key Stroke', docs: c('keyStroke'), notes: 'createKeyStroke / useKeyStroke for binding handlers to keys.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at the 0.11.0 state (README, CONTRIBUTING, LICENSE, .github) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/CONTRIBUTING.md`,
			`${repo}/blob/master/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.11.0', date: '2023-09-30' },
		lastCommit: '2023-09-30',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@grail-ui/svelte', 'https://github.com/grail-ui/grail-ui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only (peer svelte 3.x). The package ships no .svelte components: it is TypeScript built on svelte/store and actions, so there is no export let or slot API to migrate. It predates Svelte 4 and 5, installing it there gives a peer conflict, and its lifecycle and toast helpers import from svelte/internal, which Svelte 5 no longer exposes. Listed for reference and migration planning.',
		'Headless: no styles ship with the package. The docs demos use Tailwind CSS and daisyUI, but that is the docs app, not something the library needs.',
		'Everything is exported from the root entry (tree-shakeable) and also from per-module subpaths such as @grail-ui/svelte/modal. @floating-ui/dom and focus-trap are regular dependencies that npm installs for you.',
		'Pages with keyboard tables: Accordion, Menu, Modal, Number Input, Popover and Tabs. Accordion, Modal and Tabs also link the matching WAI-ARIA pattern.',
		'Documented utilities with no canonical id here: Active Element, Click Outside, Resize Observer, Script Tag and Timeout.',
		'The npm package has no license field; the MIT license comes from the LICENSE file in the repo.',
	],
})
