import { defineLibrary } from '../schema'

// Docs are a Storybook 6 build (config in .storybook/, stories in src/**/*.stories.svelte, main
// branch at 626c4cf) deployed to Vercel. Storybook serves the same shell for every path, so the
// links are derived from source: each story file sets a meta title (e.g. 'Elements/Button') and
// its first story is named 'Default'; Storybook's sanitize() turns that into the id
// elements-button--default, opened in the Docs tab with ?path=/docs/<id>. The deployed preview
// bundle (main.4aa61055.iframe.bundle.js, fetched 2026-11-24) registers the same 92 titles as the
// source and ships the Docs tab blocks.
const site = 'https://ui-svelte.vercel.app'
const c = (id: string) => `${site}/?path=/docs/${id}--default`
const repo = 'https://github.com/Nick-Mazuk/ui-svelte'
const uiConfig = 'https://www.npmjs.com/package/@nick-mazuk/ui-config'

export default defineLibrary({
	id: 'nick-mazuk-ui-svelte',
	name: 'ui-svelte (Nick Mazuk)',
	description:
		'An opinionated Svelte 3 kit of Tailwind CSS 2 components, form inputs and page layouts (auth, changelog, error pages), themed through a companion Tailwind preset.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@nick-mazuk/ui-svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '0.29.19',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^2.1.1',
			required: true,
			notes: 'Peer of @nick-mazuk/ui-svelte. Components are styled with Tailwind 2 utility classes (including dark: variants), so your build must generate them.',
			source: `${repo}/blob/main/package.json`,
		},
		{
			package: '@nick-mazuk/ui-config',
			kind: 'peer',
			range: '^0.10.61',
			required: true,
			notes: 'Peer of @nick-mazuk/ui-svelte by the same author. Its README has you add it as a preset in tailwind.config.js and import its colors.css and styles.css; the preset defines the color roles the components use and sets class-based dark mode. It is marked experimental, outside semver until 1.0.',
			source: uiConfig,
		},
		{
			package: '@nick-mazuk/lib',
			kind: 'peer',
			range: '^0.8.50',
			required: true,
			notes: 'Peer of @nick-mazuk/ui-svelte: a shared helper package (text and number formatting, date parsing, URL and social-profile helpers) that the inputs import.',
			source: `${repo}/blob/main/package.json`,
		},
		{
			package: 'postcss',
			kind: 'postcss',
			required: true,
			notes: 'The ui-config README installs it with Tailwind and has you add tailwindcss and autoprefixer to postcss.config.js.',
			source: uiConfig,
		},
		{
			package: 'autoprefixer',
			kind: 'postcss',
			required: true,
			notes: 'Registered in postcss.config.js next to tailwindcss, per the ui-config README.',
			source: uiConfig,
		},
	],
	features: ['typescript', 'semantic-colors', 'dark-mode', 'forms', 'icons'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('components-accordion'), notes: `Single collapsible section with a card style. AccordionGroup stacks several: ${c('components-accordion-accordiongroup')}` },
		{ id: 'bottom-navigation', name: 'BottomNav', docs: c('components-bottomnav'), notes: `Items are BottomNavItem: ${c('components-bottomnav-bottomnavitem')}` },
		{ id: 'empty-state', name: 'EmptyState', docs: c('components-emptystate') },
		{ id: 'list', name: 'List', docs: c('components-list'), notes: `Selectable items with prefix and suffix slots. Parts: ListItem (${c('components-list-listitem')}) and ListDivider (${c('components-list-listdivider')}).` },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('components-menu'), notes: 'Combines Popover and List into a floating menu.' },
		{ id: 'dialog', name: 'Modal', docs: c('components-modal'), notes: `Takes a title, description and confirm/cancel button text as props. Prebuilt variants: ModalForm (${c('components-modal-modalform')}) and ModalSuccess (${c('components-modal-modalsuccess')}).` },
		{ id: 'popover', name: 'Popover', docs: c('components-popover'), notes: 'Rendered through the Portal utility, with placement options and an optional overlay.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('components-tooltip') },
		{ id: 'tabs', name: 'Tabs', docs: c('components-tabs'), notes: `Tabs are TabItem, optionally with an icon: ${c('components-tabs-tabitem')}` },
		{ id: 'toast', name: 'Toast', docs: c('components-toast'), notes: 'Place Toast once and call the exported showToast function; toasts can carry an action and a cancel button.' },
		{ id: 'table-of-contents', name: 'TableOfContents', docs: c('components-tableofcontents'), notes: 'Built from a nested items array; you pass the current item yourself, and child links expand under it (or all at once with isOpen).' },
		{ id: 'navigation-menu', name: 'Header', docs: c('components-header'), notes: `Site header with brand, links, dropdowns and a separate mobile menu, built from parts such as HeaderBrand (${c('components-header-headerbrand')}), HeaderLink (${c('components-header-headerlink')}), HeaderDropdown (${c('components-header-headerdropdown')}) and HeaderMobileGroup (${c('components-header-headermobilegroup')}). Subheader is a second bar: ${c('components-header-subheader')}` },
		{ id: 'sidebar', name: 'DashboardSidebar', docs: c('layouts-dashboard-dashboardsidebar'), notes: 'A dashboard layout part: a titled list of navigation items that switches to a select on small screens.' },
		{ id: 'footer', name: 'Footer', docs: c('components-footer'), notes: `Built from FooterGroup, FooterColumn, FooterLink and FooterSocialLink parts, each with its own story (e.g. ${c('components-footer-footercolumn')}).` },
		{ id: 'card', name: 'Container', docs: c('utilities-container'), notes: `Listed under Utilities: a padded, rounded box with border, shadow, fill, disabled and clickable (link) variants. Entity (${c('components-entity')}) builds on it as a settings-style row of fields with actions and a menu.` },
		{ id: 'carousel', name: 'MediaScroller', docs: c('components-mediascroller'), notes: 'A horizontally scrolling row with scroll snapping and previous/next buttons, not a slide-by-slide carousel.' },
		{ id: 'button', name: 'Button', docs: c('elements-button'), notes: `Variants by color role plus link and static styles. Submit is a form submit button with a progress state: ${c('form-submit')}` },
		{ id: 'badge', name: 'Badge', docs: c('elements-badge'), notes: `StatusDot (${c('elements-statusdot')}) is a small colored dot with an optional ping animation.` },
		{ id: 'alert', name: 'Note', docs: c('elements-note'), notes: `Inline message box in color-role variants. Error (${c('elements-error')}) is a smaller inline error line with an optional action link.` },
		{ id: 'spinner', name: 'LoadingSpinner', docs: c('elements-loadingspinner'), notes: `LoadingDots (${c('elements-loadingdots')}) is an alternative indicator; LoadingSection (${c('elements-loadingsection')}) centers a spinner in a padded block.` },
		{ id: 'progress', name: 'ProgressBar', docs: c('elements-progressbar'), notes: `LoadingProgressIndicator (${c('elements-loadingprogressindicator')}) is a page-top bar driven by SvelteKit's old sveltekit:navigation-start/end window events.` },
		{ id: 'icon', name: 'Icon', docs: c('elements-icon'), notes: `One Svelte component per icon (Feather icons plus brand icons), with size and stroke width props. MarketingIcon (${c('elements-marketingicon')}) is a separate set of larger illustrative icons.` },
		{ id: 'theme-switcher', name: 'DarkModeSelect', docs: c('elements-darkmodeselect'), notes: 'A Select with system, light and dark options bound to a writable store you provide; applying the theme class is up to you.' },
		{ id: 'form', name: 'Form', docs: c('form-form'), notes: `Inputs register through context; the Form validates them, gathers their values and calls your submit handler, with an option to reset after submit. FormEntity (${c('form-formentity')}) is a titled form card with primary, secondary and destructive actions.` },
		{ id: 'input', name: 'TextInput', docs: c('form-inputs-textinput'), notes: `Label, help text, prefix/suffix, character count and required message built in. Preset fields wrap it: EmailInput (${c('form-inputs-emailinput')}), UrlInput (${c('form-inputs-urlinput')}), NameInput (${c('form-inputs-nameinput')}), DateInput (${c('form-inputs-dateinput')}, a text field that parses dates, no picker), DollarInput (${c('form-inputs-dollarinput')}) and social profile inputs such as TwitterProfileInput (${c('form-inputs-twitterprofileinput')}).` },
		{ id: 'number-input', name: 'NumberInput', docs: c('form-inputs-numberinput'), notes: 'A text field that parses numbers with min, max and decimal limits; no stepper buttons.' },
		{ id: 'password-input', name: 'PasswordInput', docs: c('form-inputs-passwordinput'), notes: `Has a show/hide toggle. NewPasswordInput (${c('form-inputs-newpasswordinput')}) adds a strength check based on zxcvbn.` },
		{ id: 'search', name: 'SearchInput', docs: c('form-inputs-searchinput'), notes: 'Shows a searching state through a prop.' },
		{ id: 'checkbox', name: 'CheckInput', docs: c('form-inputs-checkinput') },
		{ id: 'select', name: 'Select', docs: c('form-inputs-select'), notes: 'A styled native select with optional prefix icon.' },
		{ id: 'file-upload', name: 'FileInput', docs: c('form-inputs-fileinput'), notes: `File type and size limits. ImageInput (${c('form-inputs-imageinput')}) and AvatarInput (${c('form-inputs-avatarinput')}) are image-specific versions.` },
		{ id: 'rich-text-editor', name: 'RichTextInput', docs: c('form-inputs-richtextinput'), notes: 'Built on Tiptap 2 (beta at the time), which the package installs as a dependency.' },
		{ id: 'label', name: 'Label', docs: c('form-label') },
		{ id: 'markdown', name: 'Markdown', docs: c('typography-markdown'), notes: 'Renders marked output with {@html}; the sanitizing step is commented out in the source, so only pass trusted content. Can add heading ids and a table of contents.' },
		{ id: 'portal', name: 'Portal', docs: c('utilities-portal') },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at its latest commit (README, LICENSE, .github workflows) and the Storybook site: no CONTRIBUTING, AGENTS.md or CLAUDE.md, no llms.txt (404), no MCP server or agent skills, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.29.19', date: '2021-09-05' },
		lastCommit: '2021-09-05',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@nick-mazuk/ui-svelte', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only. Version 0.29.19 declares no svelte peer range; the repo develops against svelte ^3.35.0 with svelte-check 1 and Storybook 6. Components use export let, $: statements, slots, on: events and createEventDispatcher; we found no Svelte 4 or 5 work upstream. Listed for reference and migration planning.',
		'The README describes the package as beta and warns of breaking changes; it is still on 0.x.',
		'The package ships raw .svelte files with <script lang="ts"> under src/ and has no main, svelte or exports field, so you import components by file path and your Svelte build needs TypeScript preprocessing. Your Tailwind purge/content settings also need to cover those files so their classes are generated.',
		'Colors are role-based (primary, error, success, warning, highlight, gray) and come from the @nick-mazuk/ui-config preset; the docs do not describe customizing them. Dark mode uses Tailwind dark: variants with a dark class, which the Storybook toolbar toggles.',
		'Docs are Storybook stories with controls and auto-generated prop tables; there is no written guide beyond the README install line.',
		'Documented parts with no canonical id here: full-page layouts (Auth with SignIn, SignUp, ForgotPassword, ResetPassword and Oauth; Changelog; Http404 and Http500), YoutubeVideo, Seo and Spacer.',
	],
})
