import { defineLibrary } from '../schema'

// Docs are the Vitamin Svelte Storybook (Storybook 6.5, packages/showcases/svelte in the repo,
// main branch at 6f7e7f5), deployed to GitHub Pages. It is client-rendered, so links are derived
// from the <Meta title> and first <Story name> in each stories file: Storybook turns
// "Components / Actions / VtmnButton" + "Overview" into components-actions-vtmnbutton--overview.
// Every title below was also found in the deployed iframe bundle on 2026-11-24.
const sb = 'https://decathlon.github.io/vitamin-web/@vtmn/showcase-svelte'
const c = (group: string, name: string) => `${sb}/?path=/story/components-${group}-vtmn${name}--overview`
const repo = 'https://github.com/Decathlon/vitamin-web'
const pkgDir = `${repo}/tree/main/packages/sources/svelte`
const usage = `${pkgDir}#usage`

export default defineLibrary({
	id: 'vitamin-svelte',
	name: 'Vitamin Svelte',
	description:
		'The Svelte 3 implementation of Vitamin, the Decathlon design system, whose components import the shared Vitamin CSS packages into their styles.',
	docs: `${sb}/`,
	repository: repo,
	packages: ['@vtmn/svelte'],
	license: {
		spdx: 'Apache-2.0',
		url: `${repo}/blob/main/LICENSE`,
		notes: 'One Apache-2.0 LICENSE at the monorepo root covers the Svelte, React, Vue, CSS and icons packages.',
	},
	svelte: {
		supported: [3],
		peerRange: '^3.34.0',
		runes: false,
	},
	version: '4.6.4',
	styling: ['css'],
	dependencies: [
		{
			package: 'svelte-preprocess',
			kind: 'build-plugin',
			required: true,
			notes: 'The README has you compile the package from its source files; each component pulls its Vitamin CSS in with an @import inside its style block, which svelte-preprocess runs through PostCSS. svelte-preprocess also needs postcss itself installed for that.',
			source: usage,
		},
		{
			package: 'postcss-import',
			kind: 'postcss',
			required: true,
			notes: 'The README names it as the recommended way to resolve those @import paths, registered as a PostCSS plugin in the svelte-preprocess options with node_modules on its search path.',
			source: usage,
		},
	],
	features: ['design-system', 'semantic-colors', 'forms', 'icons'],
	components: [
		{ id: 'button', name: 'VtmnButton', docs: c('actions', 'button'), notes: 'Primary, secondary, tertiary, ghost and conversion variants; icons left, right or alone; sizes up to a full-width stretched one.' },
		{ id: 'link', name: 'VtmnLink', docs: c('actions', 'link') },
		{ id: 'input', name: 'VtmnTextInput', docs: c('forms', 'textinput'), notes: 'Label, helper text, valid and error states, and an optional icon.' },
		{ id: 'textarea', name: 'VtmnTextInput', docs: c('forms', 'textinput'), notes: 'A multiline prop renders a textarea.' },
		{ id: 'select', name: 'VtmnSelect', docs: c('forms', 'select'), notes: `Wraps a native select. VtmnDropdown (${c('actions', 'dropdown')}) is a separate disclosure whose VtmnDropdownItem entries are checkboxes, for picking several values.` },
		{ id: 'checkbox', name: 'VtmnCheckbox', docs: c('selection-controls', 'checkbox') },
		{ id: 'radio-group', name: 'VtmnRadioButton', docs: c('selection-controls', 'radiobutton'), notes: 'A single radio; you group several with a shared name and bind:group.' },
		{ id: 'switch', name: 'VtmnToggle', docs: c('selection-controls', 'toggle') },
		{ id: 'number-input', name: 'VtmnQuantity', docs: c('selection-controls', 'quantity'), notes: 'Minus and plus buttons around a number field, with min, max and step.' },
		{ id: 'search', name: 'VtmnSearch', docs: c('navigation', 'search'), notes: 'Default, persistent and on-content variants.' },
		{ id: 'breadcrumb', name: 'VtmnBreadcrumb', docs: c('navigation', 'breadcrumb'), notes: 'Items are VtmnBreadcrumbItem.' },
		{ id: 'navigation-menu', name: 'VtmnNavbar', docs: c('navigation', 'navbar'), notes: `A top bar with slots for left navigation, logo, a middle area and right navigation. VtmnNavbarLink (${c('navigation', 'navbarlink')}) is an icon link for it, with an optional badge.` },
		{ id: 'tabs', name: 'VtmnTabs', docs: c('navigation', 'tabs'), notes: 'Items are VtmnTabsItem buttons, with an optional icon and badge.' },
		{ id: 'alert', name: 'VtmnAlert', docs: c('overlays', 'alert'), notes: 'Not an inline banner: you place VtmnAlert once and send messages to it through a store; they stack as overlays with info, success, warning or danger styling and close after a timeout.' },
		{ id: 'toast', name: 'VtmnToast', docs: c('overlays', 'toast'), notes: `Also placed once and fed through a store. VtmnSnackbar (${c('overlays', 'snackbar')}) works the same way and can carry an action button.` },
		{ id: 'dialog', name: 'VtmnModal', docs: c('overlays', 'modal') },
		{ id: 'popover', name: 'VtmnPopover', docs: c('overlays', 'popover') },
		{ id: 'tooltip', name: 'VtmnTooltip', docs: c('overlays', 'tooltip') },
		{ id: 'badge', name: 'VtmnBadge', docs: c('indicators', 'badge'), notes: `A numeric counter badge. VtmnTag (${c('indicators', 'tag')}) is a text label with brand, accent, alert and decorative colors.` },
		{ id: 'progress', name: 'VtmnProgressbar', docs: c('indicators', 'progressbar'), notes: 'Linear and circular, determinate or indeterminate.' },
		{ id: 'spinner', name: 'VtmnLoader', docs: c('indicators', 'loader') },
		{ id: 'rating', name: 'VtmnRating', docs: c('indicators', 'rating'), notes: 'Interactive or read-only, with optional value and comment count display.' },
		{ id: 'accordion', name: 'VtmnAccordion', docs: c('structure', 'accordion'), notes: 'One collapsible section built on details/summary; you stack several to form an accordion.' },
		{ id: 'card', name: 'VtmnCard', docs: c('structure', 'card') },
		{ id: 'separator', name: 'VtmnDivider', docs: c('structure', 'divider'), notes: 'Horizontal or vertical, optionally with text.' },
		{ id: 'list', name: 'VtmnList', docs: c('structure', 'list'), notes: `Rows are VtmnListItem: ${c('structure', 'listitem')}` },
		{ id: 'skeleton', name: 'VtmnSkeleton', docs: c('structure', 'skeleton') },
		{ id: 'icon', name: 'VtmnIcon', docs: `${sb}/?path=/story/guidelines-iconography-vtmnicon--overview`, notes: 'Renders glyphs from the Vitamix icon font in @vtmn/icons; the font CSS must be imported for icons to show.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the monorepo README, CONTRIBUTING, SECURITY and .github templates do not mention AI tools, there is no AGENTS.md or CLAUDE.md, the GitHub Pages site has no llms.txt (404), there is no MCP server, and the Apache-2.0 LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${sb}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '4.6.4', date: '2024-03-25' },
		lastCommit: '2025-06-06',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@vtmn/svelte', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Frozen upstream: a notice at the top of the monorepo README says this version of Vitamin will no longer evolve and only takes bug fixes, while Decathlon builds a new version of the design system (details: https://github.com/Decathlon/vitamin-design/blob/main/IMPORTANT_NOTE.md). It is not marked deprecated on npm and the repo is not archived. Listed for reference and migration planning.',
		'Svelte 3 only: the peer range is svelte ^3.34.0 and the repo builds against Svelte 3.51. Components use export let, $: statements, slots, on: events, createEventDispatcher and $$restProps; on Svelte 5 that syntax only runs in legacy mode.',
		'Styling: each component imports its own @vtmn/css-* package (installed as regular dependencies) in its style block, and those import the Vitamin design tokens as CSS custom properties. The package also ships prebuilt dist CSS files, which the Storybook showcase imports, but the README describes compiling from source.',
		'Fonts are not bundled: the README has you load Roboto and Roboto Condensed yourself, through Fontsource packages, a Google Fonts link or a CSS import.',
		'Written in JavaScript with JSDoc comments; the package ships no .d.ts type definitions.',
		'The same monorepo publishes React (@vtmn/react), Vue (@vtmn/vue) and plain CSS (@vtmn/css) versions of the components.',
		'Documented components with no canonical id here: VtmnChip (single-choice, input, filter and action chips), VtmnPrice (a styled price label) and VtmnTag; the last is linked from the badge entry.',
	],
})
