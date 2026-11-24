import { defineLibrary } from '../schema'

// Docs are a prerendered SvelteKit site built from the repo's dev branch (src/routes/docs, sidebar
// in src/routes/docs/navigations.ts) and deployed to GitHub Pages at www.yesvelte.com. Component
// pages are /docs/<route> with no trailing slash (the slash form returns 404). Every page below was
// fetched live on 2026-11-24 (200), and made-up slugs under /docs, /docs/form and /docs/el return 404.
const site = 'https://www.yesvelte.com'
const c = (route: string) => `${site}/docs/${route}`
const install = c('installation')
const repo = 'https://github.com/yesvelte/yesvelte'

export default defineLibrary({
	id: 'yesvelte',
	name: 'YeSvelte',
	description:
		'A Svelte 5 component library modelled on the Tabler UI kit (built on Bootstrap), shipping prebuilt Tabler and DaisyUI stylesheets with form wrappers and masked inputs.',
	docs: `${site}/`,
	repository: repo,
	packages: ['yesvelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/dev/LICENSE`,
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '0.2.1-next.4',
	styling: ['css'],
	dependencies: [],
	features: ['typescript', 'semantic-colors', 'theming', 'forms', 'icons', 'runes'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: c('accordion') },
		{ id: 'alert', name: 'Alert', docs: c('alert'), notes: 'Dismissible, with icon, avatar and button variants.' },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar'), notes: 'Includes stacked avatar lists and a status indicator.' },
		{ id: 'badge', name: 'Badge', docs: c('badge'), notes: `Count and label badges with outline, ghost and dot styles. Dot (${c('dot')}) and Status (${c('status')}) are separate small indicator components.` },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: c('breadcrumb') },
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Outline, ghost, loading, social-brand and link (href) variants.' },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('button-group') },
		{ id: 'floating-action-button', name: 'Floating', docs: c('floating'), notes: 'Floating pins any child to a chosen corner, edge or center of its container, with an offset; the docs show it holding a round Button as a floating action button.' },
		{ id: 'card', name: 'Card', docs: c('card'), notes: `Ribbon (${c('ribbon')}) and Stamp (${c('stamp')}) are decorative add-ons for cards.` },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: `CheckboxGroup renders several from a list: ${c('checkbox-group')}` },
		{ id: 'combobox', name: 'Autocomplete', docs: c('autocomplete'), notes: 'Filters options as you type; supports multiple selection and creating new items.' },
		{ id: 'date-picker', name: 'DatePicker', docs: c('date-picker') },
		{ id: 'date-range-picker', name: 'DatePicker', docs: c('date-picker'), notes: 'A range mode of DatePicker (optionally showing two months), not a separate component.' },
		{ id: 'separator', name: 'Divider', docs: c('divider') },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('dropdown'), notes: 'Items with headers, dividers, icons and links.' },
		{ id: 'rich-text-editor', name: 'Editor', docs: c('editor'), notes: 'Built on Quill, with a configurable toolbar.' },
		{ id: 'file-upload', name: 'FileUpload', docs: c('file-upload') },
		{ id: 'form', name: 'FormInput', docs: c('form/form-input'), notes: `There is no form container. Each control has a Form* wrapper (FormInput, FormSelect, FormDatePicker...) adding a label, hint, state and validation; Fieldset groups them: ${c('form/form-fieldset')}` },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders Iconify icons through the iconify-icon element, Tabler icons by default; a pack prop selects other sets.' },
		{ id: 'input', name: 'Input', docs: c('input'), notes: `Supports input masks (via Inputmask) and validation. InputGroup adds text, button or icon addons: ${c('input-group')}` },
		{ id: 'label', name: 'Label', docs: c('label') },
		{ id: 'dialog', name: 'Modal', docs: c('modal'), notes: 'The docs include a small confirm-style example built from Modal, but there is no separate alert dialog component.' },
		{ id: 'navigation-menu', name: 'Navbar', docs: c('navbar'), notes: 'Top navigation bar with brand, dropdowns and icons.' },
		{ id: 'drawer', name: 'Offcanvas', docs: c('offcanvas') },
		{ id: 'pagination', name: 'Pagination', docs: c('pagination') },
		{ id: 'popover', name: 'Popover', docs: c('popover') },
		{ id: 'progress', name: 'Progress', docs: c('progress'), notes: 'Striped, indeterminate and grouped (stacked) bars.' },
		{ id: 'radio-group', name: 'RadioGroup', docs: c('radio-group'), notes: `Single radios are Radio: ${c('radio')}` },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'Single or multiple selection from items.' },
		{ id: 'sidebar', name: 'Sidebar', docs: c('sidebar'), notes: 'Navigation items; nested items open as dropdown submenus.' },
		{ id: 'slider', name: 'Slider', docs: c('slider'), notes: 'Built on noUiSlider; two or more knobs give a range slider.' },
		{ id: 'spinner', name: 'Spinner', docs: c('spinner') },
		{ id: 'stepper', name: 'Steps', docs: c('steps'), notes: 'Horizontal or vertical, optionally numbered and clickable.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'table', name: 'Table', docs: c('table'), notes: 'Styling variants (bordered, striped, hover, responsive); no sorting or filtering is documented.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'textarea', name: 'Textarea', docs: c('textarea') },
		{ id: 'toast', name: 'Toast', docs: c('toast'), notes: 'A component you show and hide yourself; ToastContainer stacks several at a chosen placement. There is no function-call API.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltip') },
		{ id: 'typography', name: 'El', docs: c('el/typography'), notes: 'El is a generic element component whose props map to utility classes; the Core Features pages also cover colors, spacing, borders and backgrounds.' },
		{ id: 'grid', name: 'El', docs: c('el/grid'), notes: `Bootstrap-style row and column props on El. Columns has its own page: ${c('el/columns')}` },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo has no CONTRIBUTING, AGENTS.md or CLAUDE.md (.github holds issue templates and a deploy workflow), the README and roadmap do not discuss AI tools beyond describing the sponsoring company, the docs site has no llms.txt (404), there is no MCP server or agent skill, and the MIT LICENSE adds no AI terms.',
		sources: [
			`${repo}/blob/dev/README.md`,
			`${repo}/blob/dev/LICENSE`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.2.1-next.4', date: '2025-08-24' },
		lastCommit: '2026-10-29',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/yesvelte', 'https://github.com/yesvelte/yesvelte'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Install with the next tag: the README and install docs use yesvelte@next. The npm latest tag still points at 0.0.2-next.0, the very first Svelte 3 prerelease, so a plain npm install yesvelte gets that old build. A non-prerelease 0.2.0 also exists but has no dist-tag. The facts here are for 0.2.1-next.4, the version next points to and the docs site documents.',
		'Svelte 5 only from 0.0.2-next.220 on (peer svelte ^5.0.0); components use $props(), snippets and onclick-style event props. Earlier 0.0.2-next builds peered on Svelte 3, then Svelte 3 or 4, and used the older component syntax.',
		'The repo has release commits for 0.2.1-next.5 and 0.2.1-next.6 that never reached npm; the docs site is built from the same branch, so it can run slightly ahead of the published package.',
		'Styling: the package ships prebuilt stylesheets (Tabler and DaisyUI looks, plus RTL builds) that you link from your layout, so no Tailwind, Sass or Bootstrap install is needed. Components emit predictable y-<component> and y-<component>-<prop>-<value> classes, and theming means overriding those classes in your own CSS.',
		'Several components wrap third-party widgets that are installed as regular dependencies: Quill (Editor), noUiSlider (Slider), Litepicker (DatePicker), Inputmask (Input masks), Floating UI (positioning for popover, tooltip, dropdown, autocomplete and navbar/sidebar submenus) and focus-trap (Modal and Offcanvas).',
		'Icons come from the iconify-icon web component, which fetches icon data from the Iconify API at runtime by default.',
		'The Optimize CSS page in the docs is still a placeholder.',
		'Documented components with no canonical id of their own here: Dot, Status, Ribbon, Stamp, InputGroup, Fieldset and Columns. They are linked from the closest entries above.',
	],
})
