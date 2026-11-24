import { defineLibrary } from '../schema'

// Docs are a Storybook 5.3 build (stories/index.stories.js in the repo, master at ac368e2) published
// at saurav.tech/mdbsvelte. Storybook is client-rendered, so every ?path= returns the same shell:
// the story ids below are derived from the storiesOf(kind).add(name) calls (kind--name, lowercased,
// spaces to hyphens), and the deployed iframe main bundle (fetched 2026-11-24, Storybook 5.3.19)
// holds the same kinds and names. The README component list links the same ids.
const site = 'https://saurav.tech/mdbsvelte'
const s = (id: string) => `${site}/?path=/story/${id}`
const repo = 'https://github.com/mdbootstrap/mdbsvelte'
const readme = `${repo}/blob/master/README.md`
const install = `${readme}#step-2-add-css`

export default defineLibrary({
	id: 'mdbsvelte',
	name: 'MDBSvelte',
	description:
		'A Svelte 3 port of the Material Design for Bootstrap 4 components, modelled on mdbreact, that ships no CSS: you load the Bootstrap 4 and MDB stylesheets yourself.',
	docs: `${site}/`,
	repository: repo,
	packages: ['mdbsvelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '1.0.12',
	styling: ['css'],
	dependencies: [
		{
			package: 'bootstrap',
			kind: 'css-framework',
			range: '4.4.1',
			required: true,
			notes: 'Only the compiled Bootstrap 4 stylesheet; the install steps link it from cdnjs in your HTML head (or in svelte:head). No npm install is shown and no Bootstrap JavaScript is needed.',
			source: install,
		},
		{
			package: 'mdbootstrap',
			kind: 'css-framework',
			range: '4.16.0',
			required: true,
			notes: 'The Material Design for Bootstrap stylesheet (mdb.min.css), loaded from cdnjs after Bootstrap. The components only emit its class names.',
			source: install,
		},
		{
			package: '@fortawesome/fontawesome-free',
			kind: 'css-framework',
			range: '5.8.2',
			required: false,
			notes: 'The install steps link Font Awesome 5 from its CDN. MDBIcon and the icon props on inputs render Font Awesome classes; components without icons work without it. The steps also add Roboto from Google Fonts.',
			source: install,
		},
	],
	features: ['ssr', 'semantic-colors', 'forms', 'data-grid', 'icons', 'design-system'],
	components: [
		{ id: 'grid', name: 'MDBRow / MDBCol', docs: s('layout--grid'), notes: `Bootstrap grid as components. MDBContainer (fixed or fluid) has its own story: ${s('layout--containers')}` },
		{ id: 'alert', name: 'MDBAlert', docs: s('components--alerts'), notes: 'Contextual colors and an optional dismiss button.' },
		{ id: 'button', name: 'MDBBtn', docs: s('components--buttons'), notes: 'Colors, outline, gradient, rounded and size options; an href renders a link. Adds the MDB ripple (waves) effect.' },
		{ id: 'button-group', name: 'MDBBtnGroup', docs: s('components--buttons-groups') },
		{ id: 'card', name: 'MDBCard', docs: s('components--cards'), notes: 'Built from parts (MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage...), plus MDBCardGroup, MDBCardDeck and MDBCardColumns layouts.' },
		{ id: 'dropdown-menu', name: 'MDBDropdown', docs: s('components--dropdowns'), notes: 'Nest MDBDropdownToggle, MDBDropdownMenu and MDBDropdownItem; drop up, left and right variants.' },
		{ id: 'split-button', name: 'MDBDropdown', docs: s('components--dropdowns'), notes: 'A split button example on the dropdowns story, built from a button next to a dropdown toggle.' },
		{ id: 'list', name: 'MDBListGroup', docs: s('components--list-groups'), notes: 'Items take colors, active and disabled states, and can be links.' },
		{ id: 'badge', name: 'MDBBadge', docs: s('components--badges'), notes: 'Contextual colors and pill shape.' },
		{ id: 'spinner', name: 'MDBSpinner', docs: s('components--spinner'), notes: 'Border and growing styles, in colors and sizes.' },
		{ id: 'pagination', name: 'MDBPagination', docs: s('components--pagination'), notes: 'Markup parts (MDBPageItem, MDBPageNav) you fill yourself; it does not track the current page.' },
		{ id: 'progress', name: 'MDBProgress', docs: s('components--progress'), notes: 'Labels, colors, striped and animated bars, and several bars stacked.' },
		{ id: 'navigation-menu', name: 'MDBNavbar', docs: s('navigation--navbar'), notes: `Top bar with MDBNavbarBrand, MDBNavbarNav and a toggler that opens an MDBCollapse on small screens. MDBNav (link lists styled as tabs or pills, with no tab panels) has its own story: ${s('navigation--navs')}` },
		{ id: 'footer', name: 'MDBFooter', docs: s('navigation--footer') },
		{ id: 'breadcrumb', name: 'MDBBreadcrumb', docs: s('navigation--breadcrumb') },
		{ id: 'input', name: 'MDBInput', docs: s('forms--basic-examples'), notes: `One component for many input types, with a floating label, icon and validation state props. MDBInputGroup adds prepend/append addons: ${s('forms--input-groups')}` },
		{ id: 'textarea', name: 'MDBInput', docs: s('forms--input-groups'), notes: 'type="textarea" on MDBInput. The docs only show it through MDBInputGroup, which passes the type on to MDBInput.' },
		{ id: 'table', name: 'MDBTable', docs: s('tables--basic-examples'), notes: `Striped, bordered, hoverable and small styles, with head and body parts that can take data as props. MDBDataTable (${s('tables--data-tables')}) adds column sorting, fuzzy search and rows-per-page pagination.` },
		{ id: 'dialog', name: 'MDBModal', docs: s('modals--basic-examples'), notes: 'With MDBModalHeader, MDBModalBody and MDBModalFooter; sizes, side and frame positions, fluid width and an option without backdrop.' },
		{ id: 'image', name: 'MDBView / MDBMask', docs: s('css--masks'), notes: 'MDBView wraps an image (or takes one as a full-height background via src) with zoom and hover options; MDBMask lays a pattern or color overlay on top.' },
		{ id: 'icon', name: 'MDBIcon', docs: s('content--icons-list'), notes: 'Renders Font Awesome 5 classes; the icon font itself is not bundled.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo has no CONTRIBUTING, AGENTS.md, CLAUDE.md or .github folder, the README does not mention AI tools, the Storybook has no llms.txt (404) and there is no MCP server. The llms.txt at the root of saurav.tech belongs to the author\'s personal site and does not cover the library. The MIT LICENSE adds no AI terms.',
		sources: [
			readme,
			`${repo}/blob/master/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '1.0.12', date: '2020-12-11' },
		lastCommit: '2022-05-04',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/mdbsvelte', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only. mdbsvelte 1.0.12 declares no peerDependencies; the repo builds against svelte ^3.24.0. Components use export let, slots, $: statements, $$props and on: events, and almost every component imports current_component from svelte/internal to forward DOM events, which ties it to Svelte 3 internals. Listed for reference and migration planning; we found no Svelte 4 or 5 work upstream.',
		'No CSS is bundled. The docs have you add Bootstrap 4, the MDB stylesheet, Font Awesome and Roboto from CDNs; the components only output their class names. Importing the package also initialises node-waves (a regular dependency) for the ripple effect.',
		'For server-side rendering (Sapper) the README says to import each component from its source file (e.g. mdbsvelte/src/MDBBtn.svelte) instead of the bundled entry.',
		'The package.json repository and the README badges point to github.com/SauravKanchan/mdbsvelte, which no longer resolves; the code now lives under the mdbootstrap organisation. The repo package.json reads 1.0.10, while npm has 1.0.12 with the same src folder.',
		'The Charts stories document svelte-chartjs, a separate package by the same author, so charts are not listed as part of this library. Jumbotron (components--jumbotron) has a story but no matching canonical component. MDBCollapse is exported but only shown inside the Navbar story. There is also an Admin Dashboard example page.',
		'No TypeScript definitions ship with the package.',
	],
})
