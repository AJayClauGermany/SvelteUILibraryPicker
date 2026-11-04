import { defineLibrary } from '../schema'

const base = 'https://flowbite-svelte.com/docs'
const c = `${base}/components`
const f = `${base}/forms`
const t = `${base}/typography`
const x = `${base}/extend`
const u = `${base}/utilities`
const i = 'https://flowbite-svelte.com/icons'

export default defineLibrary({
	id: 'flowbite-svelte',
	name: 'Flowbite Svelte',
	description:
		'A large, Svelte 5 port of the Flowbite design language that ships ready-styled Tailwind CSS components, from basic form controls to app-level pieces like sidebars, kanban boards and command palettes.',
	docs: 'https://flowbite-svelte.com/',
	repository: 'https://github.com/themesberg/flowbite-svelte',
	packages: ['flowbite-svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.40.0',
		runes: true,
	},
	version: '1.33.1',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^4.1.4',
			required: true,
			notes: 'Install docs add it with `npx sv add tailwindcss`, then import it in your main CSS file.',
			source: 'https://github.com/themesberg/flowbite-svelte/blob/main/package.json',
		},
		{
			package: 'flowbite',
			kind: 'peer',
			required: true,
			notes: 'Install docs have you add it yourself and load flowbite/plugin as a Tailwind plugin in your main CSS file.',
			source: 'https://flowbite-svelte.com/docs/pages/quickstart',
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'forms'],
	components: [
		// Components
		{ id: 'accordion', name: 'Accordion', docs: `${c}/accordion` },
		{
			id: 'alert',
			name: 'Alert',
			docs: `${c}/alert`,
			notes: 'A separate Banner component handles page-edge marketing messages.',
		},
		{ id: 'avatar', name: 'Avatar', docs: `${c}/avatar` },
		{
			id: 'badge',
			name: 'Badge',
			docs: `${c}/badge`,
			notes: 'A separate Indicator component shows dot/count markers positioned on other elements.',
		},
		{ id: 'bottom-navigation', name: 'Bottom Navigation', docs: `${c}/bottom-navigation` },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: `${c}/breadcrumb` },
		{ id: 'button-group', name: 'Button group', docs: `${c}/button-group` },
		{ id: 'button', name: 'Button', docs: `${c}/buttons`, notes: 'GradientButton variant also exported.' },
		{ id: 'card', name: 'Card', docs: `${c}/card` },
		{
			id: 'carousel',
			name: 'Carousel',
			docs: `${c}/carousel`,
			notes: 'A masonry-style Gallery component is documented separately.',
		},
		{ id: 'clipboard', name: 'Clipboard', docs: `${c}/clipboard` },
		{ id: 'theme-switcher', name: 'DarkMode', docs: `${c}/darkmode` },
		{ id: 'date-picker', name: 'Datepicker', docs: `${c}/datepicker` },
		{
			id: 'date-range-picker',
			name: 'Datepicker (range)',
			docs: `${c}/datepicker`,
			notes: 'Range selection is a mode of the same Datepicker component.',
		},
		{
			id: 'calendar',
			name: 'Datepicker (inline)',
			docs: `${c}/datepicker`,
			notes: 'Inline mode of the Datepicker; there is no standalone calendar component.',
		},
		{ id: 'drawer', name: 'Drawer', docs: `${c}/drawer` },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: `${c}/dropdown` },
		{ id: 'footer', name: 'Footer', docs: `${c}/footer` },
		{
			id: 'form',
			name: 'Forms',
			docs: `${c}/forms`,
			notes: 'Overview page combining the form controls, helper text and validation styles.',
		},
		{ id: 'kbd', name: 'Kbd', docs: `${c}/kbd` },
		{
			id: 'list',
			name: 'Listgroup',
			docs: `${c}/list-group`,
			notes: 'A typography List component for plain ul/ol styling also exists.',
		},
		{ id: 'dialog', name: 'Modal', docs: `${c}/modal`, notes: 'A lower-level Dialog component is also exported.' },
		{
			id: 'navigation-menu',
			name: 'Navbar',
			docs: `${c}/navbar`,
			notes: 'A full-width MegaMenu dropdown is documented separately.',
		},
		{ id: 'pagination', name: 'Pagination', docs: `${c}/pagination` },
		{ id: 'popover', name: 'Popover', docs: `${c}/popover` },
		{
			id: 'progress',
			name: 'Progressbar',
			docs: `${c}/progress`,
			notes: 'A circular Progressradial variant is also available.',
		},
		{ id: 'rating', name: 'Rating', docs: `${c}/rating` },
		{
			id: 'sidebar',
			name: 'Sidebar',
			docs: `${c}/sidebar`,
			notes: 'The mobile-style Bottom Navigation bar is mapped separately.',
		},
		{ id: 'skeleton', name: 'Skeleton', docs: `${c}/skeleton`, notes: 'Includes several preset placeholders (card, list, image...).' },
		{ id: 'floating-action-button', name: 'SpeedDial', docs: `${c}/speed-dial` },
		{ id: 'spinner', name: 'Spinner', docs: `${c}/spinner` },
		{
			id: 'stepper',
			name: 'Stepper',
			docs: `${c}/stepper`,
			notes: 'A StepIndicator component (Extend section) covers a similar pattern; Timeline is mapped separately.',
		},
		{
			id: 'table',
			name: 'Table',
			docs: `${c}/table`,
			notes: 'Includes a TableSearch helper; a DataTables plugin ships as a separate package.',
		},
		{ id: 'tabs', name: 'Tabs', docs: `${c}/tabs` },
		{
			id: 'timeline',
			name: 'Timeline',
			docs: `${c}/timeline`,
			notes: 'Vertical, horizontal, activity-log and grouped variants of a chronological event list.',
		},
		{ id: 'toast', name: 'Toast', docs: `${c}/toast` },
		{ id: 'tooltip', name: 'Tooltip', docs: `${c}/tooltip` },

		// Forms
		{ id: 'checkbox', name: 'Checkbox', docs: `${f}/checkbox` },
		{
			id: 'file-upload',
			name: 'Fileupload',
			docs: `${f}/file-input`,
			notes: 'A Dropzone component is documented on the same page.',
		},
		{
			id: 'input',
			name: 'Input',
			docs: `${f}/input-field`,
			notes: 'Floating Label and Phone input variants have their own pages; Search is mapped separately.',
		},
		{
			id: 'combobox',
			name: 'Input (combobox)',
			docs: `${f}/input-field`,
			notes: 'Combobox mode of the Input component, enabled by passing a list of suggestions via the data prop.',
		},
		{ id: 'number-input', name: 'Number Input', docs: `${f}/number-input` },
		{ id: 'radio-group', name: 'Radio', docs: `${f}/radio` },
		{ id: 'search', name: 'Search', docs: `${f}/search-input`, notes: 'Includes clearable, dropdown and voice-search examples.' },
		{ id: 'slider', name: 'Range', docs: `${f}/range` },
		{ id: 'select', name: 'Select', docs: `${f}/select`, notes: 'MultiSelect is also available.' },
		{ id: 'textarea', name: 'Textarea', docs: `${f}/textarea` },
		{
			id: 'time-picker',
			name: 'Timepicker',
			docs: `${f}/timepicker`,
			notes: 'Also documents a start/end time range mode built from the same select-based picker.',
		},
		{ id: 'switch', name: 'Toggle', docs: `${f}/toggle` },

		// Typography
		{
			id: 'typography',
			name: 'Heading',
			docs: `${t}/heading`,
			notes: 'One of several typography components (Heading, P, Text, Blockquote, List) documented on separate pages.',
		},
		{ id: 'separator', name: 'Hr', docs: `${t}/hr` },
		{ id: 'image', name: 'Img', docs: `${t}/image` },
		{ id: 'link', name: 'A', docs: `${t}/link` },

		// Extend
		{
			id: 'toggle-group',
			name: 'ButtonToggleGroup',
			docs: `${x}/button-toggle`,
			notes: 'Supports single or multiple selection; individual ButtonToggle buttons are also exported.',
		},
		{ id: 'command-palette', name: 'CommandPalette', docs: `${x}/command-palette` },
		{
			id: 'table-of-contents',
			name: 'Scroll Spy',
			docs: `${x}/scroll-spy`,
			notes: 'In-page navigation that highlights the section currently in view; links are supplied by you.',
		},
		{ id: 'resizable', name: 'SplitPane', docs: `${x}/split-pane` },
		{ id: 'tags-input', name: 'Tags', docs: `${x}/tags` },
		{ id: 'tour', name: 'Tour', docs: `${x}/tour` },
		{ id: 'virtual-list', name: 'Virtual List', docs: `${x}/virtual-list`, notes: 'Supports variable item heights and scroll-to-index.' },

		// Utilities
		{ id: 'label', name: 'Label', docs: `${u}/label` },
		{ id: 'toolbar', name: 'Toolbar', docs: `${u}/toolbar` },

		// Plugins
		{
			id: 'chart',
			name: 'Charts',
			docs: `${base}/plugins/charts`,
			notes: 'ApexCharts-based; installed separately as @flowbite-svelte-plugins/chart.',
		},
		{
			id: 'icon',
			name: 'Flowbite Svelte Icons',
			docs: `${i}/quickstart`,
			notes: 'Documented on the same site but installed separately as flowbite-svelte-icons.',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The project publishes an llms.txt index plus per-page Markdown for LLMs, documents its own local (stdio) MCP server for AI coding assistants, and keeps AGENTS.md / CLAUDE.md / GEMINI.md files in the repo. No restrictions on AI use were found.',
		sources: [
			'https://flowbite-svelte.com/llms.txt',
			'https://flowbite-svelte.com/docs/mcp/overview',
			'https://flowbite-svelte.com/docs/mcp/local-setup',
			'https://github.com/themesberg/flowbite-svelte/blob/main/AGENTS.md',
			'https://github.com/shinokada/flowbite-svelte-mcp',
		],
		llmsTxt: 'https://flowbite-svelte.com/llms.txt',
	},
	lastVerified: '2026-11-04',
	notes: [
		'Role colors are limited to primary and secondary (set through Tailwind theme variables); status colors are picked by Tailwind palette name, e.g. red or green.',
		'A 2.0 pre-release is published under the npm "next" tag; facts here describe the 1.x "latest" release.',
		'Charts, DataTables and WYSIWYG are documented as plugins but ship in separate @flowbite-svelte-plugins packages; icons are also a separate package.',
		'Not mapped to a canonical id: Banner, Device Mockups, Gallery, Indicator, Mega Menu, Video, Floating Label, Phone Input, Clipboard Manager, Kanban Board, Virtual Masonry, Close Button, Progressradial, StepIndicator, DataTables, WYSIWYG.',
	],
})
