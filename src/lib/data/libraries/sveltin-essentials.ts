import { defineLibrary } from '../schema'

// No docs site: the npm homepage (components.sveltin.io) now redirects to an unrelated domain, so we
// do not link it. The docs are the package README plus one README per component folder in the repo
// (main branch, archived). The package README links each component as a GitHub tree URL; every
// folder's README.md was fetched from raw.githubusercontent.com on 2026-11-24 (200), and a made-up
// folder returns 404.
const repo = 'https://github.com/sveltinio/components-library'
const pkg = `${repo}/tree/main/packages/essentials`
const c = (folder: string) => `${pkg}/src/lib/components/${folder}/`

export default defineLibrary({
	id: 'sveltin-essentials',
	name: 'Sveltin Essentials',
	description:
		'A small typed set of Svelte 3/4 components from the Sveltin project (buttons, tabs, a menu button, links and a disclosure list), styled with bundled CSS that you adjust through CSS variables.',
	docs: pkg,
	repository: repo,
	packages: ['@sveltinio/essentials'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3, 4],
		peerRange: '^3.59.2 || ^4.0.0',
		runes: false,
	},
	version: '0.7.9',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'accessibility', 'semantic-colors'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Color variants by role (primary, secondary, info, error, success, warning...), sizes, outline style and optional left/right icon slots; an href renders it as a link.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button-group'), notes: 'Tracks one active button, so it can also act as a single-choice segmented control. Items are ButtonGroupItem in 0.7.9.' },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('dropdown'), notes: 'Follows the WAI-ARIA menu button pattern. In 0.7.9 every item is a link (DropdownItem takes an href); button items exist only on the unreleased main branch. Parts in 0.7.9 are DropdownButton, DropdownContent and DropdownItem.' },
		{ id: 'link', name: 'Link', docs: c('link'), notes: 'Adds an icon and safe rel attributes for external links, and can set SvelteKit preload attributes for internal ones.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Default and bordered styles. Panels are Tab components in 0.7.9.' },
		{ id: 'collapsible', name: 'ToggleList', docs: c('list'), notes: 'A titled list of links that expands and collapses (WAI-ARIA disclosure pattern); the README suggests it for sidebar menus.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo has no CONTRIBUTING, AGENTS.md or CLAUDE.md (.github only holds issue templates, dependabot and a lint/test workflow), the READMEs do not mention AI tools, there is no docs site to host an llms.txt, no MCP server, and the MIT LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${pkg}`,
			`${repo}/blob/main/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.7.9', date: '2023-10-01' },
		lastCommit: '2025-04-02',
		archived: true,
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@sveltinio/essentials', 'https://github.com/sveltinio/components-library'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 and 4 (peer svelte ^3.59.2 || ^4.0.0; the 0.7.9 changelog entry adds Svelte 4). Components use export let, $: statements, slots, on: event forwarding, createEventDispatcher and $$props; on Svelte 5 that syntax only runs in legacy mode. Listed for reference and migration planning.',
		'The repository is archived. Its main branch has unreleased changes after 0.7.9, and the component READMEs there describe that newer API, which differs from the published package in places: for example Button props (variant, outline, shape, block, noFocusRing on main versus type, outlined, rounded, circle, fullSize, withFocusRing in 0.7.9) and dotted part names such as Dropdown.Button and Tabs.Tab, which 0.7.9 exports as separate components.',
		'The package homepage on npm (components.sveltin.io) no longer serves the project; it redirects to an unrelated site. The READMEs and a SvelteLab demo linked from them are the remaining docs.',
		'Styling: each component imports its own prebuilt CSS files (a base file, CSS variables and styles), so your bundler must handle CSS imports, which Vite and SvelteKit do. Theming is per component: pass a styles object of CSS variable overrides, or a class that redefines those variables. There is no global theme and no dark theme.',
		'Components are imported per folder (e.g. @sveltinio/essentials/button) or from the package root, and ship .d.ts types. The README describes the set as built for Sveltin-based sites but usable elsewhere.',
		'Documented component with no canonical id here: ColorViewer, a color swatch that shows its value and copies it to the clipboard on click.',
	],
})
