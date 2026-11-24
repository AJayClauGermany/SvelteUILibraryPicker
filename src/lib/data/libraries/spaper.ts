import { defineLibrary } from '../schema'

// Docs are a prerendered SvelteKit site (src/routes in the repo, main branch) on GitHub Pages.
// Component pages are /components/<Name> with no trailing slash, where <Name> comes from
// src/docs/nav.ts (the trailing-slash form returns 404). Every page below was fetched live on
// 2026-11-24 (200), and a made-up slug returns 404.
const site = 'https://oli8.github.io/spaper'
const c = (name: string) => `${site}/components/${name}`
const start = `${site}/start`
const repo = 'https://github.com/Oli8/spaper'

export default defineLibrary({
	id: 'spaper',
	name: 'Spaper',
	description:
		'A Svelte 5 component set with a hand-drawn, sketchy look, styled by the PapierCSS layer on top of Tailwind CSS 4.',
	docs: `${site}/`,
	repository: repo,
	packages: ['spaper'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [5],
		peerRange: '^5.20.0',
		runes: true,
	},
	version: '2.0.3',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^4.0.0',
			required: true,
			notes: 'Peer of spaper. Your CSS imports tailwindcss and adds an @source line pointing at node_modules/spaper so the utility classes used inside the components are generated. The docs do not say which Tailwind build integration to use.',
			source: start,
		},
		{
			package: 'papiercss',
			kind: 'css-framework',
			range: '^1.0.2',
			required: true,
			notes: 'Peer of spaper. The paper look (component classes, color tokens, dark variables) comes from this stylesheet, imported after tailwindcss; papiercss/fonts.css is an optional extra import for the handwritten fonts.',
			source: start,
		},
	],
	features: ['typescript', 'runes', 'semantic-colors', 'theming', 'dark-mode', 'forms', 'icons'],
	components: [
		{ id: 'alert', name: 'Alert', docs: c('Alert'), notes: 'Color types, optional icon and a dismissible mode.' },
		{ id: 'avatar', name: 'Avatar', docs: c('Avatar'), notes: 'AvatarGroup is documented on the same page.' },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: c('Breadcrumb'), notes: 'Built from an items array.' },
		{ id: 'button', name: 'Button', docs: c('Button'), notes: `Outline, block, loading and link modes. CloseButton is a separate small close control: ${c('CloseButton')}` },
		{ id: 'card', name: 'Card', docs: c('Card'), notes: 'Image placement, header and footer snippets.' },
		{ id: 'carousel', name: 'Carousel', docs: c('Carousel'), notes: 'Slides are CarouselItem; autoplay, bullets, keyboard navigation and a controls snippet for custom buttons or thumbnails.' },
		{ id: 'collapsible', name: 'Collapsible', docs: c('Collapsible') },
		{ id: 'accordion', name: 'Collapsible', docs: c('Collapsible'), notes: 'Giving several Collapsibles the same name makes them a native exclusive group (one open at a time); there is no separate Accordion component.' },
		{ id: 'clipboard', name: 'CopyButton', docs: c('CopyButton') },
		{ id: 'separator', name: 'Divider', docs: c('Divider') },
		{ id: 'icon', name: 'Icon', docs: c('Icon'), notes: 'Renders sketchy icons that the spaper/icons entry re-exports from @sketchyicons/svelte.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('Checkbox'), notes: 'A group prop binds several checkboxes to one array.' },
		{ id: 'input', name: 'Input', docs: c('Input'), notes: 'Has a validation prop that colors the border.' },
		{ id: 'textarea', name: 'Input', docs: c('Input'), notes: 'An Input mode (type="textarea"), not a separate component.' },
		{ id: 'number-input', name: 'NumberInput', docs: c('NumberInput'), notes: 'Increment/decrement controls, prefix/suffix and Intl number formatting.' },
		{ id: 'radio-group', name: 'Radio', docs: c('Radio'), notes: 'Single radios bound to a shared group value; no group wrapper component.' },
		{ id: 'select', name: 'Select', docs: c('Select'), notes: 'A styled native select.' },
		{ id: 'slider', name: 'Slider', docs: c('Slider') },
		{ id: 'switch', name: 'Switch', docs: c('Switch') },
		{ id: 'dialog', name: 'Modal', docs: c('Modal'), notes: 'Used with bind:active, or opened from script with Modal.open().' },
		{ id: 'navigation-menu', name: 'Navbar', docs: c('Navbar'), notes: 'A top bar with a brand snippet and links; it can be fixed. Not a dropdown menu system.' },
		{ id: 'pagination', name: 'Pagination', docs: c('Pagination'), notes: 'Simple, bullets and jumper variants.' },
		{ id: 'tooltip', name: 'Popover', docs: c('Popover'), notes: 'Despite the name, it shows a short text label on hover (or always/when active), so it matches a tooltip rather than a popover with rich content.' },
		{ id: 'progress', name: 'Progress', docs: c('Progress'), notes: 'Striped and indeterminate styles.' },
		{ id: 'skeleton', name: 'Skeleton', docs: c('Skeleton') },
		{ id: 'spinner', name: 'Spinner', docs: c('Spinner') },
		{ id: 'table', name: 'Table', docs: c('Table'), notes: 'Built from data and columns, with optional TableColumn children for custom cells; column sorting, striped and hoverable rows. No filtering or pagination built in.' },
		{ id: 'tabs', name: 'Tabs', docs: c('Tabs'), notes: 'Each Tab child takes a label, an optional icon and an optional header snippet.' },
		{ id: 'badge', name: 'Tag', docs: c('Tag'), notes: 'A small colored label, optionally rounded.' },
		{ id: 'toast', name: 'Toast', docs: c('Toast'), notes: 'Opened with Toast.open(); positions, durations, pause on hover and dismissible mode.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo has no CONTRIBUTING, AGENTS.md or CLAUDE.md, the README does not mention AI tools, the docs site has no llms.txt (404), there is no MCP server or agent skill, and the MIT LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '2.0.3', date: '2026-11-16' },
		lastCommit: '2026-11-16',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/spaper', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 5 only (peer svelte ^5.20.0). Components are written with runes ($props, $derived) and take snippets and callback props such as onchange.',
		'Version 2 is a rewrite: the 1.x releases peered on the original PaperCSS stylesheet (papercss) and declared no svelte peer. The current release moves to PapierCSS, a Tailwind CSS 4 based take on the same hand-drawn look, written by the Spaper author (PaperCSS itself comes from a different author).',
		'Theming comes from PapierCSS: components take a type prop (primary, secondary, success, warning, danger) mapped to its color tokens, PapierCSS tokens can be overridden per instance as CSS custom properties passed as attributes, and the PapierCSS README documents global token overrides and a dark mode switched by a dark class on a parent.',
		'Documented components with no canonical id here: Article (a blog-style post block), Hero (a large banner section), ScrollTop (a back-to-top button for a scroll container) and CloseButton (linked from the Button entry).',
	],
})
