import { defineLibrary } from '../schema'

// Docs are a prerendered SvelteKit site (demo/ in the repo) with one route tree per framework:
// demo/src/routes/docs/[framework]/components/<slug>/examples. We link the Svelte variant of each
// page. Every page below was fetched live on 2026-11-24 (200), and a made-up component slug
// returns 404.
const site = 'https://www.agnosui.dev/latest'
const svelteDocs = `${site}/docs/svelte`
const c = (slug: string) => `${svelteDocs}/components/${slug}/examples`
const style = (slug: string) => `${svelteDocs}/components/${slug}/style`
const install = `${svelteDocs}/getting-started/installation`
const repo = 'https://github.com/AmadeusITGroup/AgnosUI'

export default defineLibrary({
	id: 'agnosui',
	name: 'AgnosUI',
	description:
		'Svelte adapters for a framework-agnostic component core by Amadeus, shipped as a headless package and a Bootstrap-styled package that share the same markup as the Angular and React versions.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@agnos-ui/svelte-bootstrap', '@agnos-ui/svelte-headless'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
		notes: 'One MIT LICENSE at the monorepo root covers the core, Bootstrap styles and every framework package.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.16.0',
		runes: true,
	},
	version: '0.11.0',
	styling: ['css', 'headless'],
	dependencies: [
		{
			package: 'bootstrap',
			kind: 'css-framework',
			required: true,
			notes: 'Not bundled: the Bootstrap-styled components expect Bootstrap 5 CSS loaded in your app, plus the AgnosUI stylesheet from @agnos-ui/core-bootstrap (installed with the package). The docs StackBlitz template uses bootstrap ^5.3.3. Slider, Rating, Tree and Drawer are standalone components with their own styles.',
			source: `${svelteDocs}/bootstrap-components/introduction`,
		},
		{
			package: '@amadeus-it-group/tansu',
			kind: 'peer',
			range: '^2.0.0',
			required: true,
			notes: 'Store library behind every widget; also used to write your own config stores. npm and pnpm add peers automatically; the install docs list it for manual install when legacy-peer-deps is on.',
			source: install,
		},
		{
			package: 'esm-env',
			kind: 'peer',
			range: '^1.2.1',
			required: true,
			notes: 'Peer of the core and the Svelte Bootstrap package; listed in the manual install command of the install docs.',
			source: install,
		},
		{
			package: '@floating-ui/dom',
			kind: 'peer',
			range: '^1.6.12',
			required: false,
			notes: 'Peer of @agnos-ui/core, listed in the manual install command. Only the Floating UI service (for building your own floating elements) uses it; no shipped component does.',
			source: install,
		},
		{
			package: 'embla-carousel',
			kind: 'peer',
			range: '^8.5.2',
			required: false,
			notes: 'Peer of @agnos-ui/core; only the Carousel uses it.',
			source: `${repo}/blob/main/core/package.json`,
		},
		{
			package: 'sass',
			kind: 'sass',
			required: false,
			notes: 'Only if you import the SCSS sources of @agnos-ui/core-bootstrap (and Bootstrap) instead of the compiled CSS, e.g. to change Sass variables.',
			source: `${repo}/blob/main/core-bootstrap/README.md`,
		},
	],
	features: ['typescript', 'ssr', 'accessibility', 'semantic-colors', 'theming'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'alert', name: 'Alert', docs: c('alert'), notes: 'Color comes from a type prop that takes Bootstrap contextual names (primary, success, danger...).' },
		{ id: 'carousel', name: 'Carousel', docs: c('carousel'), notes: 'Built on Embla Carousel; autoplay is shown with the separate Embla autoplay plugin.' },
		{ id: 'collapsible', name: 'Collapse', docs: c('collapse') },
		{ id: 'drawer', name: 'Drawer', docs: c('drawer'), notes: `Standalone component with its own CSS variables: ${style('drawer')}` },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: 'Can also be opened from code, and stacked.' },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'progress', name: 'Progressbar', docs: c('progressbar') },
		{ id: 'rating', name: 'Rating', docs: c('rating'), notes: 'Standalone component, not part of Bootstrap.' },
		{ id: 'slider', name: 'Slider', docs: c('slider'), notes: `Standalone component; range, ticks, vertical and right-to-left modes. Styled with CSS variables: ${style('slider')}` },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: 'A Toaster component with a service handles stacking toasts opened from code.' },
		{ id: 'tree-view', name: 'Tree', docs: c('tree'), notes: `Standalone component with its own CSS variables: ${style('tree')}` },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo (README, CONTRIBUTING, DEVELOPER, LICENSE, .github) has no AGENTS.md, CLAUDE.md or mention of AI tools, the docs site has no llms.txt (404), there is no MCP server, and the MIT LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.11.0', date: '2026-06-17' },
		lastCommit: '2026-06-09',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@agnos-ui/svelte-bootstrap', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Not the same project as AgnosticUI.',
		'Two Svelte flavours are documented side by side: @agnos-ui/svelte-headless gives the widget logic, ARIA attributes and directives for your own markup, and @agnos-ui/svelte-bootstrap builds ready-made Bootstrap components on top of it. Both peer on svelte ^5.16.0 and are written with runes.',
		'Each widget is a framework-agnostic factory in @agnos-ui/core with a thin Svelte adapter; Angular and React packages render the same markup from the same core.',
		'Besides per-instance props, a configuration system built on Svelte context sets default props for every component of a kind within part of the app, without passing them down.',
		'The headless docs section rebuilds most of these components (all but the Drawer) with daisyUI classes as examples of headless use; they are samples, not a published package.',
		'Still pre-1.0 (0.x versions). The docs cover twelve components, with no button, input, select, tabs, tooltip, popover or date picker component. The Bootstrap components introduction lists a date picker, time picker, select and side navigation as planned.',
		'Docs also cover services you can reuse in your own components: focus tracking, Floating UI positioning, media queries, keyboard navigation, resize observer and transitions.',
	],
})
