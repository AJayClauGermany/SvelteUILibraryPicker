import { defineLibrary } from '../schema'

// The docs site has no per-component pages: every component is a demo card on the
// home page (src/demos.md in the repo), with a heading anchor built as
// `${title.toLowerCase().replaceAll(" ", "-")}-demo` (see src/routes/_card.svelte). Cards whose
// demo has no interactive controls (Bottom sheet, Snackbar, Time picker, Layer) render a plain
// button with no id, so they have no anchor and link to the home page instead.
const home = 'https://kendell.dev/m3-svelte/'
const c = (anchor: string) => `${home}#${anchor}-demo`
// The docs site was unreachable when checking dependencies, so sources point at the docs
// source files in the repo instead.
const src = 'https://github.com/KTibow/m3-svelte/blob/main'
const quickStart = `${src}/src/routes/docs/quick-start/+page.svelte`
// The repo has no release tags; props were read at the "patch release" commit that set 7.2.1.
const v721 = 'https://github.com/KTibow/m3-svelte/blob/0bcfefa36d61234e761886b48215355573bb050e'
const lib = (path: string) => `${v721}/src/lib/${path}.svelte`
const demos = `${v721}/src/demos.md`
const nativeInput = 'Passed through to the native <input>.'

export default defineLibrary({
	id: 'm3-svelte',
	name: 'M3 Svelte',
	description:
		"A runes-based Svelte 5 take on Google's Material 3 (including M3 Expressive), covering components, motion, shapes and generated color themes.",
	docs: 'https://kendell.dev/m3-svelte/',
	repository: 'https://github.com/KTibow/m3-svelte',
	packages: ['m3-svelte'],
	license: {
		spdx: 'Apache-2.0 OR GPL-3.0-only',
		url: 'https://github.com/KTibow/m3-svelte/blob/main/LICENSE',
		notes: 'Dual-licensed: you may use it under either Apache 2.0 or GPL 3.0 (only); both texts are in the single LICENSE file.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.40.0',
		runes: true,
	},
	version: '7.2.1',
	styling: ['css'],
	dependencies: [
		{
			package: 'vite-plugin-functions-mixins',
			kind: 'build-plugin',
			range: '^0.4.1',
			required: true,
			notes: 'npm marks this peer optional, but the quick start always installs it and registers it in vite.config with m3-svelte as a dep, since the component styles use CSS custom functions and @apply mixins.',
			source: quickStart,
		},
		{
			package: '@fontsource-variable/google-sans-flex',
			kind: 'peer',
			required: false,
			notes: 'Font suggested by the quick start; you can instead point --m3-font at a font of your choice.',
			source: quickStart,
		},
		{
			package: 'vite-plugin-token-shaker',
			kind: 'build-plugin',
			required: false,
			notes: 'Optional quick-start add-on that inlines or mangles the design tokens to shrink CSS.',
			source: quickStart,
		},
		{
			package: '@ktibow/material-color-utilities-nightly',
			kind: 'peer',
			range: '^0.4.1768930731000',
			required: false,
			notes: 'Optional peer, imported only by the m3-svelte/etc/colors helpers (generating a color scheme in code) and the UnoCSS preset. Themes pasted from the theme page do not need it.',
			source: `${src}/src/lib/etc/colors.ts`,
		},
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			required: false,
			notes: 'Only for the Tailwind app type: the theme page adds m3-svelte/etc/tailwind-styles.css (Tailwind v4 @theme syntax). Docs warn Tailwind may not handle the CSS mixins yet.',
			source: `${src}/src/routes/theme/SchemeShowcase.svelte`,
		},
		{
			package: 'unocss',
			kind: 'unocss',
			required: false,
			notes: 'Only for the m3-svelte/etc/unocss-preset export; the docs pages do not cover it.',
			source: `${src}/src/lib/etc/unocss-preset.ts`,
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'design-system'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), api: {
			style: 'props',
			parts: ['Button'],
			source: lib('buttons/Button'),
			props: {
				onclick: { name: 'onclick', notes: 'Passed through to the native <button>.' },
				disabled: { name: 'disabled', notes: 'Passed through to the native <button>.' },
				href: { name: 'href', notes: 'Renders an <a> instead of a <button>.' },
				type: { name: 'type', notes: 'Defaults to "button" when onclick is set, otherwise "submit".' },
				variant: { name: 'variant', values: ['elevated', 'filled', 'tonal', 'outlined', 'text'], default: 'filled' },
				size: { name: 'size', values: ['xs', 's', 'm', 'l', 'xl'], default: 's' },
				color: null,
				loading: null,
			},
		} },
		{ id: 'button-group', name: 'ConnectedButtons', docs: c('connected-buttons'), notes: 'Can also act as a single/multi-select segmented control.' },
		{ id: 'floating-action-button', name: 'FAB', docs: c('fab') },
		{ id: 'split-button', name: 'SplitButton', docs: c('split-button'), notes: 'Main action plus a Menu of alternatives; elevated, filled, tonal and outlined variants.' },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'input', name: 'TextField', docs: c('text-field'), notes: 'Filled and outlined (TextFieldOutlined) variants.', api: {
			style: 'props',
			parts: ['TextField'],
			source: lib('forms/TextField'),
			props: {
				value: { name: 'value', bindable: true },
				oninput: { name: 'oninput', notes: nativeInput },
				type: { name: 'type', notes: nativeInput },
				placeholder: { name: 'placeholder', notes: 'The component sets a blank placeholder for its floating label; one you pass replaces it.' },
				disabled: { name: 'disabled', default: 'false' },
				readonly: { name: 'readonly', notes: nativeInput },
				invalid: { name: 'error', default: 'false' },
				label: { name: 'label', notes: 'Required.' },
				helperText: null,
				size: null,
			},
		} },
		{ id: 'textarea', name: 'TextFieldMultiline', docs: c('text-field') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), api: {
			style: 'props',
			parts: ['label', 'Checkbox', 'input type="checkbox"'],
			source: lib('forms/Checkbox'),
			props: {
				checked: { name: 'checked', on: 'input type="checkbox"', bindable: true, notes: 'Checkbox only styles a native checkbox you pass as its child.' },
				onCheckedChange: { name: 'onchange', on: 'input type="checkbox"', notes: 'Native event on your own input.' },
				indeterminate: null,
				disabled: { name: 'disabled', on: 'input type="checkbox"' },
				name: { name: 'name', on: 'input type="checkbox"' },
				value: { name: 'value', on: 'input type="checkbox"' },
				required: { name: 'required', on: 'input type="checkbox"' },
				label: null,
			},
		} },
		{ id: 'radio-group', name: 'RadioAnim1', docs: c('radio'), notes: 'Three animation variants: RadioAnim1, RadioAnim2, RadioAnim3.' },
		{ id: 'switch', name: 'Switch', docs: c('switch'), api: {
			style: 'props',
			parts: ['label', 'Switch'],
			source: lib('forms/Switch'),
			props: {
				checked: { name: 'checked', bindable: true, default: 'false' },
				onCheckedChange: { name: 'onchange', notes: nativeInput },
				disabled: { name: 'disabled', default: 'false' },
				name: { name: 'name', notes: nativeInput },
				required: { name: 'required', notes: nativeInput },
				label: null,
			},
		} },
		{ id: 'select', name: 'Select', docs: c('select'), notes: 'SelectOutlined is the outlined variant.', api: {
			style: 'props',
			parts: ['Select'],
			source: lib('forms/Select'),
			props: {
				value: { name: 'value', bindable: true },
				onValueChange: { name: 'onchange', notes: 'Passed through to the native <select>.' },
				items: { name: 'options', notes: 'Objects with text and value, plus an optional icon.' },
				multiple: null,
				placeholder: null,
				disabled: { name: 'disabled', notes: 'Passed through to the native <select>.' },
				name: { name: 'name', notes: 'Passed through to the native <select>.' },
			},
		} },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), api: {
			style: 'props',
			parts: ['Dialog'],
			source: lib('containers/Dialog'),
			props: {
				open: { name: 'open', bindable: true },
				onOpenChange: { name: 'onclose', notes: 'Native <dialog> event passed through; fires on close only. Passing your own ontoggle replaces the handler that keeps bind:open in sync.' },
				title: { name: 'headline', notes: 'Required.' },
				closeOnEscape: { name: 'closedby', values: ['any', 'closerequest', 'none'], default: 'any', notes: 'Native <dialog> attribute; "none" blocks Escape too.' },
				closeOnOutsideClick: { name: 'closedby', values: ['any', 'closerequest', 'none'], default: 'any', notes: 'Native <dialog> attribute; only "any" closes on a backdrop click.' },
				size: null,
			},
		} },
		{ id: 'drawer', name: 'BottomSheet', docs: home, notes: 'Bottom edge only. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'VariableTabs sizes tabs to their content.', api: {
			style: 'props',
			parts: ['Tabs'],
			source: lib('nav/Tabs'),
			props: {
				value: { name: 'tab', bindable: true, notes: 'The value of the active item; render the panels yourself.' },
				onValueChange: { name: 'onchange', notes: 'Passed through to each native radio <input>.' },
				items: { name: 'items', notes: 'Objects with name and value, plus an optional icon.' },
				orientation: null,
				activationMode: null,
			},
		} },
		{ id: 'navigation-menu', name: 'NavCMLX', docs: c('nav-for-c/m/l/x'), notes: 'Adaptive navigation that changes form by window size class.' },
		{ id: 'sidebar', name: 'NavigationRail', docs: c('navigation-rail') },
		{ id: 'card', name: 'Card', docs: c('card') },
		{ id: 'separator', name: 'Divider', docs: c('list'), notes: 'Shown inside the List demo; no demo of its own.' },
		{ id: 'toast', name: 'Snackbar', docs: home, notes: 'Queued through a snackbar() helper. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'progress', name: 'LinearProgress', docs: c('progress'), notes: 'Also wavy and circular variants, plus time-estimate versions.' },
		{ id: 'spinner', name: 'LoadingIndicator', docs: c('loading') },
		{ id: 'badge', name: 'Chip', docs: c('chip'), notes: 'Material chips are interactive (assist, filter, input), not passive badges.' },
		{ id: 'list', name: 'ListItem', docs: c('list'), notes: 'Docs flag it as not yet updated to M3 Expressive.' },
		{ id: 'date-picker', name: 'DateField', docs: c('date-field'), notes: 'Text field with a docked calendar picker; DateFieldOutlined is the outlined variant.' },
		{ id: 'time-picker', name: 'TimePickerDial', docs: home, notes: 'Dial-style picker opened in a dialog. Its demo card has no anchor, so the link goes to the docs home page.' },
		{ id: 'icon', name: 'Icon', docs: c('icons'), notes: 'Renders Iconify-format icon objects; @ktibow/iconset-material-symbols comes in as a regular dependency of 7.2.1.' },
	],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site builds and links an llms.txt aimed at AI coding tools, bundling the quick-start and walkthrough pages plus every component demo. No restrictions on AI use were found.',
		sources: [
			'https://github.com/KTibow/m3-svelte/blob/main/vite-plugin-llms-txt.ts',
			'https://github.com/KTibow/m3-svelte/blob/main/scripts/llms-txt-template.md',
			'https://kendell.dev/m3-svelte/llms.txt',
		],
		llmsTxt: 'https://kendell.dev/m3-svelte/llms.txt',
	},
	conventions: {
		events: { value: 'native event attributes (`onclick`, `onchange`) passed through to the element', source: lib('forms/Switch') },
		binding: { value: '`bind:` on props (`bind:value`, `bind:checked`, `bind:open`, `bind:tab`)', source: demos },
		class: {
			value: 'no class prop; `class` travels with the rest props to the native element',
			notes: 'On Button the spread comes after the built-in class attribute, so your class replaces it; on TextField, Switch and Select it lands on the inner <input>/<select>, not the wrapper.',
			source: lib('buttons/Button'),
		},
		'rest-props': {
			value: 'forwarded to the native element',
			notes: 'For example the <button>/<a> of Button, the <input> of TextField and Switch, the <select> of Select and the <dialog> of Dialog.',
			source: lib('forms/TextField'),
		},
		'render-delegation': {
			value: 'Button renders `<a>` with `href`, `<label>` with `label`, `<summary>` with `summary`',
			source: lib('buttons/Button'),
		},
		composition: {
			value: 'single components with props and snippets; form controls wrap native inputs',
			notes: 'Checkbox and Switch must sit inside your own <label>; Checkbox takes the native checkbox as its child.',
			source: demos,
		},
	},
	lastVerified: '2026-11-22',
	notes: [
		'Docs have no per-component pages; component links point to the demo cards on the docs home page.',
		'Also ships Material motion helpers (UI transitions, easings), a state-layer CSS class and shape paths, which have no comparison category.',
		'ChipChooser and DatePickerDocked are exported but have no demo card of their own, so they are not listed here.',
	],
})
