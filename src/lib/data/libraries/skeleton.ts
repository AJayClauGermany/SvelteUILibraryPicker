import { defineLibrary } from '../schema'

const fc = 'https://www.skeleton.dev/docs/svelte/framework-components'
const tw = 'https://www.skeleton.dev/docs/svelte/tailwind-components'
const design = 'https://www.skeleton.dev/docs/svelte/design'

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
	features: ['typescript', 'accessibility', 'theming', 'dark-mode', 'rtl', 'cli', 'design-system'],
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
		{ id: 'switch', name: 'Switch', docs: `${fc}/switch` },
		{ id: 'tabs', name: 'Tabs', docs: `${fc}/tabs` },
		{ id: 'tags-input', name: 'Tags Input', docs: `${fc}/tags-input` },
		{ id: 'toast', name: 'Toast', docs: `${fc}/toast` },
		{ id: 'tooltip', name: 'Tooltip', docs: `${fc}/tooltip` },
		{ id: 'tree-view', name: 'Tree View', docs: `${fc}/tree-view` },

		// Tailwind (CSS class) components
		{
			id: 'badge',
			name: 'Badges',
			docs: `${tw}/badges`,
			notes: 'CSS classes only. Interactive "Chips" are documented separately.',
		},
		{ id: 'button', name: 'Buttons', docs: `${tw}/buttons`, notes: 'CSS classes only.' },
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
		},
		{
			id: 'checkbox',
			name: 'Forms and Inputs: Checkboxes',
			docs: `${tw}/forms#checkboxes`,
			notes: 'Tailwind classes for native checkboxes; no checkbox component.',
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
	lastVerified: '2026-11-04',
	notes: [
		'Install both @skeletonlabs/skeleton (Tailwind theme and utilities) and @skeletonlabs/skeleton-svelte (components); the same docs also cover a React package.',
		'Entries marked "CSS classes only" come from the Tailwind components section and are styles for native HTML elements rather than Svelte components.',
		'Locale Provider, Marquee and QR Code are beta. Segmented Control, Chips and Progress - Circular have no separate canonical entry here (see the Toggle Group, Badges and Progress notes).',
		'Code Block (an integration guide for Shiki), Iconography (icon sizing utilities; the docs recommend Lucide) and the Layouts guide describe patterns rather than shipped components, so they are not listed.',
		'The docs cookbook has recipes (e.g. breadcrumbs, alerts, light switch, clipboard) that are copyable patterns, not package components, so they are not listed.',
	],
})
