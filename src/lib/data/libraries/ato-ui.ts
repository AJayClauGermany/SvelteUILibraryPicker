import { defineLibrary } from '../schema'

// Docs site routes (checked against the repo at commit c9c98d8, the 0.4.0 release merge, and
// fetched live): component pages are /docs/components/<slug> with slugs from
// src/docs/data/components/index.ts (each also has a `<slug>-headless` page built on Melt UI
// builders); UnoCSS shortcut pages are /docs/unocss/<slug> from src/docs/guides/unocss/*.md.
const site = 'https://ato-ui.vercel.app'
const c = (slug: string) => `${site}/docs/components/${slug}`
const install = `${site}/docs/get-started/1-installation`
const installSrc = 'https://github.com/bennymi/ato-ui/blob/main/src/docs/components/installation-dependencies.svelte'

export default defineLibrary({
	id: 'ato-ui',
	name: 'Ato UI',
	description:
		'A Svelte 4-era component set on Melt UI builders, styled through its own UnoCSS preset with theme files, light/dark tokens and CSS shortcuts.',
	docs: site,
	repository: 'https://github.com/bennymi/ato-ui',
	packages: ['ato-ui'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/bennymi/ato-ui/blob/main/LICENSE',
	},
	svelte: {
		supported: [4],
		peerRange: '>=4',
		runes: false,
	},
	version: '0.4.0',
	styling: ['css', 'copy-paste'],
	dependencies: [
		{
			package: 'unocss',
			kind: 'unocss',
			required: true,
			notes: 'You add the UnoCSS Vite plugin (unocss/vite) and a uno.config.ts with the ato-ui preset yourself; the components only get their look from classes UnoCSS generates. No version is given in the docs; ato-ui itself depends on unocss ^0.57.7.',
			source: install,
		},
		{
			package: '@unocss/preset-wind',
			kind: 'unocss',
			required: true,
			notes: 'Registered in your uno.config.ts next to presetAtoUI from ato-ui/preset. Also a regular dependency of ato-ui (^0.57.7), but the docs have you install and import it yourself.',
			source: installSrc,
		},
		{
			package: '@unocss/preset-icons',
			kind: 'unocss',
			required: true,
			notes: 'Part of the documented base config. Icon sets come as separate @iconify-json/* packages you pick yourself.',
			source: installSrc,
		},
		{
			package: '@unocss/transformer-variant-group',
			kind: 'unocss',
			required: true,
			notes: 'Listed as a transformer in the documented uno.config.ts.',
			source: installSrc,
		},
		{
			package: '@unocss/transformer-directives',
			kind: 'unocss',
			required: true,
			notes: 'Listed as a transformer in the documented uno.config.ts. Also a regular dependency of ato-ui (^0.57.7).',
			source: installSrc,
		},
		{
			package: '@unocss/reset',
			kind: 'unocss',
			required: false,
			notes: 'In the install command and the example layout, but the docs call style resetting optional.',
			source: install,
		},
		{
			package: '@julr/unocss-preset-forms',
			kind: 'unocss',
			required: false,
			notes: 'Community preset the Forms page suggests for styling native form controls.',
			source: `${site}/docs/unocss/forms`,
		},
	],
	features: ['typescript', 'theming', 'dark-mode', 'semantic-colors'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: `Headless (Melt UI builder) example: ${c('accordion-headless')}` },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: `Headless example: ${c('avatar-headless')}` },
		{ id: 'combobox', name: 'Combobox', docs: c('combobox'), notes: `Headless example: ${c('combobox-headless')}` },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: `Headless example: ${c('dialog-headless')}` },
		{ id: 'dropdown-menu', name: 'Dropdown Menu', docs: c('dropdown-menu'), notes: `Exported as the Dropdown namespace. Headless example: ${c('dropdown-menu-headless')}` },
		{ id: 'radio-group', name: 'Radio Group', docs: c('radio-group'), notes: `Headless example: ${c('radio-group-headless')}` },
		{ id: 'switch', name: 'Switch', docs: c('switch'), notes: `Headless example: ${c('switch-headless')}` },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: `Headless example: ${c('tabs-headless')}` },
		{ id: 'table-of-contents', name: 'Table of Contents', docs: c('table-of-contents'), notes: `Headless example: ${c('table-of-contents-headless')}` },
		{ id: 'button', name: 'Buttons', docs: `${site}/docs/unocss/buttons`, notes: 'CSS shortcut classes from the UnoCSS preset (btn-*), not a Svelte component.' },
		{ id: 'button-group', name: 'Button Groups', docs: `${site}/docs/unocss/buttons#button-groups`, notes: 'Shortcut classes on a wrapper, horizontal or vertical.' },
		{ id: 'spinner', name: 'Spinners / Loaders', docs: `${site}/docs/unocss/spinners`, notes: 'CSS classes from the preset; the Iconify spinners section also needs @iconify-json/svg-spinners.' },
		{ id: 'icon', name: 'Icons', docs: `${site}/docs/get-started/3-icons`, notes: 'A guide to UnoCSS preset-icons (Iconify icons as CSS classes), not an icon set shipped by ato-ui.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, CONTRIBUTING, LICENSE, .github) and the docs site at the 0.4.0 state: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			'https://github.com/bennymi/ato-ui/blob/main/CONTRIBUTING.md',
			'https://github.com/bennymi/ato-ui/blob/main/LICENSE',
			'https://github.com/bennymi/ato-ui/blob/main/README.md',
		],
	},
	maintenance: {
		lastRelease: { version: '0.4.0', date: '2023-11-25' },
		lastCommit: '2023-11-25',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/ato-ui', 'https://github.com/bennymi/ato-ui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 5: the peer range `>=4` is open-ended, but 0.4.0 predates Svelte 5 and is written in Svelte 4 syntax (export let, slots, $: statements, createEventDispatcher). Its dependency @melt-ui/svelte 0.63.x declares `svelte: >=3 <5`, so on Svelte 5 it would only run, if at all, through legacy mode with a peer conflict. We list Svelte 4 only.',
		'Built on @melt-ui/svelte 0.63 (the store-based Svelte 4 builder API). Melt UI has since moved on: its Svelte 5 package is `melt`, and @melt-ui/svelte is the legacy line.',
		'Styling: there is no Tailwind; component classes are UnoCSS utilities and shortcuts from the ato-ui preset (ato-ui/preset, built for UnoCSS 0.57), with colors from a theme CSS file (ato-ui/themes/*.css) selected by a data-theme attribute. We record "css" for that and "copy-paste" for the headless pages, which are Melt UI builder examples styled with Ato tokens that you copy and adapt. Your own UnoCSS setup is required even though unocss is also a regular dependency of ato-ui.',
		'The docs also cover UnoCSS design tokens (background, border, text, SVG) and a theme designer page; these are utilities rather than components and are not listed here.',
	],
})
