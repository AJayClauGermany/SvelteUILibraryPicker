import { defineLibrary } from '../schema'

// The docs site (docs.svar.dev) is not in the repo, so API page URLs can't be verified.
// Component links go to the official live samples, whose hash routes are defined in
// svelte/demos/routes.js (`/<route>/:skin`) and whose URL shape matches the README's demo link.
const c = (route: string) => `https://docs.svar.dev/svelte/core/samples/#/${route}/willow`

export default defineLibrary({
	id: 'svar-core',
	name: 'SVAR Svelte Core',
	description:
		'A compact Svelte 5 set of form controls, selects, calendars, pickers and popups from the SVAR widget family, themed with CSS variables and ready for localization.',
	docs: 'https://docs.svar.dev/svelte/core/getting_started/',
	repository: 'https://github.com/svar-widgets/core',
	packages: ['@svar-ui/svelte-core'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svar-widgets/core/blob/main/license.txt',
	},
	svelte: {
		// No `svelte` peerDependency is declared. Svelte 5 support was added in 2.0.1 (whatsnew.md);
		// components are written with runes and the repo builds against Svelte 5.
		supported: [5],
		runes: true,
	},
	version: '2.6.1',
	styling: ['css'],
	features: ['typescript', 'theming', 'dark-mode', 'i18n'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button') },
		{ id: 'toggle', name: 'TwoState', docs: c('twostate') },
		{ id: 'toggle-group', name: 'Segmented', docs: c('segmented') },
		{ id: 'input', name: 'Text', docs: c('inputs') },
		{ id: 'textarea', name: 'TextArea', docs: c('textarea') },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox'), notes: 'CheckboxGroup handles sets of options.' },
		{ id: 'radio-group', name: 'RadioButtonGroup', docs: c('radio'), notes: 'RadioButton for single buttons.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'select', name: 'RichSelect', docs: c('richselect'), notes: 'Select is the native-select variant.' },
		{ id: 'combobox', name: 'Combo', docs: c('combo') },
		{ id: 'tags-input', name: 'MultiCombo', docs: c('multicombo') },
		{ id: 'slider', name: 'Slider', docs: c('slider') },
		{ id: 'number-input', name: 'Counter', docs: c('counter') },
		{ id: 'color-picker', name: 'ColorPicker', docs: c('colorpicker'), notes: 'ColorSelect (preset swatches) and ColorBoard are related.' },
		{ id: 'form', name: 'Field', docs: c('field'), notes: 'Label and layout wrapper for a form control.' },
		{ id: 'dialog', name: 'ModalArea', docs: c('modalarea'), notes: 'Modal and the showModal helper (Globals) are shown in the Messages sample.' },
		{ id: 'toast', name: 'showNotice (Globals)', docs: c('messages'), notes: 'Notices are raised through the showNotice helper from Globals.' },
		{ id: 'drawer', name: 'SideArea', docs: c('sidearea') },
		{ id: 'popover', name: 'Popup', docs: c('popup'), notes: 'Dropdown attaches a popup to a control.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltips') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'pagination', name: 'Pager', docs: c('pager') },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar') },
		{ id: 'calendar', name: 'Calendar', docs: c('calendar'), notes: 'Month is the bare month grid.' },
		{ id: 'date-picker', name: 'DatePicker', docs: c('datepicker') },
		{ id: 'date-range-picker', name: 'DateRangePicker', docs: c('daterangepicker'), notes: 'RangeCalendar is the inline version.' },
		{ id: 'time-picker', name: 'TimePicker', docs: c('timepicker') },
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repository ships an agent skill (docs/.skill/SKILL.md plus one Markdown reference per widget) written for AI coding assistants. No restrictions on AI use were found; the LICENSE is plain MIT.',
		sources: [
			'https://github.com/svar-widgets/core/blob/main/docs/.skill/SKILL.md',
			'https://github.com/svar-widgets/core/tree/main/docs/.skill',
		],
	},
	lastVerified: '2026-11-03',
	notes: [
		'Component links go to the official live samples because the API docs site is not in the repository and could not be verified per component.',
		'The package declares no svelte peerDependency; Svelte 5 support comes from the changelog (2.0.1) and the runes-based source.',
		'Themes: Willow, WillowDark and Material wrapper components.',
		'Menu, Toolbar, file uploader and other widgets are separate SVAR packages.',
	],
})
