import { defineLibrary } from '../schema'

// Docs site is a SvelteKit (pre-1.0) + mdsvex app in the same repo. Component pages are
// src/routes/docs/components/<slug>.md, served at /docs/components/<slug>; heading anchors come
// from rehype-slug. Every page and anchor below was fetched live on 2026-11-24 (a made-up slug
// returns 404). The repo's main branch ends at the 1.6.0 release (commit ba1813e).
const site = 'https://fluent-svelte.vercel.app'
const c = (slug: string, anchor?: string) => `${site}/docs/components/${slug}${anchor ? `#${anchor}` : ''}`
const repo = 'https://github.com/tropicaaal/fluent-svelte'

export default defineLibrary({
	id: 'fluent-svelte',
	name: 'Fluent Svelte',
	description:
		'A Svelte 3 component set that recreates the look of Microsoft WinUI controls (Fluent Design), with scoped component styles and a shared theme file of CSS variables.',
	docs: `${site}/docs`,
	repository: repo,
	packages: ['fluent-svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/main/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '1.6.0',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'ssr', 'rtl', 'theming', 'dark-mode', 'design-system', 'i18n'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: `Standard, accent and hyperlink styles. A separate IconButton for icon-only buttons has its own page: ${c('iconbutton')}` },
		{ id: 'link', name: 'Button', docs: c('button', 'styles'), notes: 'The hyperlink variant of Button; it renders an anchor when given an href. There is no separate link component.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: 'Supports an indeterminate state.' },
		{ id: 'radio-group', name: 'RadioButton', docs: c('radiobutton', 'radio-groups'), notes: 'Individual RadioButtons grouped through a shared binding; there is no separate group component.' },
		{ id: 'switch', name: 'ToggleSwitch', docs: c('toggleswitch') },
		{ id: 'input', name: 'TextBox', docs: c('textbox'), notes: 'Has built-in clear, search and password-reveal buttons depending on its type.' },
		{ id: 'password-input', name: 'TextBox', docs: c('textbox', 'textbox-types'), notes: 'A TextBox type with a reveal button, not a separate component.' },
		{ id: 'search', name: 'TextBox', docs: c('textbox', 'textbox-types'), notes: 'A TextBox type with a search button and a search event.' },
		{ id: 'slider', name: 'Slider', docs: c('slider'), notes: 'Ticks, value tooltips, vertical and reversed directions.' },
		{ id: 'dialog', name: 'ContentDialog', docs: c('contentdialog') },
		{ id: 'popover', name: 'Flyout', docs: c('flyout') },
		{ id: 'collapsible', name: 'Expander', docs: c('expander'), notes: 'Can expand in either direction.' },
		{ id: 'alert', name: 'InfoBar', docs: c('infobar'), notes: 'Severity levels, optional action button and close control.' },
		{ id: 'badge', name: 'InfoBadge', docs: c('infobadge'), notes: 'Small severity dot or count.' },
		{ id: 'avatar', name: 'PersonPicture', docs: c('personpicture'), notes: 'Photo or initials, with an optional badge.' },
		{ id: 'progress', name: 'ProgressRing', docs: c('progressring', 'completion-value'), notes: 'Determinate when given a value. A linear ProgressBar is exported but not documented.' },
		{ id: 'spinner', name: 'ProgressRing', docs: c('progressring'), notes: 'Indeterminate (spinning) when no value is set.' },
		{ id: 'list', name: 'ListItem', docs: c('listitem'), notes: 'A single selectable row (rendered as a link when given an href); you build the list yourself.' },
		{ id: 'typography', name: 'TextBlock', docs: c('textblock'), notes: 'Applies the Fluent type ramp (caption, body, subtitle, title, display...).' },
		{ id: 'calendar', name: 'CalendarView', docs: c('calendarview'), notes: 'Single or multiple selection, min/max and blackout dates, day, month and year views, localized through Intl.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo at 1.6.0 (README, LICENSE, .github issue templates; there is no CONTRIBUTING, AGENTS.md or CLAUDE.md) and the docs site (no llms.txt, 404; no MCP server). No mention of AI tools; the MIT license adds no AI terms.',
		sources: [
			`${repo}/blob/main/README.md`,
			`${repo}/blob/main/LICENSE`,
			`${site}/docs`,
		],
	},
	maintenance: {
		lastRelease: { version: '1.6.0', date: '2022-06-05' },
		lastCommit: '2022-06-05',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/fluent-svelte', 'https://github.com/tropicaaal/fluent-svelte'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte 3 only. The package declares no svelte peer dependency; the repo develops against svelte ^3.47.0 and tags itself svelte3, and nothing in the repo or changelog covers Svelte 4 or 5. Listed for reference and migration planning.',
		'Components use Svelte 3 syntax (export let, $: statements, slots, createEventDispatcher, $$restProps). Many forward DOM events with get_current_component imported from svelte/internal, which is not public API and is gone in Svelte 5, so they would need rewriting rather than running in legacy mode.',
		'The README describes the project as alpha and treats any component without a docs page as unstable.',
		'Styles are compiled from Sass at publish time and scoped inside each component, so you need no Sass or other build tooling; you only import fluent-svelte/theme.css once. The theme follows the system light/dark preference through prefers-color-scheme.',
		`Exported but without a docs page: AutoSuggestBox, ComboBox, NumberBox, ProgressBar, Tooltip, MenuBar, MenuFlyout and ContextMenu (all shown on the test page at ${site}/test), plus CalendarDatePicker and NavigationView (exported, but on neither page). A ScrollView component ships in the package without being exported. We list only components with a docs page.`,
	],
})
