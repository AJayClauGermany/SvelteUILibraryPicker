import { defineLibrary } from '../schema'

// The showcase/docs site is the SvelteKit app in the repo itself: each page is src/routes/<slug>/
// and is served at https://stwui.vercel.app/<slug>. Slugs come from the docs navigation
// (src/docs/components/navigation/Navigation.svelte); every page below was fetched live on
// 2026-11-24 (200), and a made-up slug returns 404. The repo's main branch only changed the
// README after the 0.21.2-next release commit (d29f1bb), so blob/main matches that release.
const site = 'https://stwui.vercel.app'
const c = (slug: string) => `${site}/${slug}`
const repo = 'https://github.com/N00nDay/stwui'

export default defineLibrary({
	id: 'stwui',
	name: 'STWUI',
	description:
		'A Svelte 4 component library styled through its own Tailwind CSS plugin, with props and named-slot parts instead of utility classes, light and dark themes, and helper actions.',
	docs: `${site}/`,
	repository: repo,
	packages: ['stwui'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [4],
		peerRange: '^4.2.8',
		runes: false,
	},
	version: '0.21.2-next',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^3',
			required: true,
			notes: 'Installed through svelte-add in the guide, then configured in tailwind.config.cjs with stwui/plugin and a content glob for node_modules/stwui. The plugin is a Tailwind v3-style JS plugin; the repo itself builds against tailwindcss ^3.4.1.',
			source: `${repo}/blob/main/package.json`,
		},
		{
			package: '@tailwindcss/forms',
			kind: 'tailwind',
			required: true,
			notes: 'Listed in the plugins array of the documented tailwind.config.cjs, next to stwui/plugin.',
			source: c('installation'),
		},
		{
			package: '@sveltejs/kit',
			kind: 'framework',
			range: '^2.3.2',
			required: true,
			notes: 'Declared as a peer dependency, and the install guide starts from a SvelteKit project. The published component code does not import from SvelteKit itself.',
			source: `${repo}/blob/main/package.json`,
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'forms'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'alert', name: 'Alert', docs: c('alert') },
		{ id: 'combobox', name: 'Autocomplete', docs: c('autocomplete') },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: `Stacked avatars are the separate AvatarGroup component: ${c('avatar-group')}` },
		{ id: 'badge', name: 'Badge', docs: c('badge'), notes: `Chip is a separate, closable label with an optional avatar: ${c('chip')}` },
		{ id: 'breadcrumb', name: 'Breadcrumbs', docs: c('breadcrumbs') },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Has a loading state and a fab size.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button-group') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'carousel', name: 'Carousel', docs: c('carousel') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: 'Exported as CheckboxGroup.' },
		{ id: 'date-picker', name: 'DatePicker', docs: c('datepicker'), notes: 'Built on dayjs; a showTime option adds time selection to the same popup. There is no standalone time picker.' },
		{ id: 'separator', name: 'Divider', docs: c('divider') },
		{ id: 'drawer', name: 'Drawer', docs: c('drawer') },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('dropdown') },
		{ id: 'empty-state', name: 'Empty', docs: c('empty') },
		{ id: 'file-upload', name: 'FilePicker', docs: c('file-picker'), notes: `Drop zone and file input. Upload status lists are the separate FilePreview component: ${c('file-preview')}` },
		{ id: 'grid', name: 'Row / Col', docs: c('grid'), notes: 'The page is live but not linked from the docs navigation.' },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders the inner markup of an SVG string you pass in its data prop; the package also exports a small set of its own SVG icon strings (stwui/icons).' },
		{ id: 'input', name: 'Input', docs: c('input'), notes: 'Text, email and password types, with an optional clear button (allowClear).' },
		{ id: 'password-input', name: 'Input', docs: c('input'), notes: 'Input with type password and the showPasswordToggle prop.' },
		{ id: 'number-input', name: 'InputNumber', docs: c('input-number'), notes: `A separate Currency input formats money values: ${c('currency')}` },
		{ id: 'list', name: 'List', docs: c('list') },
		{ id: 'sidebar', name: 'Menu', docs: c('menu'), notes: 'Vertical navigation menu with groups, an extra slot per item (used for badges in the docs) and a collapsed mode. The Layout component has a separate sidebar slot for page shells.' },
		{ id: 'dialog', name: 'Modal', docs: c('modal') },
		{ id: 'toast', name: 'Notification', docs: c('notification'), notes: 'A shadowed notice card with info/warn/error/success types and leading/extra slots. There is no toast queue, store, positioning or auto-dismiss; you place and remove it yourself.' },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination'), notes: 'Marked beta in the docs.' },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: 'Linear or radial, with an indeterminate mode.' },
		{ id: 'radio-group', name: 'Radio', docs: c('radio'), notes: 'Exported as RadioGroup.' },
		{ id: 'rating', name: 'Rating', docs: c('rating') },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'Single or multiple selection.' },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'stepper', name: 'Steps', docs: c('steps') },
		{ id: 'table', name: 'Table', docs: c('table') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'textarea', name: 'TextArea', docs: c('text-area') },
		{ id: 'timeline', name: 'Timeline', docs: c('timeline'), notes: `Marked beta in the docs. Feed is a related activity-feed component: ${c('feed')}` },
		{ id: 'switch', name: 'Toggle', docs: c('toggle') },
		{ id: 'tooltip', name: 'tooltip', docs: c('tooltip'), notes: 'A Svelte action (use:tooltip) built on tippy.js, not a component.' },
		{ id: 'clipboard', name: 'clipboard', docs: c('clipboard'), notes: `A Svelte action; a copyToClipboard helper function is also documented: ${c('copy-to-clipboard')}` },
		{ id: 'typography', name: 'Typography', docs: c('typography'), notes: 'Styles for plain HTML text elements from the Tailwind plugin, not components.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the README, .github/CONTRIBUTING.md and LICENSE, and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/.github/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.21.2-next', date: '2024-01-12' },
		lastCommit: '2026-08-04',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/stwui', 'https://github.com/N00nDay/stwui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 4 only (peer svelte ^4.2.8); components use export let, slots, $: statements, $$props and forwarded on: events. Listed for reference and migration planning.',
		'The README says the project is no longer under active development and has not been moved to Svelte 5, though it stays usable for Svelte 4 projects and issues and pull requests are still accepted. npm does not mark it deprecated.',
		'Almost every published version, including the one on the npm latest tag, carries a -next prerelease suffix. Releases up to 0.13.4-next declared a Svelte 3 peer range; 0.13.5-next moved to Svelte 4.',
		'Styling comes from stwui/plugin, a Tailwind plugin that adds base styles, component classes and theme colors (tokens such as primary, danger, info, success, warn, error, surface and border). Light and dark themes are selected with a data-theme attribute, and custom themes are defined under the stwui key in tailwind.config.cjs.',
		'The README calls the site a showcase and says fuller documentation was still to come; most pages show examples with props, slots and class tables.',
		'Also documented: a clickOutside action and helpers such as formatDate, formatNumber, formatFileSize and encodeSearchParams. LightBox and Portal are exported without their own pages; Post can open its images in the lightbox.',
		'Documented components with no canonical id here: AvatarGroup, Chip, Currency, Feed, FilePreview, Layout, Media, Post, Statistic and Swap.',
	],
})
