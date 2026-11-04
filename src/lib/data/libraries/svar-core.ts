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
		// No `svelte` peerDependency is declared (nor by its @svar-ui/lib-* dependencies).
		// Svelte 5 support was added in 2.0.1 (whatsnew.md); every component uses $props()
		// and the monorepo builds against svelte 5.56.x.
		supported: [5],
		runes: true,
	},
	version: '2.6.1',
	styling: ['css'],
	// No peerDependencies (npm view @svar-ui/svelte-core@2.6.1); the README install steps only import the package.
	dependencies: [],
	features: ['typescript', 'semantic-colors', 'theming', 'dark-mode', 'i18n'],
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
		{ id: 'dialog', name: 'ModalArea', docs: c('modalarea'), notes: 'Free-form modal container; the Modal message box is listed under Alert Dialog.' },
		{ id: 'alert-dialog', name: 'Modal', docs: c('messages'), notes: 'Confirm box with ok/cancel buttons; also raised through the showModal helper from Globals.' },
		{ id: 'toast', name: 'showNotice (Globals)', docs: c('messages'), notes: 'Notices are raised through the showNotice helper from Globals.' },
		{ id: 'drawer', name: 'SideArea', docs: c('sidearea') },
		{ id: 'popover', name: 'Popup', docs: c('popup'), notes: 'Dropdown attaches a popup to a control.' },
		{ id: 'tooltip', name: 'Tooltip', docs: c('tooltips') },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs') },
		{ id: 'pagination', name: 'Pager', docs: c('pager') },
		{ id: 'avatar', name: 'Avatar', docs: c('avatar') },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: 'Renders a class-based icon from the bundled wxi font.' },
		{ id: 'calendar', name: 'Calendar', docs: c('calendar'), notes: 'Month is the bare month grid.' },
		{ id: 'date-picker', name: 'DatePicker', docs: c('datepicker') },
		{ id: 'range-calendar', name: 'RangeCalendar', docs: c('range') },
		{ id: 'date-range-picker', name: 'DateRangePicker', docs: c('daterangepicker') },
		{ id: 'time-picker', name: 'TimePicker', docs: c('timepicker') },
		{ id: 'portal', name: 'Portal', docs: c('messages'), notes: 'No dedicated sample; the Messages sample wraps a Modal in a Portal. popupContainer marks a local portal root.' },
		{ id: 'locale-provider', name: 'Locale', docs: c('locales'), notes: 'Supplies translations and date formats to descendants; language packs come from @svar-ui/core-locales.' },
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
	lastVerified: '2026-11-04',
	notes: [
		'Component links go to the official live samples because the API docs site is not in the repository and could not be verified per component.',
		'The package declares no svelte peerDependency; Svelte 5 support comes from the changelog (2.0.1) and the runes-based source.',
		'Themes: Willow, WillowDark and Material wrapper components.',
		'By default the theme components load their web font and the wxi icon stylesheet from cdn.svar.dev; pass fonts={false} to skip that and load them yourself.',
		'Button and TwoState take a role-based type (primary, secondary, danger), and notices accept info, success, warning or danger; the theme maps these through CSS variables.',
		'Fullscreen (a fullscreen-toggle wrapper) and the SuggestDropdown list helper have no equivalent here.',
		'Menu, Toolbar, file uploader and other widgets are separate SVAR packages.',
	],
})
