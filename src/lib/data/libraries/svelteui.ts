import { defineLibrary } from '../schema'

// Docs are a SvelteKit + mdsvex site in apps/docs of the repo (checked at commit f40812b on main).
// Component pages are /core/<folder> from apps/docs/src/routes/core/*/+page.md, linked from
// apps/docs/src/lib/components/Sidebar.svelte. Every page below was fetched live on 2026-11-24
// (made-up slugs return 404). The server-rendered pages have no heading ids, so we link whole
// pages and name same-page parts in notes instead of using anchors.
const site = 'https://svelteui.dev'
const c = (slug: string) => `${site}/core/${slug}`
const repo = 'https://github.com/svelteuidev/svelteui'

export default defineLibrary({
	id: 'svelteui',
	name: 'SvelteUI',
	description:
		'A Svelte 3/4-era component library modelled on Mantine, styled at runtime with Stitches (CSS-in-JS) via a theme provider, with companion packages for actions, dates and code highlighting.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@svelteuidev/core', '@svelteuidev/composables'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3, 4],
		peerRange: '>=3.55.0',
		runes: false,
	},
	version: '0.15.7',
	styling: ['css'],
	dependencies: [
		{
			package: '@svelteuidev/dates',
			kind: 'peer',
			range: '0.15.7',
			required: false,
			notes: 'Separate package for the Month component. Its peers pin core and composables to the same exact version.',
			source: `${site}/dates/getting-started`,
		},
		{
			package: 'dayjs',
			kind: 'peer',
			required: false,
			notes: 'Part of the documented install command for @svelteuidev/dates (which also depends on dayjs 1.11.1), and used for date localization.',
			source: `${site}/dates/getting-started`,
		},
		{
			package: '@svelteuidev/prism',
			kind: 'peer',
			range: '0.15.7',
			required: false,
			notes: 'Separate package for the Prism syntax-highlighting component; it brings prismjs and prism-svelte as its own dependencies.',
			source: `${site}/others/prism`,
		},
	],
	features: ['typescript', 'ssr', 'accessibility', 'theming', 'dark-mode', 'forms'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: `Can render as a link. ActionIcon (${c('action-icon')}) is an icon-only button, and UnstyledButton (${c('unstyled-button')}) has no theme styles.` },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: 'CheckboxGroup is documented on the same page.' },
		{ id: 'toggle-group', name: 'Chip', docs: c('chip'), notes: 'Selectable chips; ChipGroup on the same page handles single or multiple selection.' },
		{ id: 'input', name: 'TextInput', docs: c('text-input'), notes: `Input (${c('input')}) is the lower-level base for building custom inputs.` },
		{ id: 'textarea', name: 'Textarea', docs: c('textarea'), notes: `JsonInput (${c('json-input')}) is a textarea variant for JSON.` },
		{ id: 'password-input', name: 'PasswordInput', docs: c('password-input') },
		{ id: 'number-input', name: 'NumberInput', docs: c('number-input') },
		{ id: 'select', name: 'NativeSelect', docs: c('native-select'), notes: 'Styled native select element; there is no custom select or combobox.' },
		{ id: 'radio-group', name: 'Radio', docs: c('radio'), notes: 'RadioGroup is documented on the same page.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'form', name: 'InputWrapper', docs: c('input-wrapper'), notes: 'Adds label, description and error text around custom inputs; the built-in inputs already include it. There is no form or validation component.' },
		{ id: 'link', name: 'Anchor', docs: c('anchor') },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: c('breadcrumbs') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'collapsible', name: 'Collapse', docs: c('collapse') },
		{ id: 'card', name: 'Card', docs: c('card'), notes: `Paper (${c('paper')}) is a plain themed surface.` },
		{ id: 'separator', name: 'Divider', docs: c('divider'), notes: 'Horizontal with an optional label, or vertical.' },
		{ id: 'aspect-ratio', name: 'AspectRatio', docs: c('aspect-ratio') },
		{ id: 'grid', name: 'Grid', docs: c('grid'), notes: `SimpleGrid (${c('simple-grid')}) gives equal-width responsive columns.` },
		{ id: 'stack', name: 'Stack', docs: c('stack'), notes: `Vertical. Group (${c('group')}) is the horizontal counterpart and Flex (${c('flex')}) a general flexbox wrapper.` },
		{ id: 'badge', name: 'Badge', docs: c('badge') },
		{ id: 'image', name: 'Image', docs: c('image'), notes: 'Placeholder for loading and error states.' },
		{ id: 'kbd', name: 'Kbd', docs: c('kbd') },
		{ id: 'timeline', name: 'Timeline', docs: c('timeline') },
		{ id: 'typography', name: 'Text', docs: c('text'), notes: `Title (${c('title')}) renders h1-h6, and TypographyProvider (${c('typography-provider')}) styles raw HTML content. Mark and Blockquote are separate pages.` },
		{ id: 'code-block', name: 'Code', docs: c('code'), notes: `Inline or block code without highlighting. Highlighting is the Prism component from the separate @svelteuidev/prism package (${site}/others/prism).` },
		{ id: 'alert', name: 'Alert', docs: c('alert'), notes: 'Notification is a similar static message card with a loading state; there is no toast queue.' },
		{ id: 'spinner', name: 'Loader', docs: c('loader') },
		{ id: 'progress', name: 'Progress', docs: c('progress') },
		{ id: 'skeleton', name: 'Skeleton', docs: c('skeleton') },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Compound parts Menu.Item and Menu.Label.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal') },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
		{ id: 'popover', name: 'Popper', docs: c('popper'), notes: 'Low-level positioned dropdown (built on Floating UI) rather than a ready-made popover with trigger handling.' },
		{ id: 'portal', name: 'Portal', docs: c('portal') },
		{ id: 'calendar', name: 'Month', docs: `${site}/dates/month`, notes: 'From the separate @svelteuidev/dates package. Shows one month with range, min/max and excluded-date options but no month navigation; the docs list Calendar and DatePicker as coming soon.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, CONTRIBUTING, LICENSE, .github) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 and 4: the peer range `>=3.55.0` is open-ended, the repo builds against Svelte 3.59, and the 0.15.0 changelog includes a fix for Svelte 4. There is no Svelte 5 work, and the published build imports helpers from svelte/internal, which Svelte 5 no longer provides, so we do not list Svelte 5. Listed for reference and migration planning.',
		'Components use export let, slots, $: statements, $$restProps and createEventDispatcher, and forward DOM events through an internal helper.',
		'Styling is CSS-in-JS: @stitches/core is a regular dependency and generates class names at runtime from the theme. There is no Tailwind or stylesheet to import. Wrap the app in SvelteUIProvider for theming, global styles and dark mode; the SSR guide adds a SvelteKit server hook that injects the generated CSS.',
		'@svelteuidev/core lists @svelteuidev/composables (a set of Svelte actions and utilities) as a peer pinned to the exact same version, and the install docs add both.',
		'Theme colors are palette names (blue, red, teal...) plus a primary alias, so we do not tag semantic colors.',
		'Documented components with no canonical id here: AppShell, Affix, Box, Burger, Center, Container, Space, MediaQuery, ObserverRender, Overlay, Seo, ThemeIcon, Mark, Blockquote, JsonInput and Notification.',
	],
})
