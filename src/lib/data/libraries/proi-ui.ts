import { defineLibrary } from '../schema'

// Docs are a Histoire site (histoire.config.ts in the repo) deployed to Vercel, which rewrites
// every path to index.html, so any URL returns 200. Routes come from the deployed bundle on
// 2026-11-24: Vue Router in history mode with base '/' and the route /story/:storyId. Story ids
// are Histoire's slug of each story file path (e.g. src/lib/button/__stories__/Button.story.svelte
// gives src-lib-button-stories-button-story-svelte); every id below appears in the deployed story
// list. Each story page also renders the matching .story.md file as its docs.
const site = 'https://proi-ui.vercel.app'
const s = (id: string) => `${site}/story/${id}`
const c = (dir: string, file = dir) => s(`src-lib-${dir}-stories-${file}-story-svelte`)
const repo = 'https://github.com/specialdoom/proi-ui'

export default defineLibrary({
	id: 'proi-ui',
	name: 'proi-ui',
	description:
		'A small Svelte 3 component kit with its own CSS custom property tokens and a Theme wrapper that switches between light and dark palettes.',
	docs: `${site}/`,
	repository: repo,
	packages: ['@specialdoom/proi-ui'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3],
		peerRange: '^3.56.0',
		runes: false,
	},
	version: '4.1.8',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'theming', 'dark-mode', 'forms'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion'), notes: 'Sections are AccordionItem, which can start expanded or be disabled.' },
		{ id: 'alert', name: 'Alert', docs: c('alert'), notes: `Success, info, warning and error variants. Notification (${c('notification')}) is a similar closable notice card with a title and description; it is placed inline, with no queue or toast function.` },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: 'Shows initials or an image, and ships four built-in illustrated avatars as subcomponents.' },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: c('breadcrumb'), notes: 'Items are BreadcrumbItem with href, text and a current-page flag.' },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Primary, secondary, ghost, outline, danger and link variants, plus a full-width block option.' },
		{ id: 'card', name: 'Card', docs: c('card'), notes: `Title, description and optional image, and can be closable. FillCard (${c('card', 'fillcard')}) is a variant with a solid colored background.` },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: `Has built-in cancel and OK actions that can be hidden. A separate Backdrop (${c('backdrop')}) is the dimmed overlay layer.` },
		{ id: 'separator', name: 'Divider', docs: c('divider') },
		{ id: 'badge', name: 'Badge', docs: s('src-lib-tags-badge-stories-badge-story-svelte'), notes: `A small colored label. Pill (${s('src-lib-tags-pill-stories-pill-story-svelte')}) is the rounded form of the same tag, and Dot (${c('dot')}) is a colored dot with a label.` },
		{ id: 'select', name: 'Dropdown', docs: c('dropdown'), notes: 'Picks one value from an options list, with placeholder, error and disabled states. Not an action menu.' },
		{ id: 'form', name: 'FormItem', docs: s('src-lib-form-item-stories-form-item-formitem-story-svelte'), notes: `Wraps a control with a label, description and error text; no validation logic. InlineFormItem (${s('src-lib-form-item-stories-inline-form-item-inlineformitem-story-svelte')}) puts the label beside the control.` },
		{ id: 'link', name: 'Link', docs: c('link') },
		{ id: 'password-input', name: 'PasswordInput', docs: c('password-input', 'passwordinput'), notes: 'Has a show/hide toggle.' },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: 'Linear bar with percent, indeterminate, error and small options.' },
		{ id: 'radio-group', name: 'Radio', docs: c('radio'), notes: 'Single radios bound to a shared group value; there is no group component.' },
		{ id: 'spinner', name: 'Spinner', docs: c('spinner'), notes: 'Three sizes.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Panels are TabPane; scroll buttons appear when the tab row overflows.' },
		{ id: 'input', name: 'TextInput', docs: c('text-input', 'textinput') },
		{ id: 'textarea', name: 'Textarea', docs: c('textarea') },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at its final commit (README, CONTRIBUTING, CODE_OF_CONDUCT, PULL_REQUEST_TEMPLATE, .github workflows, LICENSE) and the docs site: no AGENTS.md or CLAUDE.md, no MCP server or agent skills, and no mention of AI tools. The site has no llms.txt (its catch-all rewrite serves the app shell for that path). The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/CONTRIBUTING.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '4.1.8', date: '2023-10-28' },
		lastCommit: '2023-10-28',
		archived: true,
		deprecated: {
			summary: 'The README and the docs introduction announce that the author has archived the library, stopped development and does not consider it ready for production, and suggest Melt UI, Skeleton or Carbon Components Svelte instead.',
			source: `${repo}/blob/main/README.md`,
		},
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@specialdoom/proi-ui', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Archived upstream: the author stopped development, says the kit is not production ready, and points to Melt UI, Skeleton and Carbon Components Svelte. Listed for reference and migration planning.',
		'Svelte 3 only: the peer range is svelte ^3.56.0. Components use export let, $: statements, slots, on: event forwarding, createEventDispatcher, a writable store for tabs and $$restProps; on Svelte 5 that syntax only runs in legacy mode. We found no Svelte 4 or 5 work upstream.',
		'Each component is imported from its own file path (e.g. @specialdoom/proi-ui/Button.svelte); Avatar, Breadcrumb and Tabs also have index entry points that bundle their parts. Components are written in TypeScript and ship .d.ts files.',
		'Styling is plain scoped CSS that reads --pi-* custom properties, with built-in fallback values matching the light look. The optional Theme component sets a data-theme attribute on the root element and defines light and dark token sets; a variables.css file with the base palette is also exported. No CSS framework or build plugin is needed.',
		'Colors use named palette variants (pine, flame, mikado, tufts, vivid, bright, neutral) rather than role names on most components; Button and Alert use role-like variants (primary, danger, success, error...).',
		'The docs are Histoire stories: each page has live variants plus a props, events and slots table. A Figma design file is linked from the README.',
		'Documented components with no canonical id of their own here: Backdrop, Notification, Pill and Dot. Each is linked from the closest entry above.',
	],
})
