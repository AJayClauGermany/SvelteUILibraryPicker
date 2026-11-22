import { defineLibrary } from '../schema'

const fc = 'https://www.skeleton.dev/docs/svelte/framework-components'
const tw = 'https://www.skeleton.dev/docs/svelte/tailwind-components'
const design = 'https://www.skeleton.dev/docs/svelte/design'
// Source at the @skeletonlabs/skeleton-svelte@5.0.1 release commit.
const src = 'https://github.com/skeletonlabs/skeleton/blob/f80a3a1f59d4e3bff4291042523b3a38ac773333'
const svelte = `${src}/packages/skeleton-svelte/src/components`
const site = `${src}/sites/skeleton.dev/src`
const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']
const native = 'Native attribute on the element; no Skeleton-specific prop.'

export default defineLibrary({
	id: 'skeleton',
	name: 'Skeleton',
	description:
		'A Tailwind CSS-based design system that pairs themeable utility classes with accessible Svelte components powered by Zag.js state machines.',
	docs: 'https://www.skeleton.dev',
	repository: 'https://github.com/skeletonlabs/skeleton',
	packages: ['@skeletonlabs/skeleton-svelte', '@skeletonlabs/skeleton'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/skeletonlabs/skeleton/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.40.0',
		runes: true,
	},
	version: '5.0.1',
	styling: ['tailwind'],
	dependencies: [
		{
			package: 'tailwindcss',
			kind: 'tailwind',
			range: '^4.0.0',
			required: true,
			notes: 'Peer dependency of @skeletonlabs/skeleton; the install guides list Tailwind 4 as the minimum.',
			source: 'https://github.com/skeletonlabs/skeleton/blob/main/packages/skeleton/package.json',
		},
		{
			package: '@tailwindcss/vite',
			kind: 'build-plugin',
			required: false,
			notes: 'The Vite + Svelte guide installs it and registers it before the Svelte plugin; the SvelteKit guide sets Tailwind up through the Svelte CLI instead.',
			source: 'https://www.skeleton.dev/docs/svelte/get-started/installation/vite-svelte',
		},
	],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'rtl', 'cli', 'design-system'],
	components: [
		// Framework (Svelte) components
		{ id: 'accordion', name: 'Accordion', docs: `${fc}/accordion` },
		{
			id: 'navigation-menu',
			name: 'App Bar',
			docs: `${fc}/app-bar`,
			notes: 'Top-of-page header bar for app layouts.',
		},
		{ id: 'avatar', name: 'Avatar', docs: `${fc}/avatar` },
		{ id: 'carousel', name: 'Carousel', docs: `${fc}/carousel` },
		{
			id: 'collapsible',
			name: 'Collapsible',
			docs: `${fc}/collapsible`,
			notes: 'A CSS-only "Disclosures" pattern built on the native details element is also documented (beta).',
		},
		{ id: 'combobox', name: 'Combobox', docs: `${fc}/combobox` },
		{ id: 'date-picker', name: 'Date Picker', docs: `${fc}/date-picker` },
		{
			id: 'dialog',
			name: 'Dialog',
			docs: `${fc}/dialog`,
			notes: 'A CSS-only variant styling the native dialog element is also documented under Tailwind components (beta).',
			api: {
				style: 'compound',
				parts: ['Dialog', 'Dialog.Trigger', 'Dialog.Backdrop', 'Dialog.Positioner', 'Dialog.Content', 'Dialog.Title'],
				source: `${svelte}/dialog/anatomy/root.svelte`,
				props: {
					open: { name: 'open', notes: 'Not bindable; pair it with `onOpenChange`, or use `defaultOpen`.' },
					onOpenChange: { name: 'onOpenChange', notes: 'Receives a details object with `open`.' },
					title: { name: 'Dialog.Title', notes: 'A part, not a prop.' },
					closeOnEscape: { name: 'closeOnEscape', default: 'true' },
					closeOnOutsideClick: { name: 'closeOnInteractOutside', default: 'true' },
					size: null,
				},
			},
		},
		{ id: 'file-upload', name: 'File Upload', docs: `${fc}/file-upload` },
		{
			id: 'floating-panel',
			name: 'Floating Panel',
			docs: `${fc}/floating-panel`,
			notes: 'Draggable and resizable panel with minimize and maximize controls.',
		},
		{
			id: 'list',
			name: 'Listbox',
			docs: `${fc}/listbox`,
			notes: 'Selectable list supporting single or multiple selection.',
		},
		{
			id: 'locale-provider',
			name: 'Locale Provider',
			docs: `${fc}/locale-provider`,
			notes: 'Beta. Sets locale and reading direction for descendant components.',
		},
		{ id: 'marquee', name: 'Marquee', docs: `${fc}/marquee`, notes: 'Beta.' },
		{
			id: 'dropdown-menu',
			name: 'Menu',
			docs: `${fc}/menu`,
		},
		{
			id: 'context-menu',
			name: 'Menu (ContextTrigger)',
			docs: `${fc}/menu#context-menu`,
			notes: 'Same Menu component opened on right-click via a context trigger part.',
		},
		{
			id: 'sidebar',
			name: 'Navigation',
			docs: `${fc}/navigation`,
			notes: 'One component covering bar, rail, and sidebar navigation layouts.',
		},
		{
			id: 'bottom-navigation',
			name: 'Navigation (Bar)',
			docs: `${fc}/navigation#bar`,
			notes: 'The bar layout of the same Navigation component, meant to be fixed to the bottom on small screens.',
		},
		{ id: 'pagination', name: 'Pagination', docs: `${fc}/pagination` },
		{ id: 'popover', name: 'Popover', docs: `${fc}/popover` },
		{ id: 'portal', name: 'Portal', docs: `${fc}/portal` },
		{
			id: 'progress',
			name: 'Progress - Linear',
			docs: `${fc}/progress-linear`,
			notes: 'A circular variant has its own page: Progress - Circular.',
		},
		{
			id: 'qr-code',
			name: 'QR Code',
			docs: `${fc}/qr-code`,
			notes: 'Beta. Supports a frame, overlay and a download trigger.',
		},
		{ id: 'rating', name: 'Rating Group', docs: `${fc}/rating-group` },
		{
			id: 'toggle-group',
			name: 'Toggle Group',
			docs: `${fc}/toggle-group`,
			notes: 'A separate Segmented Control component is also available.',
		},
		{ id: 'slider', name: 'Slider', docs: `${fc}/slider` },
		{ id: 'stepper', name: 'Steps', docs: `${fc}/steps` },
		{
			id: 'switch',
			name: 'Switch',
			docs: `${fc}/switch`,
			api: {
				style: 'compound',
				parts: ['Switch', 'Switch.Control', 'Switch.Thumb', 'Switch.Label', 'Switch.HiddenInput'],
				source: `${svelte}/switch/anatomy/root.svelte`,
				props: {
					checked: { name: 'checked', notes: 'Not bindable; pair it with `onCheckedChange`, or use `defaultChecked`.' },
					onCheckedChange: { name: 'onCheckedChange', notes: 'Receives a details object with `checked`.' },
					disabled: { name: 'disabled' },
					name: { name: 'name' },
					required: { name: 'required' },
					label: { name: 'Switch.Label', notes: 'A part; the root `label` prop is an accessible string only.' },
				},
			},
		},
		{
			id: 'tabs',
			name: 'Tabs',
			docs: `${fc}/tabs`,
			api: {
				style: 'compound',
				parts: ['Tabs', 'Tabs.List', 'Tabs.Trigger', 'Tabs.Indicator', 'Tabs.Content'],
				source: `${svelte}/tabs/anatomy/root.svelte`,
				props: {
					value: { name: 'value', notes: 'Not bindable; pair it with `onValueChange`, or use `defaultValue`.' },
					onValueChange: { name: 'onValueChange', notes: 'Receives a details object with `value`.' },
					items: null,
					orientation: { name: 'orientation', values: ['horizontal', 'vertical'], default: 'horizontal' },
					activationMode: { name: 'activationMode', values: ['manual', 'automatic'], default: 'automatic' },
				},
			},
		},
		{ id: 'tags-input', name: 'Tags Input', docs: `${fc}/tags-input` },
		{ id: 'toast', name: 'Toast', docs: `${fc}/toast` },
		{
			id: 'tooltip',
			name: 'Tooltip',
			docs: `${fc}/tooltip`,
			api: {
				style: 'compound',
				parts: ['Tooltip', 'Tooltip.Trigger', 'Tooltip.Positioner', 'Tooltip.Content'],
				source: `${svelte}/tooltip/anatomy/root.svelte`,
				props: {
					content: { name: 'Tooltip.Content', notes: 'A part, not a prop.' },
					placement: {
						name: 'positioning.placement',
						values: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'],
						default: 'bottom',
						notes: 'Passed inside the `positioning` object, e.g. `positioning={{ placement: \'top\' }}`.',
					},
					open: { name: 'open', notes: 'Not bindable; pair it with `onOpenChange`, or use `defaultOpen`.' },
					openDelay: { name: 'openDelay', default: '400' },
					closeDelay: { name: 'closeDelay', default: '150' },
				},
			},
		},
		{ id: 'tree-view', name: 'Tree View', docs: `${fc}/tree-view` },

		// Tailwind (CSS class) components
		{
			id: 'badge',
			name: 'Badges',
			docs: `${tw}/badges`,
			notes: 'CSS classes only. Interactive "Chips" are documented separately.',
		},
		{
			id: 'button',
			name: 'Buttons',
			docs: `${tw}/buttons`,
			notes: 'CSS classes only.',
			api: {
				style: 'css',
				parts: ['<button class="btn">'],
				source: `${src}/packages/skeleton/src/utilities/buttons.css`,
				props: {
					onclick: { name: 'onclick', notes: native },
					disabled: { name: 'disabled', notes: native },
					href: { name: 'href', notes: 'Put the `btn` classes on an <a> element.' },
					type: { name: 'type', values: ['button', 'submit', 'reset'], notes: native },
					variant: { name: 'preset-*', values: ['preset-filled', 'preset-tonal', 'preset-outlined'], notes: 'Preset utility classes, not a prop.' },
					size: { name: 'btn-*', values: sizes.map(size => `btn-${size}`) },
					color: {
						name: 'preset-*-{color}',
						values: ['brand', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'],
						notes: 'Part of the preset class, e.g. `preset-filled-primary-500` or `preset-tonal-primary`.',
					},
					loading: null,
				},
			},
		},
		{ id: 'card', name: 'Cards', docs: `${tw}/cards`, notes: 'CSS classes only.' },
		{
			id: 'alert-dialog',
			name: 'Dialogs (Alert Dialog)',
			docs: `${tw}/dialogs#alert-dialog`,
			notes: 'CSS classes only (beta); the native dialog element with role="alertdialog". The component-based Dialog is listed separately.',
		},
		{ id: 'separator', name: 'Dividers', docs: `${tw}/dividers`, notes: 'CSS classes only.' },
		{ id: 'skeleton', name: 'Placeholders', docs: `${tw}/placeholders`, notes: 'CSS classes only.' },
		{ id: 'table', name: 'Tables', docs: `${tw}/tables`, notes: 'CSS classes only.' },
		{
			id: 'input',
			name: 'Forms and Inputs: Input',
			docs: `${tw}/forms#input`,
			notes: 'Tailwind classes for native input elements.',
			api: {
				style: 'css',
				parts: ['<label class="label">', '<span class="label-text">', '<input class="input">'],
				source: `${site}/content/docs/tailwind-components/forms.mdx`,
				props: {
					value: { name: 'value', bindable: true, notes: 'Native `bind:value` on the <input>.' },
					oninput: { name: 'oninput', notes: native },
					type: { name: 'type', notes: native },
					placeholder: { name: 'placeholder', notes: native },
					disabled: { name: 'disabled', notes: native },
					readonly: { name: 'readonly', notes: native },
					invalid: null,
					label: { name: 'label-text', notes: 'Class on your own label text; wrap both in `<label class="label">`.' },
					helperText: null,
					size: { name: 'field-*', values: sizes.map(size => `field-${size}`) },
				},
			},
		},
		{
			id: 'textarea',
			name: 'Forms and Inputs: Textarea',
			docs: `${tw}/forms#textarea`,
			notes: 'Tailwind classes for the native textarea.',
		},
		{
			id: 'select',
			name: 'Forms and Inputs: Select',
			docs: `${tw}/forms#select`,
			notes: 'Tailwind classes for the native select. See also Listbox and Combobox for component-based selection.',
			api: {
				style: 'css',
				parts: ['<select class="select">', '<option>'],
				source: `${site}/components/examples/tailwind-components/forms/select.astro`,
				props: {
					value: { name: 'value', bindable: true, notes: 'Native `bind:value` on the <select>.' },
					onValueChange: { name: 'onchange', notes: native },
					items: null,
					multiple: { name: 'multiple', notes: native },
					placeholder: { name: '<option disabled selected>', notes: 'No placeholder prop; the docs use a disabled first option.' },
					disabled: { name: 'disabled', notes: native },
					name: { name: 'name', notes: native },
				},
			},
		},
		{
			id: 'checkbox',
			name: 'Forms and Inputs: Checkboxes',
			docs: `${tw}/forms#checkboxes`,
			notes: 'Tailwind classes for native checkboxes; no checkbox component.',
			api: {
				style: 'css',
				parts: ['<input class="checkbox" type="checkbox">'],
				source: `${src}/packages/skeleton/src/utilities/form-radios-checks.css`,
				props: {
					checked: { name: 'checked', bindable: true, notes: 'Native `bind:checked`.' },
					onCheckedChange: { name: 'onchange', notes: native },
					indeterminate: { name: 'indeterminate', bindable: true, notes: 'Native DOM property; the `checkbox` class styles it.' },
					disabled: { name: 'disabled', notes: native },
					name: { name: 'name', notes: native },
					value: { name: 'value', notes: native },
					required: { name: 'required', notes: native },
					label: null,
				},
			},
		},
		{
			id: 'radio-group',
			name: 'Forms and Inputs: Radio Groups',
			docs: `${tw}/forms#radio-groups`,
			notes: 'Tailwind classes for native radio inputs.',
		},
		{
			id: 'label',
			name: 'Forms and Inputs: Labels',
			docs: `${tw}/forms#labels`,
			notes: 'Tailwind classes for native labels.',
		},
		{
			id: 'meter',
			name: 'Forms and Inputs: Meter',
			docs: `${tw}/forms#meter`,
			notes: 'Tailwind classes for the native meter element.',
		},
		{
			id: 'color-picker',
			name: 'Forms and Inputs: Color',
			docs: `${tw}/forms#color`,
			notes: 'Tailwind classes for the native color input; no custom picker component.',
		},
		{
			id: 'form',
			name: 'Forms and Inputs: Fieldsets',
			docs: `${tw}/forms#fieldsets`,
			notes: 'Fieldset/legend styling only; no validation helpers.',
		},

		// Design system
		{
			id: 'typography',
			name: 'Typography',
			docs: `${design}/typography`,
			notes: 'CSS classes only: opt-in utility classes for headings, paragraphs, code and other native text elements plus a theme-driven type scale.',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The docs publish llms.txt files following the llmstxt.org convention, including a Svelte-specific full-docs file, and the repo ships Claude Code skills for maintainers. No restrictions on AI use were found in the repo or contribution guide.',
		sources: [
			'https://www.skeleton.dev/docs/svelte/resources/llms',
			'https://www.skeleton.dev/llms.txt',
			'https://www.skeleton.dev/llms-svelte.txt',
			'https://github.com/skeletonlabs/skeleton/tree/main/.claude/skills',
		],
		llmsTxt: 'https://www.skeleton.dev/llms.txt',
	},
	conventions: {
		'events': {
			value: 'callback props from Zag: `onOpenChange={(details) => ...}`; native `onclick` etc. on parts',
			notes: 'CSS-class components use plain native events.',
			source: `${site}/components/examples/framework-components/tabs/svelte/controlled.svelte`,
		},
		'binding': {
			value: 'no `bind:`; pass `open` / `value` / `checked` with the matching change callback',
			notes: 'No component prop is declared `$bindable`.',
			source: `${site}/components/examples/framework-components/switch/svelte/default.svelte`,
		},
		'ref': {
			value: 'no `ref` prop; render your own element with the `element` snippet to get one',
			source: `${svelte}/switch/anatomy/root.svelte`,
		},
		'class': {
			value: 'passed to the part\'s element via Zag\'s `mergeProps`',
			notes: 'Default styles target data-scope/data-part attributes; Dialog ships unstyled.',
			source: `${site}/content/docs/get-started/fundamentals.mdx`,
		},
		'rest-props': {
			value: 'forwarded to each part\'s element',
			source: `${site}/content/docs/get-started/fundamentals.mdx`,
		},
		'render-delegation': {
			value: '`element` snippet that receives `attributes` to spread',
			source: `${site}/content/docs/get-started/fundamentals.mdx`,
		},
		'composition': {
			value: 'compound parts on a root component (`<Dialog>`, `Dialog.Trigger`, `Dialog.Content`...); CSS classes for native form elements and buttons',
			source: `${svelte}/dialog/modules/anatomy.ts`,
		},
	},
	lastVerified: '2026-11-22',
	notes: [
		'Install both @skeletonlabs/skeleton (Tailwind theme and utilities) and @skeletonlabs/skeleton-svelte (components); the same docs also cover a React package.',
		'Entries marked "CSS classes only" come from the Tailwind components section and are styles for native HTML elements rather than Svelte components.',
		'Locale Provider, Marquee and QR Code are beta. Segmented Control, Chips and Progress - Circular have no separate canonical entry here (see the Toggle Group, Badges and Progress notes).',
		'Code Block (an integration guide for Shiki), Iconography (icon sizing utilities; the docs recommend Lucide) and the Layouts guide describe patterns rather than shipped components, so they are not listed.',
		'The docs cookbook has recipes (e.g. breadcrumbs, alerts, light switch, clipboard) that are copyable patterns, not package components, so they are not listed.',
	],
})
