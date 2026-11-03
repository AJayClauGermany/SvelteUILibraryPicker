/**
 * Canonical component taxonomy.
 *
 * Libraries name things differently ("Dialog", "Modal", "Popup"...). Every library
 * component maps to ONE canonical id here so we can line them up side by side.
 *
 * Adding a new id is fine — keep it generic (not library-specific), kebab-case,
 * and put it in the most fitting category. `pnpm validate` rejects unknown ids.
 */

export const categories = {
	actions: 'Actions',
	forms: 'Forms & Inputs',
	overlays: 'Overlays',
	navigation: 'Navigation',
	layout: 'Layout',
	feedback: 'Feedback',
	'data-display': 'Data Display',
	'date-time': 'Date & Time',
	utilities: 'Utilities',
} as const

export type CategoryId = keyof typeof categories

export interface ComponentDefinition {
	name: string
	category: CategoryId
	/** Neutral one-line description, own words. */
	description: string
	/** Other names libraries use, helps contributors find the right id. */
	aliases?: string[]
}

export const components = {
	// Actions
	button: { name: 'Button', category: 'actions', description: 'Triggers an action.' },
	'button-group': { name: 'Button Group', category: 'actions', description: 'Groups related buttons.' },
	toggle: { name: 'Toggle', category: 'actions', description: 'A two-state pressable button.', aliases: ['Toggle Button'] },
	'toggle-group': { name: 'Toggle Group', category: 'actions', description: 'A set of toggles, single or multiple selection.', aliases: ['Segmented Control', 'Segment'] },
	'dropdown-menu': { name: 'Dropdown Menu', category: 'actions', description: 'A menu of actions opened from a trigger.', aliases: ['Menu'] },
	'context-menu': { name: 'Context Menu', category: 'actions', description: 'A menu opened by right-click / long-press.' },
	menubar: { name: 'Menubar', category: 'actions', description: 'A horizontal bar of persistent menus.' },
	'floating-action-button': { name: 'Floating Action Button', category: 'actions', description: 'A prominent floating primary action.', aliases: ['FAB', 'Speed Dial'] },

	// Forms & Inputs
	input: { name: 'Text Input', category: 'forms', description: 'Single-line text field.', aliases: ['TextField', 'Input'] },
	textarea: { name: 'Textarea', category: 'forms', description: 'Multi-line text field.' },
	checkbox: { name: 'Checkbox', category: 'forms', description: 'Binary or indeterminate choice.' },
	'radio-group': { name: 'Radio Group', category: 'forms', description: 'Single choice from a set.', aliases: ['Radio'] },
	switch: { name: 'Switch', category: 'forms', description: 'On/off toggle styled as a switch.' },
	select: { name: 'Select', category: 'forms', description: 'Pick one or more values from a list.' },
	combobox: { name: 'Combobox', category: 'forms', description: 'Text input with a filterable list of options.', aliases: ['Autocomplete', 'Typeahead'] },
	slider: { name: 'Slider', category: 'forms', description: 'Pick a value from a range.', aliases: ['Range'] },
	'number-input': { name: 'Number Input', category: 'forms', description: 'Numeric field with increment/decrement.', aliases: ['Number Field', 'Stepper'] },
	'pin-input': { name: 'PIN Input', category: 'forms', description: 'Segmented input for codes.', aliases: ['OTP', 'Pin Input'] },
	'tags-input': { name: 'Tags Input', category: 'forms', description: 'Enter multiple values as chips.', aliases: ['Chips Input', 'Multi Select'] },
	'file-upload': { name: 'File Upload', category: 'forms', description: 'Pick or drop files.', aliases: ['Dropzone', 'File Input', 'File Dropzone'] },
	'color-picker': { name: 'Color Picker', category: 'forms', description: 'Choose a color.' },
	'rating': { name: 'Rating', category: 'forms', description: 'Pick a score, usually with stars.', aliases: ['Rating Group'] },
	label: { name: 'Label', category: 'forms', description: 'Accessible label for a control.' },
	form: { name: 'Form', category: 'forms', description: 'Form helpers: fields, validation, errors.', aliases: ['Field', 'Fieldset'] },

	// Overlays
	dialog: { name: 'Dialog', category: 'overlays', description: 'Modal window over the page.', aliases: ['Modal'] },
	'alert-dialog': { name: 'Alert Dialog', category: 'overlays', description: 'Modal that interrupts to require a response.', aliases: ['Confirm'] },
	drawer: { name: 'Drawer', category: 'overlays', description: 'Panel sliding in from a screen edge.', aliases: ['Sheet', 'Offcanvas', 'Side Panel'] },
	popover: { name: 'Popover', category: 'overlays', description: 'Floating content anchored to a trigger.' },
	tooltip: { name: 'Tooltip', category: 'overlays', description: 'Short hint on hover/focus.' },
	'hover-card': { name: 'Hover Card', category: 'overlays', description: 'Rich preview shown on hover.', aliases: ['Link Preview'] },
	'command-palette': { name: 'Command Palette', category: 'overlays', description: 'Searchable list of commands.', aliases: ['Command'] },

	// Navigation
	tabs: { name: 'Tabs', category: 'navigation', description: 'Switch between panels of content.' },
	breadcrumb: { name: 'Breadcrumb', category: 'navigation', description: 'Shows the current location in a hierarchy.' },
	pagination: { name: 'Pagination', category: 'navigation', description: 'Navigate between pages of content.' },
	'navigation-menu': { name: 'Navigation Menu', category: 'navigation', description: 'Site navigation links with optional flyouts.', aliases: ['Navbar', 'App Bar', 'Navigation'] },
	sidebar: { name: 'Sidebar', category: 'navigation', description: 'Vertical app navigation.', aliases: ['Navigation Rail', 'Side Nav'] },
	stepper: { name: 'Steps', category: 'navigation', description: 'Progress through a multi-step flow.', aliases: ['Stepper', 'Wizard', 'Timeline'] },
	link: { name: 'Link', category: 'navigation', description: 'Styled anchor.' },

	// Layout
	accordion: { name: 'Accordion', category: 'layout', description: 'Stacked, expandable sections.' },
	collapsible: { name: 'Collapsible', category: 'layout', description: 'A single section that expands/collapses.' },
	card: { name: 'Card', category: 'layout', description: 'Container grouping related content.' },
	separator: { name: 'Separator', category: 'layout', description: 'Visual divider.', aliases: ['Divider'] },
	'scroll-area': { name: 'Scroll Area', category: 'layout', description: 'Custom-styled scrollable region.' },
	'aspect-ratio': { name: 'Aspect Ratio', category: 'layout', description: 'Keeps content at a ratio.' },
	resizable: { name: 'Resizable', category: 'layout', description: 'Panels resized by dragging.', aliases: ['Splitter', 'Pane Group'] },
	toolbar: { name: 'Toolbar', category: 'layout', description: 'A container of grouped controls.' },
	grid: { name: 'Grid', category: 'layout', description: 'Layout grid helpers.' },

	// Feedback
	alert: { name: 'Alert', category: 'feedback', description: 'Inline, non-modal status message.', aliases: ['Callout', 'Banner', 'Notification'] },
	toast: { name: 'Toast', category: 'feedback', description: 'Transient notification.', aliases: ['Snackbar', 'Sonner'] },
	progress: { name: 'Progress', category: 'feedback', description: 'Shows completion of a task.', aliases: ['Progress Bar', 'Progress Ring'] },
	spinner: { name: 'Spinner', category: 'feedback', description: 'Indeterminate loading indicator.', aliases: ['Loading', 'Loader'] },
	skeleton: { name: 'Skeleton', category: 'feedback', description: 'Placeholder while content loads.', aliases: ['Placeholder'] },

	// Data display
	avatar: { name: 'Avatar', category: 'data-display', description: 'Image or initials for a user.' },
	badge: { name: 'Badge', category: 'data-display', description: 'Small status or count label.', aliases: ['Chip', 'Tag', 'Pill'] },
	table: { name: 'Table', category: 'data-display', description: 'Tabular data.', aliases: ['Data Table', 'DataGrid'] },
	list: { name: 'List', category: 'data-display', description: 'Styled list of items.', aliases: ['List Group', 'Listbox'] },
	carousel: { name: 'Carousel', category: 'data-display', description: 'Cycle through slides.', aliases: ['Gallery'] },
	'tree-view': { name: 'Tree View', category: 'data-display', description: 'Hierarchical, expandable list.', aliases: ['Tree'] },
	kbd: { name: 'Kbd', category: 'data-display', description: 'Keyboard key hint.' },
	image: { name: 'Image', category: 'data-display', description: 'Image helpers.' },
	meter: { name: 'Meter', category: 'data-display', description: 'A scalar value within a known range.' },
	chart: { name: 'Chart', category: 'data-display', description: 'Data visualisation.' },

	// Date & Time
	calendar: { name: 'Calendar', category: 'date-time', description: 'Inline month view for picking dates.' },
	'date-picker': { name: 'Date Picker', category: 'date-time', description: 'Field + popup for choosing a date.', aliases: ['Datepicker'] },
	'range-calendar': { name: 'Range Calendar', category: 'date-time', description: 'Inline month view for picking a date range.' },
	'date-range-picker': { name: 'Date Range Picker', category: 'date-time', description: 'Choose a start and end date.' },
	'time-picker': { name: 'Time Picker', category: 'date-time', description: 'Choose a time.', aliases: ['Time Field'] },
	'date-field': { name: 'Date Field', category: 'date-time', description: 'Segmented keyboard-editable date input.' },

	// Utilities
	portal: { name: 'Portal', category: 'utilities', description: 'Render content elsewhere in the DOM.' },
	'visually-hidden': { name: 'Visually Hidden', category: 'utilities', description: 'Hidden visually, available to screen readers.' },
	'focus-trap': { name: 'Focus Trap', category: 'utilities', description: 'Keep focus inside a region.' },
	'theme-switcher': { name: 'Theme Switcher', category: 'utilities', description: 'Toggle light/dark or themes.', aliases: ['Dark Mode', 'Light Switch'] },
	clipboard: { name: 'Clipboard', category: 'utilities', description: 'Copy to clipboard helpers.' },
} as const satisfies Record<string, ComponentDefinition>

export type ComponentId = keyof typeof components

export const componentIds = Object.keys(components) as ComponentId[]

export function getComponent(id: ComponentId): ComponentDefinition {
	return components[id]
}
