import { defineLibrary } from '../schema'

// Docs are a prerendered SvelteKit site whose source lives in a separate repo
// (github.com/kahi-framework/kahi-ui.nbn.dev, pages under content/docs/<section>/<slug>.md).
// Pages are /docs/<section>/<slug>, with section names such as interactables, widgets and
// overlays. Every page and anchor below was fetched live on 2026-11-24 (200), and a made-up slug
// returns 404. The site footer reads v0.6.2; npm's latest is 0.6.4.
const site = 'https://kahi-ui.nbn.dev'
const d = (path: string, anchor?: string) => `${site}/docs/${path}${anchor ? `#${anchor}` : ''}`
const repo = 'https://github.com/novacbn/kahi-ui'

export default defineLibrary({
	id: 'kahi-ui',
	name: 'Kahi UI',
	description:
		'A Svelte 3 framework that ships a prebuilt CSS stylesheet and theme file, with components that lean on plain HTML and CSS first and add JavaScript behaviour on top.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@kahi-ui/framework'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '0.6.4',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'i18n', 'forms', 'data-grid'],
	components: [
		{ id: 'button', name: 'Button', docs: d('interactables/button'), notes: 'Clear, outline and subtle variations besides the default; the is prop renders it as a link, label or form button.' },
		{ id: 'button-group', name: 'Group', docs: d('layouts/group'), notes: 'A layout primitive that joins sibling controls and removes their inner corner radii.' },
		{ id: 'input', name: 'TextInput', docs: d('interactables/textinput'), notes: 'Text, email, password, search and url types, plus an input-masking option.' },
		{ id: 'textarea', name: 'TextInput', docs: d('interactables/textinput', 'textarea'), notes: 'A TextInput mode (is="textarea"), optionally resizable.' },
		{ id: 'number-input', name: 'NumberInput', docs: d('interactables/numberinput') },
		{ id: 'checkbox', name: 'Check', docs: d('interactables/check') },
		{ id: 'radio-group', name: 'Radio', docs: d('interactables/radio'), notes: 'Single radios, grouped with Form.Group.' },
		{ id: 'switch', name: 'Switch', docs: d('interactables/switch') },
		{ id: 'file-upload', name: 'FileDropInput', docs: d('interactables/filedropinput'), notes: 'Click-to-browse and drag-and-drop file input.' },
		{ id: 'form', name: 'Form', docs: d('interactables/form'), notes: 'Parts for controls, groups, fieldsets, legends and help text. Layout only; no validation logic is documented.' },
		{ id: 'label', name: 'Form.Label', docs: d('interactables/form', 'label') },
		{ id: 'select', name: 'DataSelect', docs: d('widgets/dataselect'), notes: 'Options in a floating box, with multiple selection, a maximum, and a search filter that narrows the list; works inside plain HTML forms.' },
		{ id: 'calendar', name: 'DayPicker', docs: d('widgets/daypicker'), notes: 'An inline grid of days with single or multiple selection. MonthPicker and YearPicker are the same idea for months and years, and DayStepper, MonthStepper and YearStepper step a value up or down. No picker attached to an input is documented.' },
		{ id: 'time-picker', name: 'TimePicker', docs: d('widgets/timepicker'), notes: 'Scrollable hour, minute and second columns, in 12- or 24-hour format.' },
		{ id: 'dialog', name: 'Overlay', docs: d('overlays/overlay'), notes: `Full-screen layer with optional backdrop, focus trapping and dismissal; you place a Card or other surface inside it. Its section can be aligned to an edge, but no dedicated drawer is documented. Backdrop is also a standalone component: ${d('overlays/backdrop')}` },
		{ id: 'popover', name: 'Popover', docs: d('overlays/popover'), notes: 'Toggled by a button; the docs example puts a Menu inside it to make a dropdown menu.' },
		{ id: 'tooltip', name: 'Popover', docs: d('overlays/popover', 'tooltip'), notes: 'A Popover variation that opens on hover or focus.' },
		{ id: 'tabs', name: 'Tab', docs: d('disclosure/tab') },
		{ id: 'accordion', name: 'Accordion', docs: d('disclosure/accordion'), notes: 'Can allow several sections open at once.' },
		{ id: 'carousel', name: 'Carousel', docs: d('disclosure/carousel'), notes: 'Scrolls through slides of content inside a fixed area.' },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: d('navigation/breadcrumb') },
		{ id: 'pagination', name: 'Pagination', docs: d('widgets/pagination') },
		{ id: 'navigation-menu', name: 'Menu', docs: d('navigation/menu'), notes: 'Vertical or horizontal list of buttons and anchors with headings; used inside Aside, Omni and Popover.' },
		{ id: 'sidebar', name: 'Aside', docs: d('navigation/aside'), notes: `Vertical app navigation panel with header, section and footer. Omni is the horizontal counterpart (top bar): ${d('navigation/omni')}` },
		{ id: 'link', name: 'Anchor', docs: d('navigation/anchor') },
		{ id: 'card', name: 'Card', docs: d('surfaces/card'), notes: `Multi-part (figure, header, section, footer). Tile (${d('surfaces/tile')}) is a compact horizontal variant, Hero (${d('surfaces/hero')}) a banner, and Box (${d('surfaces/box')}) a plain colored block.` },
		{ id: 'separator', name: 'Divider', docs: d('layouts/divider'), notes: 'Horizontal or vertical, optionally with text.' },
		{ id: 'scroll-area', name: 'Scrollable', docs: d('layouts/scrollable'), notes: 'Wraps content in its own scrolling context; no custom scrollbars.' },
		{ id: 'grid', name: 'Grid', docs: d('layouts/grid'), notes: `Mosaic (${d('layouts/mosaic')}) fills a row with as many fixed-size items as fit.` },
		{ id: 'stack', name: 'Stack', docs: d('layouts/stack') },
		{ id: 'progress', name: 'Progress', docs: d('feedback/progress'), notes: 'Bar or circle shape, with an indeterminate mode.' },
		{ id: 'spinner', name: 'Ellipsis', docs: d('feedback/ellipsis'), notes: 'Animated trailing dots used as a loading indicator rather than a spinning shape.' },
		{ id: 'badge', name: 'Badge', docs: d('display/badge'), notes: `Dot (${d('feedback/dot')}) is a small status dot; Position can pin either onto a button corner.` },
		{ id: 'table', name: 'Table', docs: d('display/table'), notes: `Styled HTML table parts with borders and stripes; wrap it in Scrollable for overflow. DataTable (${d('widgets/datatable')}) renders rows from data with built-in paging, search and sorting.` },
		{ id: 'list', name: 'List', docs: d('display/list') },
		{ id: 'kbd', name: 'Kbd', docs: d('display/kbd') },
		{ id: 'image', name: 'Figure', docs: d('embedded/figure'), notes: 'Container for images and video with fit and shape options.' },
		{ id: 'typography', name: 'Heading / Text', docs: d('typography/heading'), notes: `Text (${d('typography/text')}) covers inline and paragraph text, and Blockquote (${d('typography/blockquote')}) quotes. Article (${d('layouts/article')}) styles raw HTML content.` },
		{ id: 'code-block', name: 'Code', docs: d('typography/code', 'code-block'), notes: 'Code with is="pre" renders a block.' },
		{ id: 'portal', name: 'Portal', docs: d('utilities/portal') },
		{ id: 'focus-trap', name: 'trap_focus', docs: d('actions/trap_focus'), notes: 'A Svelte action.' },
		{ id: 'hotkeys', name: 'keybind', docs: d('actions/keybind'), notes: 'A Svelte action that fires a callback for a key combination while the element has focus.' },
		{ id: 'animation', name: 'Animation', docs: d('utilities/animation'), notes: `Bounce, ping and pulse effects. Transition (${d('utilities/transition')}) applies enter and exit effects such as fade, clip, scale and slide.` },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, CONTRIBUTING, issue templates, LICENSE) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md, CLAUDE.md or Copilot instructions, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.6.4', date: '2022-03-19' },
		lastCommit: '2023-05-21',
		deprecated: {
			summary: 'A notice at the top of the README says development is on indefinite hiatus, calls it an unsupported library and tells users to look for alternatives. No replacement is named.',
			source: `${repo}/blob/main/README.md`,
		},
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@kahi-ui/framework', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Unsupported upstream: the README says development is on indefinite hiatus and points users to other libraries. The README also still marks the library as a work in progress. Listed for reference and migration planning.',
		'Svelte 3 only. @kahi-ui/framework 0.6.4 has no peerDependencies; it lists svelte ^3.40.2 as a regular dependency. Components use export let, $: statements, slots, on: events, createEventDispatcher and $$restProps, and one helper imports from svelte/internal; on Svelte 5 this syntax only runs in legacy mode, and the svelte/internal import is likely to break.',
		'Styling: you import two prebuilt stylesheets from the package (kahi-ui.framework.css and kahi-ui.theme.default.css), so no Sass or other build tooling is needed. The styles are written in Sass upstream; deeper theme changes mean editing the theme files and running a custom build from the source.',
		'Theming: colors, sizes, spacings, fonts and elevations are CSS custom properties. Components take a palette prop by role (accent, affirmative, negative, neutral and others). Dark mode follows the OS preference, or a data-mode attribute on the html element; darkmode and lightmode stores report the current mode.',
		'Built for progressive enhancement: much of the toggling (overlays, popovers, tabs, accordions) works through HTML and CSS, so it also works without JavaScript. The FAQ says full keyboard and ARIA support is not yet pursued.',
		'Written in TypeScript; type definitions ship with the package. Date and time widgets use a bundled copy of the Temporal polyfill, and the date components take locale (BCP 47 tag) and calendar props for localized formatting.',
		'Documented parts with no canonical id here: Omni (top bar), Hero, Tile, Box, Backdrop, Clickable, Center, Container, Spacer, Position (floats content into corners, e.g. a floating action button), DateStamp, TimeStamp, DateTimeStamp, HiddenInput, the Day/Month/Year steppers, the render-gating utilities (BrowserRender, ServerRender, IntersectionRender, MediaQueryRender, ViewportRender), several other actions (click_outside, auto_focus and others) and the viewport, mediaquery and scrolllock stores.',
	],
})
