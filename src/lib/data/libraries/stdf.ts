import { defineLibrary } from '../schema'

// Docs are a client-rendered SvelteKit site (apps/stdf-site in the any-tdf monorepo, prerendered with
// a 404 fallback). Guide pages are real routes (/guide/<name>); an unknown guide path returns 404.
// Component docs live on one page, /components?nav=<nav>&tab=<n>, where <nav> comes from
// apps/site-common/src/stdf-data/menuList.ts and tab 2 is the Guide tab (lib/tab/Tab.svelte). The
// docs link to each other in this same form. The lang=en_US query parameter makes the layout switch
// to English (normalizeSiteLanguage in apps/site-common/src/site.ts). Checked on 2026-11-24 against
// the main branch at 898d7d3.
const site = 'https://stdf.dev'
const c = (nav: string) => `${site}/components?nav=${nav}&tab=2&lang=en_US`
const guide = (page?: string) => `${site}/guide${page ? `/${page}` : ''}?lang=en_US`
const repo = 'https://github.com/any-tdf/any-tdf'

export default defineLibrary({
	id: 'stdf',
	name: 'STDF',
	description:
		'A mobile-first Svelte 5 component library styled with Tailwind CSS 4, the Svelte member of the Any TDF family that shares one design system, theme set and locale data with React and Vue counterparts.',
	docs: `${site}/?lang=en_US`,
	repository: repo,
	packages: ['stdf'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
		notes: 'One LICENSE at the monorepo root covers STDF and its React and Vue siblings.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '3.0.0',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^4.0.0',
			required: true,
			notes: 'Peer of stdf. Your entry CSS imports tailwindcss and stdf/source.css, adds a dark custom variant and defines the theme color variables in @theme. The UnoCSS templates listed below do not add it to package.json.',
			source: guide(),
		},
		{
			package: '@tailwindcss/vite',
			kind: 'build-plugin',
			required: true,
			notes: 'The manual setup steps install it next to Tailwind and register it in vite.config. The create-any-tdf templates do this for you.',
			source: guide(),
		},
		{
			package: 'unocss',
			kind: 'unocss',
			required: false,
			notes: 'Alternative to Tailwind: the create-any-tdf UnoCSS templates (skut, vsut) use unocss with @unocss/preset-wind4 and a uno.config.ts that maps the STDF color variables and scans the stdf package. The docs give no manual UnoCSS setup.',
			source: guide('create'),
		},
	],
	features: ['typescript', 'ssr', 'semantic-colors', 'theming', 'dark-mode', 'i18n', 'forms', 'icons', 'runes', 'cli'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Several fill styles and a state prop for theme, success, warning, error and info colors.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('buttonGroup') },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders SVG sprite symbols; the guide covers setting up a sprite and choosing a built-in icon library.' },
		{ id: 'drawer', name: 'Popup', docs: c('popup'), notes: `A layer that slides in from any edge or appears in the center. BottomSheet (${c('bottomSheet')}) is a bottom-only panel with a draggable header and its own close and back events.` },
		{ id: 'dropdown-menu', name: 'ActionPopover', docs: c('actionPopover'), notes: `A bubble of actions anchored to a trigger, laid out vertically, horizontally, in a grid or in a ring. ActionSheet (${c('actionSheet')}) lists actions in a panel from the bottom of the screen instead.` },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'separator', name: 'Divider', docs: c('divider') },
		{ id: 'grid', name: 'Grids', docs: c('grids') },
		{ id: 'skeleton', name: 'Skeleton', docs: c('skeleton') },
		{ id: 'navigation-menu', name: 'NavBar', docs: c('navBar'), notes: 'A top bar with title and left and right actions, as in a mobile app header.' },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'stepper', name: 'Steps', docs: c('steps') },
		{ id: 'bottom-navigation', name: 'TabBar', docs: c('tabBar') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'pin-input', name: 'CodeInput', docs: c('codeInput'), notes: 'Boxed input for verification codes or passwords, meant to be used with the on-screen NumKeyboard or FullKeyboard.' },
		{ id: 'form', name: 'Form', docs: c('form'), notes: 'Builds a form from a configuration of item types, with card layout and submit buttons.' },
		{ id: 'input', name: 'Input', docs: c('input') },
		{ id: 'textarea', name: 'Input', docs: c('input'), notes: 'A textarea mode of Input, described on the same page.' },
		{ id: 'signature-pad', name: 'Signature', docs: c('signature') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'radio-group', name: 'Radio', docs: c('radio') },
		{ id: 'rating', name: 'Rate', docs: c('rate') },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'number-input', name: 'Stepper', docs: c('stepper'), notes: 'Plus and minus buttons around a number, with an async mode.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'select', name: 'Picker', docs: c('picker'), notes: `A wheel picker in a bottom popup, with linked columns for cascading data. AsyncPicker (${c('asyncPicker')}) loads each level on demand.` },
		{ id: 'color-picker', name: 'ColorPicker', docs: c('colorPicker') },
		{ id: 'date-picker', name: 'Calendar', docs: c('calendar'), notes: 'Opens in a popup by default; single, multiple and range selection modes.' },
		{ id: 'calendar', name: 'Calendar', docs: c('calendar'), notes: 'Can also render inline without the popup.' },
		{ id: 'date-range-picker', name: 'Calendar', docs: c('calendar'), notes: 'The range mode of Calendar, not a separate component.' },
		{ id: 'range-calendar', name: 'Calendar', docs: c('calendar'), notes: 'Range mode combined with the inline (no popup) display.' },
		{ id: 'time-picker', name: 'TimePicker', docs: c('timePicker'), notes: 'Wheel picker whose type sets which of year, month, day, hour, minute and second columns appear, so it also picks dates.' },
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'list', name: 'List', docs: c('list'), notes: `Batch selection and swipe actions; empty states are left to your own markup. Cell (${c('cell')}) is the single row with left and right content.` },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: `AvatarGroup stacks several: ${c('avatarGroup')}` },
		{ id: 'badge', name: 'Badge', docs: c('badge'), notes: `Count or dot marker on another element. Tag (${c('tag')}) is the small colored label, with closable and mark styles.` },
		{ id: 'animated-value', name: 'CharRoll', docs: c('charRoll'), notes: 'Rolls characters or digits into place, like a slot machine.' },
		{ id: 'timer', name: 'CountDown', docs: c('countDown') },
		{ id: 'alert', name: 'NoticeBar', docs: c('noticeBar'), notes: 'An inline notice strip with optional icons and scrolling text.' },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: `ProgressLoop is the circular form: ${c('progressLoop')}` },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
		{ id: 'lightbox', name: 'ImagePreview', docs: c('imagePreview') },
		{ id: 'image', name: 'ImageList', docs: c('imageList'), notes: 'A grid of images with upload status, preview and delete. It does not pick or upload files itself.' },
		{ id: 'carousel', name: 'Swiper', docs: c('swiper') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: 'Confirmation window with primary and secondary actions and custom content.' },
		{ id: 'alert-dialog', name: 'Modal', docs: c('modal'), notes: 'A blocking message with a single acknowledge action.' },
		{ id: 'spinner', name: 'Loading', docs: c('loading'), notes: 'Many animated loader styles.' },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: `Alert (${c('alert')}) is a card-style notice shown at a chosen screen position that can close itself. The Feedback API (${c('feedback')}) opens Toast, Dialog, Modal, Alert and Loading with function calls.` },
		{ id: 'locale-provider', name: 'ConfigProvider', docs: guide('internation'), notes: 'Sets the locale and built-in icon library for the subtree. Documented in the internationalization guide, not on a component page.' },
	],
	ai: {
		status: 'welcomes',
		summary: 'The monorepo ships an Agent Skill for STDF (packages/skills/stdf-skill) that gives AI coding agents offline component references, theme, i18n and scaffolding guidance, and the docs have an AI Skill guide on installing it. The repo also keeps development skills for agents under .agents/skills. No llms.txt (404) or MCP server was found, and the MIT LICENSE adds no AI terms.',
		sources: [
			guide('skill'),
			`${repo}/tree/main/packages/skills/stdf-skill`,
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '3.0.0', date: '2026-10-01' },
		lastCommit: '2026-11-23',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/stdf', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Built for touch screens: the components follow mobile app patterns (bottom sheets, wheel pickers, pull to refresh, on-screen keyboards) rather than desktop ones.',
		'Written with runes: props come from $props(), content goes in snippets and events are callback props such as onclick.',
		'Styling needs Tailwind CSS 4: stdf/source.css registers the package as a Tailwind source, and your CSS defines the color variables. Colors follow a primary and dark pair plus success, warning, error and info roles. Theme helpers in stdf/theme switch light and dark modes at runtime, and a theme plugin offers built-in themes for a multi-theme setup.',
		'The create-any-tdf generator scaffolds SvelteKit or Vite projects and offers UnoCSS templates as well as Tailwind ones.',
		'Built-in text defaults to Simplified Chinese; pass a locale from stdf/lang to ConfigProvider to change it. The package ships more than 60 locales.',
		'The React (RTDF) and Vue (VTDF) libraries in the same repo share the component set, themes and locales through @any-tdf/common, which npm installs as a dependency.',
		'A 2.x to 3.x upgrade guide is in the docs.',
		'Documented components with no canonical id here: Mask, Placeholder, IndexBar, FullKeyboard, NumKeyboard, PullRefresh and InfiniteScroll. BottomSheet, ActionSheet, AsyncPicker, Cell, AvatarGroup, Tag, ProgressLoop, Alert and Feedback are linked from the closest entries above.',
	],
})
