import { defineLibrary } from '../schema'

// Docs site source lives in a separate repo (konstaui/konstaui.com, Next.js static export):
// `src/pages/svelte/<name>.mdx` becomes https://konstaui.com/svelte/<name>.
const d = 'https://konstaui.com/svelte'

export default defineLibrary({
	id: 'konsta',
	name: 'Konsta UI',
	description:
		'Mobile-first Tailwind components for Svelte, React and Vue that mimic native iOS and Material Design, aimed at PWAs and hybrid apps.',
	docs: 'https://konstaui.com/svelte',
	repository: 'https://github.com/konstaui/konsta',
	packages: ['konsta'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/konstaui/konsta/blob/master/LICENSE',
		notes: 'The docs site is a separate repository (konstaui/konstaui.com).',
	},
	svelte: {
		supported: [5],
		runes: true,
	},
	version: '5.5.0',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '4',
			required: true,
			notes: 'The install docs assume a project already set up with Tailwind and import konsta/svelte/theme.css after it; the 5.0.0 changelog moved Konsta to the Tailwind v4 API. Add Tailwind the way its own guide describes for your setup.',
			source: 'https://konstaui.com/svelte/installation',
		},
	],
	features: ['typescript', 'theming', 'dark-mode', 'runes'],
	components: [
		{ id: 'button', name: 'Button', docs: `${d}/button`, notes: 'Renders an anchor instead of a button when href or component="a" is set.' },
		{ id: 'toggle-group', name: 'Segmented', docs: `${d}/segmented`, notes: 'Segmented control built from Segmented and SegmentedButton.' },
		{
			id: 'dropdown-menu',
			name: 'Actions',
			docs: `${d}/action-sheet`,
			notes: 'Action Sheet: a slide-up pane listing actions, the mobile stand-in for an action menu; it is not anchored to a trigger. Popover can also hold a menu list.',
		},
		{ id: 'floating-action-button', name: 'Fab', docs: `${d}/fab` },
		{
			id: 'input',
			name: 'ListInput',
			docs: `${d}/list-input`,
			notes: 'A list item wrapping a native input; the type prop covers text, email, number, date and other native types, plus textarea and select.',
		},
		{ id: 'textarea', name: 'ListInput', docs: `${d}/list-input`, notes: 'type="textarea".' },
		{ id: 'select', name: 'ListInput', docs: `${d}/list-input`, notes: 'type="select" (native select).' },
		{ id: 'checkbox', name: 'Checkbox', docs: `${d}/checkbox` },
		{ id: 'radio-group', name: 'Radio', docs: `${d}/radio`, notes: 'Single Radio component; group it yourself.' },
		{ id: 'switch', name: 'Toggle', docs: `${d}/toggle` },
		{ id: 'slider', name: 'Range', docs: `${d}/range`, notes: 'Range slider.' },
		{ id: 'number-input', name: 'Stepper', docs: `${d}/stepper`, notes: 'Plus/minus stepper with an optional editable value.' },
		{ id: 'search', name: 'Searchbar', docs: `${d}/searchbar` },
		{ id: 'dialog', name: 'Popup', docs: `${d}/popup`, notes: 'Popup is a full-screen (or large) modal for arbitrary content; Sheet is a bottom sheet modal.' },
		{ id: 'alert-dialog', name: 'Dialog', docs: `${d}/dialog`, notes: 'Small modal with title, text and DialogButton actions, for alerts and confirmations.' },
		{ id: 'drawer', name: 'Panel', docs: `${d}/panel`, notes: 'Side panel sliding in from the left or right. Sheet is the bottom-sheet counterpart.' },
		{ id: 'popover', name: 'Popover', docs: `${d}/popover` },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: `${d}/breadcrumbs`, notes: 'Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparator and BreadcrumbsCollapsed.' },
		{ id: 'navigation-menu', name: 'Navbar', docs: `${d}/navbar`, notes: 'Top app bar with title, subnavbar and NavbarBackLink; not a desktop-style menu.' },
		{ id: 'bottom-navigation', name: 'Tabbar', docs: `${d}/tabbar`, notes: 'Tabbar with TabbarLink items, usually placed in the Toolbar position.' },
		{ id: 'link', name: 'Link', docs: `${d}/link` },
		{ id: 'card', name: 'Card', docs: `${d}/card` },
		{ id: 'toolbar', name: 'Toolbar', docs: `${d}/toolbar`, notes: 'Top or bottom toolbar; ToolbarPane wraps content for the iOS glass look.' },
		{ id: 'toast', name: 'Toast', docs: `${d}/toast`, notes: 'Notification is a separate component styled like a system push notification.' },
		{ id: 'progress', name: 'Progressbar', docs: `${d}/progressbar` },
		{ id: 'spinner', name: 'Preloader', docs: `${d}/preloader` },
		{ id: 'badge', name: 'Badge', docs: `${d}/badge`, notes: 'Chip is a separate component for larger tag-like labels.' },
		{ id: 'table', name: 'Table', docs: `${d}/data-table`, notes: 'Data Table built from Table, TableHead, TableBody, TableRow and TableCell.' },
		{
			id: 'list',
			name: 'List',
			docs: `${d}/list`,
			notes: 'List View: List, ListGroup, ListItem and ListButton. MenuList is a list variant that highlights the active item.',
		},
		{ id: 'icon', name: 'Icon', docs: `${d}/icon`, notes: 'Wrapper that shows a different icon per theme (ios / material snippets).' },
		{
			id: 'locale-provider',
			name: 'KonstaProvider',
			docs: `${d}/konsta-provider`,
			notes: 'Sets the theme (ios / material), dark-mode variants and touch effects for descendants when the App component is not used.',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'Neither the library repo nor the docs-site repo contains an llms.txt, AGENTS.md, CLAUDE.md or MCP server, and README, CONTRIBUTING and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/konstaui/konsta/blob/master/CONTRIBUTING.md',
			'https://github.com/konstaui/konsta/blob/master/LICENSE',
			'https://github.com/konstaui/konstaui.com',
		],
	},
	lastVerified: '2026-11-04',
	notes: [
		'The npm package declares no svelte peer dependency. Svelte 5 support comes from the repo: devDependency svelte ^5.37.1 in package.json and the 5.0.0 CHANGELOG entry saying all Svelte components moved to the runes API (snippets instead of slots).',
		'One package for three frameworks; Svelte components are imported from konsta/svelte and the theme CSS from konsta/svelte/theme.css.',
		'Theme colors are set in a Tailwind @theme declaration with --color-brand- variables; extra brand colors are applied with a k-color-brand-<name> class rather than a color prop.',
		'Each component renders in an iOS or a Material look depending on the theme set on App / KonstaProvider.',
		'Layout and app-shell components (App, Page, Block, Messages, Messagebar, Glass) have no canonical id here.',
	],
})
