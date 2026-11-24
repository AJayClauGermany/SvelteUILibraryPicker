import { defineLibrary } from '../schema'

// Docs are a Sapper site exported to GitHub Pages (docs/src/routes in the repo, master branch).
// Component pages are /components/<slug>/ where <slug> is the route file name under
// docs/src/routes/components; the sidebar (docs/src/components/Sidebar.svelte) links them. Every
// page below was fetched live on 2026-11-24 (200), and a made-up slug returns 404. The README's
// docs link (docs-abbychau.vercel.app/svelma) returns 404, so we link the GitHub Pages site.
const site = 'https://c0bra.github.io/svelma'
const c = (slug: string) => `${site}/components/${slug}/`
const repo = 'https://github.com/c0bra/svelma'
const readme = `${repo}/blob/master/README.md`

export default defineLibrary({
	id: 'svelma',
	name: 'Svelma',
	description:
		'A small Svelte 3 component set that wraps the Bulma CSS framework, adding interactive pieces such as modals, dialogs, toasts and tabs on top of Bulma classes.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelma'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '0.4.5',
	styling: ['css'],
	dependencies: [
		{
			package: 'bulma',
			kind: 'css-framework',
			range: '^0.9.2',
			required: true,
			notes: 'Peer of svelma 0.4.5. You import bulma/css/bulma.css yourself (for example in your root component); the components only output Bulma class names.',
			source: readme,
		},
		{
			package: '@fortawesome/fontawesome-free',
			kind: 'css-framework',
			required: false,
			notes: 'The Icon component and the icon options on other components render Font Awesome class names. The README has you load Font Awesome 5 from its CDN or import this package\'s CSS; components without icons work without it.',
			source: readme,
		},
		{
			package: 'svelte-preprocess',
			kind: 'build-plugin',
			required: true,
			notes: 'The package ships only .svelte source, and 11 of its 25 component files (among them Field, Switch, Tabs, Tooltip, Dialog, Toast, Snackbar and Notification) use <style lang="scss">, so your Svelte build needs a preprocessor that handles SCSS. The README installs svelte-preprocess and adds it to the Svelte plugin.',
			source: readme,
		},
		{
			package: 'node-sass',
			kind: 'sass',
			required: true,
			notes: 'Installed in the README quick start so svelte-preprocess can compile the SCSS blocks inside the components.',
			source: readme,
		},
		{
			package: 'rollup-plugin-postcss',
			kind: 'build-plugin',
			required: false,
			notes: 'The README and install page add it to a Rollup config so the Bulma CSS import can be bundled. Setup is written for Rollup only; bundlers that import CSS natively do not need it.',
			source: `${site}/install/`,
		},
	],
	features: ['semantic-colors', 'icons', 'ssr'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Bulma colors, sizes and outlined/rounded styles through props, with optional left and right icons; can render as a link.' },
		{ id: 'collapsible', name: 'Collapse', docs: c('collapse') },
		{ id: 'alert-dialog', name: 'Dialog', docs: c('dialog'), notes: 'Opened programmatically with alert, confirm and prompt functions.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: `ModalCard adds Bulma's header, body and footer card layout: ${c('modalcard')}` },
		{ id: 'form', name: 'Field', docs: c('field'), notes: 'Wraps controls with a label, help message and type (color), and groups them as Bulma addons. No validation logic.' },
		{ id: 'input', name: 'Input', docs: c('input'), notes: 'Optional icon, loading state and character counter.' },
		{ id: 'textarea', name: 'Input', docs: c('input'), notes: 'Setting type to textarea renders a textarea.' },
		{ id: 'password-input', name: 'Input', docs: c('input'), notes: 'A passwordReveal prop on a password Input adds a show/hide toggle.' },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'Wraps a native select; the docs also show a multiple variant.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders Font Awesome icons by name; you load Font Awesome yourself.' },
		{ id: 'alert', name: 'Message', docs: c('message'), notes: `Notification (${c('notification')}) is a similar inline box that can be closed and can close itself after a delay.` },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: 'Animated value changes; leaving out the value gives an indeterminate bar. The page shows Progress examples, but its heading is mislabelled Hero.' },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: `Opened with a function call. Snackbar (${c('snackbar')}) is a variant with an action button.` },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Tab is the child component for each panel.' },
		{ id: 'badge', name: 'Tag', docs: c('tag'), notes: 'Can be closable; Taglist groups several tags.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, LICENSE, docs folder, .github, which only holds a CI workflow) and the docs site: no CONTRIBUTING file, no AGENTS.md or CLAUDE.md, no llms.txt (404), no MCP server and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			readme,
			`${repo}/blob/master/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.4.5', date: '2021-04-14' },
		lastCommit: '2022-08-05',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelma', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only. svelma 0.4.5 declares no svelte peer range (only bulma); the repo builds and documents against Svelte 3. Components use export let, $: statements, slots, on: events, createEventDispatcher and $$props, and Input plus a shared utility import from svelte/internal. Dialog, Toast, Snackbar, Notification and Modal open programmatically by instantiating components with new. These internals and the class-based component API do not carry over to Svelte 5. Listed for reference and migration planning.',
		'The docs home page describes the library as an early work in progress with broken and missing features and documentation.',
		'The published 0.4.5 package contains only the .svelte source (src), not the dist build its main and module fields point to, so it has to be compiled by a Svelte-aware bundler that reads the svelte field. The README also says to import .svelte files directly (svelma/src/components/...) for server-side rendering with Sapper or SvelteKit.',
		'Styling: the look comes from Bulma; components set Bulma modifier classes from props such as type (is-primary, is-success, is-danger...) and size. Global theming means customising Bulma itself; Svelma documents no theme layer or dark mode of its own.',
		'The docs also have Bulma Elements pages (Hero, Media, Table, Tiles) that show plain Bulma markup; they are not Svelma components and are not listed here. Dropdown and File components exist in the source but are not exported or documented.',
		'No TypeScript types are shipped; props are documented with JSDoc comments rendered on each docs page.',
	],
})
