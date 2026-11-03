import { defineLibrary } from '../schema'

// Docs are a Storybook build (sveltestrap.js.org). Page ids come from each MDX file's
// <Meta title="..."> in the repo, sanitized the Storybook way (lowercase, "/" -> "-").
const c = (storyId: string) => `https://sveltestrap.js.org/?path=/docs/${storyId}--docs`

export default defineLibrary({
	id: 'sveltestrap',
	name: 'Sveltestrap',
	description:
		"Svelte wrappers around Bootstrap 5's markup and behaviour, so you get Bootstrap components without Bootstrap's JavaScript or jQuery.",
	docs: 'https://sveltestrap.js.org',
	repository: 'https://github.com/sveltestrap/sveltestrap',
	packages: ['@sveltestrap/sveltestrap'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/sveltestrap/sveltestrap/blob/main/LICENSE',
	},
	svelte: {
		supported: [4, 5],
		peerRange: '^4.0.0 || ^5.0.0 || ^5.0.0-next.0',
		runes: false,
	},
	version: '7.1.0',
	styling: ['css'],
	features: ['typescript', 'theming', 'dark-mode', 'forms'],
	components: [
		{ id: 'button', name: 'Button', docs: c('components-button') },
		{ id: 'button-group', name: 'ButtonGroup', docs: c('components-buttongroup'), notes: 'ButtonToolbar groups several button groups.' },
		{ id: 'dropdown-menu', name: 'Dropdown', docs: c('components-dropdown'), notes: 'Built from DropdownToggle, DropdownMenu and DropdownItem.' },
		{
			id: 'input',
			name: 'Input',
			docs: c('form-input'),
			notes: 'One Input component renders many native types (text, email, number, date/time, color, range, file, select, checkbox, radio, switch, textarea).',
		},
		{ id: 'textarea', name: 'Input', docs: c('form-input'), notes: 'type="textarea".' },
		{ id: 'checkbox', name: 'Input', docs: c('form-input'), notes: 'type="checkbox".' },
		{ id: 'radio-group', name: 'Input', docs: c('form-input'), notes: 'type="radio" with a group binding.' },
		{ id: 'switch', name: 'Input', docs: c('form-input'), notes: 'type="switch".' },
		{ id: 'select', name: 'Input', docs: c('form-input'), notes: 'type="select" (native select).' },
		{ id: 'slider', name: 'Input', docs: c('form-input'), notes: 'type="range" (native range input).' },
		{ id: 'file-upload', name: 'Input', docs: c('form-input'), notes: 'type="file" (native file input).' },
		{ id: 'form', name: 'FormGroup', docs: c('form-formgroup'), notes: 'Validation, FormFeedback and InputGroup are documented separately.' },
		{ id: 'dialog', name: 'Modal', docs: c('components-modal') },
		{ id: 'drawer', name: 'Offcanvas', docs: c('components-offcanvas') },
		{ id: 'popover', name: 'Popover', docs: c('components-popovers') },
		{ id: 'tooltip', name: 'Tooltip', docs: c('components-tooltip') },
		{ id: 'tabs', name: 'TabContent', docs: c('components-tabs'), notes: 'Uses TabContent with TabPane.' },
		{ id: 'breadcrumb', name: 'Breadcrumb', docs: c('components-breadcrumbs') },
		{ id: 'pagination', name: 'Pagination', docs: c('components-pagination') },
		{ id: 'navigation-menu', name: 'Navbar', docs: c('components-navbar'), notes: 'Nav covers simpler link lists and pills.' },
		{ id: 'accordion', name: 'Accordion', docs: c('components-accordion') },
		{ id: 'card', name: 'Card', docs: c('components-card') },
		{ id: 'grid', name: 'Grid', docs: c('layout-grid'), notes: 'Container, Row and Col; Container has its own page.' },
		{ id: 'alert', name: 'Alert', docs: c('components-alerts') },
		{ id: 'toast', name: 'Toast', docs: c('components-toast') },
		{ id: 'progress', name: 'Progress', docs: c('components-progress') },
		{ id: 'spinner', name: 'Spinner', docs: c('components-spinner') },
		{ id: 'badge', name: 'Badge', docs: c('components-badges') },
		{ id: 'table', name: 'Table', docs: c('content-tables') },
		{ id: 'list', name: 'ListGroup', docs: c('components-listgroup') },
		{ id: 'carousel', name: 'Carousel', docs: c('components-carousel') },
		{ id: 'image', name: 'Image', docs: c('content-images') },
		{ id: 'theme-switcher', name: 'Theme', docs: c('components-theme'), notes: 'Theme provider plus ThemeToggler and a useColorMode helper for light/dark/auto.' },
	],
	ai: {
		status: 'no-statement',
		summary:
			'The repository has no AGENTS.md, CLAUDE.md, llms.txt or editor AI rules, and CONTRIBUTING.md, DEVELOPMENT.md and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/sveltestrap/sveltestrap/blob/main/CONTRIBUTING.md',
			'https://github.com/sveltestrap/sveltestrap/blob/main/LICENSE',
		],
	},
	lastVerified: '2026-11-03',
	notes: [
		'Bootstrap CSS is not bundled: load Bootstrap 5 yourself (CDN, CSS import) or use the Styles component.',
		'Components use Svelte 4 syntax (export let, slots); Svelte 5 works through the peer range but the API is not rune-based.',
		'Latest release 7.1.0 dates from February 2025. For Svelte 3, the original sveltestrap package is the one to use.',
		'Form controls are thin wrappers around native inputs, so there is no custom number stepper, date picker or color picker.',
	],
})
