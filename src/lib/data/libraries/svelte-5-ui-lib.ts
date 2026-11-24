import { defineLibrary } from '../schema'

// The docs site (svelte-5-ui-lib.codewithshin.com) now answers every path with a 308 redirect to
// flowbite-svelte.com (vercel.json in the repo, checked 2026-11-24), so no live docs page exists.
// Component links point at the docs page sources in the repo instead: src/routes/<section>/<slug>/
// +page.svelte on main, which served /<section>/<slug> on the old site. Every path below exists in
// a clone of main (ee2fb30, 2025-08-14) and was fetched through raw.githubusercontent.com (200;
// a made-up slug returns 404).
const repo = 'https://github.com/shinokada/svelte-5-ui-lib'
const page = (path: string) => `${repo}/blob/main/src/routes/${path}/+page.svelte`
const c = (slug: string) => page(`components/${slug}`)
const f = (slug: string) => page(`forms/${slug}`)
const t = (slug: string) => page(`typography/${slug}`)

export default defineLibrary({
	id: 'svelte-5-ui-lib',
	name: 'Svelte 5 UI Lib',
	description:
		'Tailwind CSS components in the Flowbite style, built for Svelte 5 runes from the first release. The project was later merged into Flowbite Svelte.',
	docs: `${repo}#readme`,
	repository: repo,
	packages: ['svelte-5-ui-lib'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/License`,
		notes: 'The license file is named License and its copyright line names Flowbite Svelte (created by Shinichi Okada).',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '0.12.6',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^4.0.15',
			required: true,
			notes: 'Not a peer. The install steps have you pick Tailwind when creating the app with sv create, then add an @source line for the package and primary/secondary color tokens to app.css in Tailwind 4 syntax. The range is the library\'s own dev dependency at 0.12.6.',
			source: `${repo}/blob/main/src/routes/+page.svelte`,
		},
	],
	features: ['typescript', 'theming', 'dark-mode', 'forms', 'charts', 'runes'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: 'Built from Accordion and AccordionItem.' },
		{ id: 'alert', name: 'Alert', docs: c('alert'), notes: `A separate Banner component for page-wide notices has its own page: ${c('banner')}` },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar') },
		{ id: 'badge', name: 'Badge', docs: c('badge'), notes: `The Indicator component (status dots and counters) has its own page: ${c('indicators')}` },
		{ id: 'bottom-navigation', name: 'BottomNav', docs: c('bottom-navigation') },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: c('breadcrumb') },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'GradientButton is a second button component.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button-group') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'theme-switcher', name: 'Darkmode', docs: c('darkmode'), notes: 'A button that toggles the dark class.' },
		{ id: 'drawer', name: 'Drawer', docs: c('drawer'), notes: 'Drawerhead adds a header with a close button.' },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('dropdown'), notes: 'Assembled from Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter and DropdownDivider.' },
		{ id: 'footer', name: 'Footer', docs: c('footer') },
		{ id: 'kbd', name: 'Kbd', docs: c('kbd') },
		{ id: 'list', name: 'Listgroup', docs: c('list-group'), notes: `Plain styled lists (List, Li, DescriptionList) are on the typography list page: ${t('list')}` },
		{ id: 'navigation-menu', name: 'Navbar', docs: c('navbar'), notes: `With NavBrand, NavUl, NavLi and NavHamburger. A MegaMenu component has its own page: ${c('mega-menu')}` },
		{ id: 'dialog', name: 'Modal', docs: c('modal') },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'popover', name: 'Popover', docs: c('popover') },
		{ id: 'progress', name: 'Progressbar', docs: c('progress') },
		{ id: 'rating', name: 'Rating', docs: c('rating'), notes: 'Display-oriented; the page also covers AdvancedRating, ScoreRating, Review and RatingComment.' },
		{ id: 'sidebar', name: 'Sidebar', docs: c('sidebar') },
		{ id: 'skeleton', name: 'Skeleton', docs: c('skeleton'), notes: 'Ready-made placeholders for cards, images, lists, testimonials, text, video and widgets.' },
		{ id: 'spinner', name: 'Spinner', docs: c('spinner') },
		{ id: 'table', name: 'Table', docs: c('table'), notes: 'Table parts plus TableSearch, which adds a search field above the table.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'With TabItem.' },
		{ id: 'timeline', name: 'Timeline', docs: c('timeline'), notes: 'The page also covers Activity and Group variants.' },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: 'A component you place yourself, not a function-call toaster.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
		{ id: 'checkbox', name: 'Checkbox', docs: f('checkbox'), notes: 'CheckboxButton (checkbox styled as a button) is on the same page.' },
		{ id: 'file-upload', name: 'Fileupload', docs: f('file-input'), notes: 'Dropzone is documented on the same page.' },
		{ id: 'input', name: 'Input', docs: f('input-field'), notes: `InputAddon is on the same page. FloatingLabelInput has its own page: ${f('floating-label')}` },
		{ id: 'label', name: 'Label', docs: f('label'), notes: 'Helper (hint text under a field) is used across the form pages.' },
		{ id: 'radio-group', name: 'Radio', docs: f('radio'), notes: 'Single radio inputs you group yourself; RadioButton is a button-styled variant.' },
		{ id: 'slider', name: 'Range', docs: f('range') },
		{ id: 'search', name: 'Search', docs: f('search-input') },
		{ id: 'select', name: 'Select', docs: f('select') },
		{ id: 'textarea', name: 'Textarea', docs: f('textarea'), notes: 'Its examples build comment and editor boxes with the Toolbar components.' },
		{ id: 'toolbar', name: 'Toolbar', docs: f('textarea'), notes: 'No page of its own: Toolbar, ToolbarGroup and ToolbarButton appear only in the textarea examples.' },
		{ id: 'switch', name: 'Toggle', docs: f('toggle') },
		{ id: 'typography', name: 'Heading', docs: t('heading'), notes: 'The typography section also has P, Span, Mark, Secondary and Blockquote pages or examples.' },
		{ id: 'separator', name: 'Hr', docs: t('hr') },
		{ id: 'image', name: 'Img', docs: t('image'), notes: 'Also EnhancedImg for @sveltejs/enhanced-img. A Gallery component (image grid) has its own page.' },
		{ id: 'link', name: 'A', docs: t('link') },
		{ id: 'grid', name: 'Layout', docs: t('layout'), notes: 'A wrapper div with a one-column grid that switches to two columns from the sm breakpoint.' },
		{ id: 'chart', name: 'Chart', docs: page('plugins/chart'), notes: 'Wraps ApexCharts, which is a regular dependency of the package.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at main (README, License, package.json, no CONTRIBUTING file, no AGENTS.md or CLAUDE.md, no .github folder) and found no mention of AI tools or an MCP server. The docs site now redirects to flowbite-svelte.com, so an llms.txt on the old site could not be checked. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/License`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.12.6', date: '2025-03-31' },
		lastCommit: '2025-08-14',
		archived: true,
		deprecated: {
			summary: 'npm marks the package as no longer supported, and the README says the project has been merged into Flowbite Svelte.',
			source: 'https://github.com/shinokada/svelte-5-ui-lib/blob/main/README.md',
		},
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-5-ui-lib', 'https://github.com/shinokada/svelte-5-ui-lib'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'npm marks every version deprecated with a generic "no longer supported" message. The README title says the project is now merged with Flowbite Svelte, and the old docs domain redirects to flowbite-svelte.com.',
		'Its docs site is gone, so component links on this page go to the docs page sources on GitHub. Read them as an archive of how the components were documented, not as live docs.',
		'Written for Svelte 5 from the start: components use $props(), snippets and callback props. Open/close state for modals, drawers, dropdowns and the sidebar is usually driven by a uiHelpers() object you create in your script.',
		'Tailwind 4 came in 0.12.3; earlier 0.x releases were set up with a Tailwind 3 config file. Global theming is mainly the primary/secondary color tokens in app.css; an exported Theme component puts class overrides in context, but in the 0.12.6 source only Breadcrumb and Hr read them.',
		'The docs app.css example also adds @source lines for flowbite-svelte-icons and svelte-animated-icons, which only matter if you install those icon packages.',
		'The sidebar listed Carousel and Speed dial pages, but both are empty placeholders and the package has no such components.',
		'Documented components with no canonical id here: Banner, Indicator, MegaMenu, DeviceMockup, Gallery, Video, Blockquote and GradientButton.',
	],
})
