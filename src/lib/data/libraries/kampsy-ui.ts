import { defineLibrary } from '../schema'

// Docs are a SvelteKit app in the library repo; each component page is `src/routes/<slug>/+page.svelte`,
// served at https://ui.kampsy.xyz/<slug> (the same slugs appear in the docs sidebar data).
const d = 'https://ui.kampsy.xyz'

export default defineLibrary({
	id: 'kampsy-ui',
	name: 'Kampsy UI',
	description:
		'Styled Svelte 5 components in the spirit of Vercel’s Geist design, built on Tailwind CSS v4 with a shared set of light and dark colour tokens.',
	docs: 'https://ui.kampsy.xyz',
	repository: 'https://github.com/kampsy/ui',
	packages: ['kampsy-ui'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/kampsy/ui/blob/main/LICENSE.md',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.45.6',
		runes: true,
	},
	version: '2.10.0',
	styling: ['tailwind'],
	features: ['typescript', 'runes', 'dark-mode', 'icons'],
	components: [
		{ id: 'avatar', name: 'Avatar', docs: `${d}/avatar`, notes: 'Also AvatarGroup and AvatarWithIcon.' },
		{ id: 'badge', name: 'Badge', docs: `${d}/badge`, notes: 'A Pill variant is documented on the same page. StatusDot (/status-dot) is a separate deployment-state indicator.' },
		{ id: 'button', name: 'Button', docs: `${d}/button` },
		{ id: 'split-button', name: 'SplitButton', docs: `${d}/split-button` },
		{ id: 'toggle-group', name: 'Switch', docs: `${d}/switch`, notes: 'Despite the name this is a segmented control (Switch.Root with Switch.Control radio items), not an on/off switch.' },
		{ id: 'input', name: 'Input', docs: `${d}/input` },
		{ id: 'search', name: 'SearchInput', docs: `${d}/search-input` },
		{ id: 'textarea', name: 'Textarea', docs: `${d}/textarea` },
		{ id: 'checkbox', name: 'Checkbox', docs: `${d}/checkbox` },
		{ id: 'radio-group', name: 'Choicebox', docs: `${d}/choicebox`, notes: 'Card-style options (Choicebox.Group / Choicebox.Item) rendered as radio or checkbox inputs.' },
		{ id: 'switch', name: 'Toggle', docs: `${d}/toggle`, notes: 'The on/off control; a hidden checkbox with a sliding thumb.' },
		{ id: 'select', name: 'Select', docs: `${d}/select`, notes: 'Custom listbox built from Select.Root, Trigger, Value, Content and Item.' },
		{ id: 'calendar', name: 'Calendar', docs: `${d}/calendar`, notes: 'Bindable value accepts a single date or a start/end range.' },
		{ id: 'dialog', name: 'Modal', docs: `${d}/modal` },
		{ id: 'tooltip', name: 'Tooltip', docs: `${d}/tooltip` },
		{ id: 'dropdown-menu', name: 'Menu', docs: `${d}/menu`, notes: 'Menu.Root, Button, Content, Item and Link.' },
		{ id: 'tabs', name: 'Tabs', docs: `${d}/tabs` },
		{ id: 'pagination', name: 'Pagination', docs: `${d}/pagination` },
		{ id: 'accordion', name: 'Collapse', docs: `${d}/collapse`, notes: 'Collapse.Root opens one item at a time unless `multiple` is set; CollapseCode wraps code examples.' },
		{ id: 'alert', name: 'Note', docs: `${d}/note`, notes: 'Inline message with types and a fill variant. Banner (/banner) and ProjectBanner (/project-banner) cover page-level announcements.' },
		{ id: 'toast', name: 'Toast', docs: `${d}/toast`, notes: 'Toaster component plus a toast() function.' },
		{ id: 'progress', name: 'Progress', docs: `${d}/progress` },
		{ id: 'spinner', name: 'Spinner', docs: `${d}/spinner` },
		{ id: 'skeleton', name: 'Skeleton', docs: `${d}/skeleton` },
		{ id: 'empty-state', name: 'EmptyState', docs: `${d}/empty-state` },
		{ id: 'table', name: 'Table', docs: `${d}/table`, notes: 'Compound Table.Root/Header/Row/Cell parts; no sorting or data-grid features.' },
		{ id: 'kbd', name: 'Kbd', docs: `${d}/keyboard-input`, notes: 'Kbd.Root and Kbd.Group.' },
		{ id: 'typography', name: 'Text', docs: `${d}/text`, notes: 'Text with numeric and responsive sizes, plus TextGradient.' },
		{ id: 'code-block', name: 'CodeSnippet', docs: `${d}/snippet`, notes: 'Terminal-style command snippet with copy; not a syntax-highlighted code block.' },
		{ id: 'clipboard', name: 'CopyButton', docs: `${d}/copy-button` },
		{ id: 'theme-switcher', name: 'ThemeSwitcher', docs: `${d}/theme-switcher`, notes: 'Light / dark / system; the theme.css dark variant keys off a `.dark` class.' },
	],
	ai: {
		status: 'welcomes',
		summary:
			'The docs publish an llms.txt component reference and a Skills page that installs an agent skill for the library (npx skills add kampsy/ui). The repo has an AGENTS.md with coding conventions for agents; CONTRIBUTING.md has no AI restrictions.',
		sources: [
			'https://github.com/kampsy/ui/blob/main/static/llms.txt',
			'https://github.com/kampsy/ui/blob/main/src/routes/skills/+page.svelte',
			'https://github.com/kampsy/ui/blob/main/AGENTS.md',
			'https://github.com/kampsy/ui/blob/main/CONTRIBUTING.md',
		],
		upstreamContributing:
			'CONTRIBUTING.md asks that anything beyond minor doc fixes starts as an issue that gets assigned to you before a PR; commits follow conventional commits. AGENTS.md asks agents to run format, lint and check before committing and never to suppress lint or type errors.',
		llmsTxt: 'https://ui.kampsy.xyz/llms.txt',
	},
	lastVerified: '2026-11-04',
	notes: [
		'Requires Tailwind CSS v4 in your app: import kampsy-ui/theme.css and add an @source entry for the package so its classes are generated.',
		'The npm release 2.10.0 matches the v2.10.0 git tag; the version in the repo root package.json is a placeholder set by semantic-release at publish time.',
		'Several documented components have no canonical id here: Banner, ProjectBanner, Description, Error, StatusDot and ShowMore. The /radio and /feedback routes exist but are not in the docs sidebar or the package exports.',
	],
})
