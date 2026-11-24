import { defineLibrary } from '../schema'

// Docs are built with svelte-docs from docs_src/ in the repo (master at 0b4d259) and published to
// GitHub Pages under /svelte-chota/. Pages come from docs_src/src/pages/<path>.md and the sidebar in
// docs_src/src/includes/sidebar.md; each route is exported as its own directory, so /components/<slug>/
// returns 200 while a made-up slug returns 404 (checked live on 2026-11-24). The pages render client
// side, so no heading anchors are linked.
const site = 'https://alexxnb.github.io/svelte-chota'
const c = (slug: string) => `${site}/components/${slug}/`
const install = `${site}/install/`
const repo = 'https://github.com/AlexxNB/svelte-chota'

export default defineLibrary({
	id: 'svelte-chota',
	name: 'Svelte-chota',
	description:
		'A small set of Svelte 3 components that wrap the markup and classes of the chota CSS micro-framework, which you load yourself.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-chota'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '1.8.6',
	styling: ['css'],
	dependencies: [
		{
			package: 'chota',
			kind: 'css-framework',
			required: true,
			notes: 'The components only emit chota class names, so you install chota and import it once in your root component. The docs also allow loading it from a CDN with an @import instead. No version range is given; the docs site itself was built with chota ^0.7.1.',
			source: install,
		},
	],
	features: ['semantic-colors', 'theming', 'forms', 'icons'],
	components: [
		{ id: 'button', name: 'Button', docs: c('buttons'), notes: 'Color props (primary, secondary, dark, error, success), outline and clear styles, a loading state, and icon or iconRight props.' },
		{ id: 'dropdown-menu', name: 'Button (dropdown)', docs: c('buttons'), notes: 'A dropdown prop turns a Button into a details-based toggle that shows a card with whatever you put inside (links, inputs). There are no menu item components; autoclose closes it on an inside click. Because it holds arbitrary content (the docs also put a login form in it), it could equally be read as a popover.' },
		{ id: 'input', name: 'Input', docs: c('form'), notes: 'Boolean props pick the type (password, date, color, number, range, textarea); error, success and disabled states.' },
		{ id: 'textarea', name: 'Input', docs: c('form'), notes: 'A textarea prop on Input.' },
		{ id: 'slider', name: 'Input', docs: c('form'), notes: 'A native range input via the range prop or type="range", styled by chota.' },
		{ id: 'form', name: 'Field', docs: c('form'), notes: 'Wraps inputs with a label and an error or success message; grouped and gapless layouts join inputs and buttons in a row. No validation logic.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('form'), notes: 'Binds to an array through bind:group; slot content becomes the label.' },
		{ id: 'radio-group', name: 'Radio', docs: c('form'), notes: 'Single radios sharing a bind:group value; there is no group wrapper component.' },
		{ id: 'navigation-menu', name: 'Nav', docs: c('nav'), notes: 'A top bar with left, center and right slots for your own links.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Tabs and Tab render the tab strip and bind the active index or tabid; panels are up to you.' },
		{ id: 'card', name: 'Card', docs: c('card'), notes: 'Header and footer slots.' },
		{ id: 'badge', name: 'Tag', docs: c('tag'), notes: 'Small and large sizes.' },
		{ id: 'collapsible', name: 'Details', docs: c('details'), notes: 'A styled native details element with a summary slot and an open prop.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: 'An overlay bound with bind:open; you put a Card or other content inside.' },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Takes an SVG path (e.g. from @mdi/js), a sprite URL with symbol id, or an image URL; size, color, rotate, flip and spin props. No icon set is bundled.' },
		{ id: 'grid', name: 'Row / Col', docs: c('grid'), notes: '12-column grid with size, sizeMD and sizeLG props for breakpoints and a reverse prop on Row.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at its latest master commit (README, CHANGELOG, LICENSE, .github workflows, docs source) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, no CONTRIBUTING file and no mention of AI tools. The MIT license adds no AI-specific terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '1.8.6', date: '2021-07-29' },
		lastCommit: '2021-07-29',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-chota', 'https://github.com/AlexxNB/svelte-chota'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3: svelte-chota 1.8.6 declares no peerDependencies and builds against svelte ^3.31.2 (a devDependency). Components use export let, $: statements, slots, $$props and $$restProps. Listed for reference and migration planning; the master branch and npm releases contain no Svelte 4 or 5 changes (an open, unmerged community pull request touches the event-forwarding helper).',
		'Event forwarding relies on Svelte internals: a helper imports bubble, listen and get_current_component from svelte/internal and reads the component\'s internal callbacks so any on: directive reaches the DOM element. Svelte 5 no longer exports those internals, so this would need rewriting there.',
		'Styling comes entirely from chota: the components add its class names, and theming means setting chota\'s CSS variables (primary, grey shades, error and success colors, grid width and gutter, font). The docs do not cover a dark theme.',
		'Native selects, date and color inputs have no dedicated component: selects are plain HTML styled by chota, and date, color and number are Input types rendered by the browser.',
		'Container is a centered page wrapper with no matching id here. The docs also list chota\'s utility classes and styled HTML elements, which are CSS rather than components.',
		'No type definitions ship with the package.',
	],
})
