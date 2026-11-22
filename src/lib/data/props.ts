/**
 * Canonical props: a shared vocabulary for the props that many libraries have in common.
 *
 * Libraries spell the same idea differently: a button's click handler is `onclick` in one,
 * `on:click` in another and an `onClick` option in a third; a dialog's open state is
 * `bind:open` on a root part here and an `open` option on a builder there. Each library
 * component can map these canonical props to its own spelling (`LibraryComponent.api` in
 * `schema.ts`), which is what powers the props tables and the "Port between libraries" page.
 *
 * Canonical names follow Svelte 5 and HTML where possible (`onclick`, `disabled`, `bind:value`
 * becomes `value`). Keep each list short: only props that several libraries share and that you
 * would have to rewrite when moving code from one library to another.
 *
 * Adding a component or prop here is fine; `pnpm validate` rejects mappings to unknown ones.
 */
import type { ComponentId } from './components'

/** What kind of prop it is. Drives how the port view explains differences. */
export type PropKind =
	/** A callback or event (`onclick`, `onOpenChange`). */
	| 'event'
	/** A true/false flag. */
	| 'boolean'
	/** State you usually `bind:` to (`open`, `value`, `checked`). */
	| 'state'
	/** One value from a fixed set (sizes, variants, placements). */
	| 'enum'
	/** Free text, a number or a URL. */
	| 'text'
	/** Content: a string or a snippet/slot. */
	| 'content'
	/** A list of items or options passed as data. */
	| 'data'

export const propKindInfo: Record<PropKind, { label: string, description: string }> = {
	event: { label: 'Event', description: 'A callback or event handler.' },
	boolean: { label: 'Flag', description: 'A true/false option.' },
	state: { label: 'State', description: 'A value you usually bind to, or control with a value plus a change callback.' },
	enum: { label: 'Choice', description: 'One value from a fixed set; each library names the values differently.' },
	text: { label: 'Value', description: 'Free text, a number or a URL.' },
	content: { label: 'Content', description: 'Text or markup, passed as a string prop or as a snippet/slot/part.' },
	data: { label: 'Data', description: 'A list of items or options passed as data instead of child components.' },
}

export interface CanonicalProp {
	kind: PropKind
	/** Neutral one-line description, own words. */
	description: string
}

const button = {
	onclick: { kind: 'event', description: 'Runs when the button is activated.' },
	disabled: { kind: 'boolean', description: 'Turns the button off.' },
	href: { kind: 'text', description: 'Renders the button as a link to this URL.' },
	type: { kind: 'enum', description: 'Native button type (button, submit, reset).' },
	variant: { kind: 'enum', description: 'Visual style, such as filled, outline, ghost or link.' },
	size: { kind: 'enum', description: 'Preset size.' },
	color: { kind: 'enum', description: 'Color by role or palette name.' },
	loading: { kind: 'boolean', description: 'Built-in busy state, usually with a spinner.' },
	icon: { kind: 'content', description: 'Built-in slot or prop for an icon next to the label.' },
	fullWidth: { kind: 'boolean', description: 'Stretches the button to the width of its container.' },
} as const satisfies Record<string, CanonicalProp>

const input = {
	value: { kind: 'state', description: 'The text in the field.' },
	oninput: { kind: 'event', description: 'Runs on each edit.' },
	onchange: { kind: 'event', description: 'Runs when an edit is committed (blur or Enter).' },
	type: { kind: 'enum', description: 'Native input type (text, email, password...).' },
	placeholder: { kind: 'text', description: 'Hint shown while empty.' },
	name: { kind: 'text', description: 'Form field name.' },
	disabled: { kind: 'boolean', description: 'Turns the field off.' },
	readonly: { kind: 'boolean', description: 'Shows the value but blocks edits.' },
	required: { kind: 'boolean', description: 'Must be filled in to submit the form.' },
	invalid: { kind: 'boolean', description: 'Shows the field in an error state.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
	helperText: { kind: 'content', description: 'Built-in help or error text below the field.' },
	prefix: { kind: 'content', description: 'Built-in slot for an icon or text before the value.' },
	suffix: { kind: 'content', description: 'Built-in slot for an icon or text after the value.' },
	clearable: { kind: 'boolean', description: 'Shows a button that clears the value.' },
	size: { kind: 'enum', description: 'Preset size.' },
} as const satisfies Record<string, CanonicalProp>

const textarea = {
	value: { kind: 'state', description: 'The text in the field.' },
	oninput: { kind: 'event', description: 'Runs on each edit.' },
	placeholder: { kind: 'text', description: 'Hint shown while empty.' },
	rows: { kind: 'text', description: 'Visible number of text lines.' },
	disabled: { kind: 'boolean', description: 'Turns the field off.' },
	readonly: { kind: 'boolean', description: 'Shows the value but blocks edits.' },
	invalid: { kind: 'boolean', description: 'Shows the field in an error state.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
	autoResize: { kind: 'boolean', description: 'Grows with its content.' },
} as const satisfies Record<string, CanonicalProp>

const checkbox = {
	checked: { kind: 'state', description: 'Whether it is checked.' },
	onCheckedChange: { kind: 'event', description: 'Runs when the checked state changes.' },
	indeterminate: { kind: 'boolean', description: 'Shows the mixed state.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	name: { kind: 'text', description: 'Form field name.' },
	value: { kind: 'text', description: 'Value submitted with the form when checked.' },
	required: { kind: 'boolean', description: 'Must be checked to submit the form.' },
	invalid: { kind: 'boolean', description: 'Shows the control in an error state.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
} as const satisfies Record<string, CanonicalProp>

const switchProps = {
	checked: { kind: 'state', description: 'Whether it is on.' },
	onCheckedChange: { kind: 'event', description: 'Runs when it is turned on or off.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	name: { kind: 'text', description: 'Form field name.' },
	value: { kind: 'text', description: 'Value submitted with the form when on.' },
	required: { kind: 'boolean', description: 'Must be on to submit the form.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
	size: { kind: 'enum', description: 'Preset size.' },
} as const satisfies Record<string, CanonicalProp>

const radioGroup = {
	value: { kind: 'state', description: 'The selected option.' },
	onValueChange: { kind: 'event', description: 'Runs when the selection changes.' },
	items: { kind: 'data', description: 'Options passed as data rather than as child components.' },
	name: { kind: 'text', description: 'Form field name shared by the options.' },
	disabled: { kind: 'boolean', description: 'Turns the whole group off.' },
	required: { kind: 'boolean', description: 'An option must be picked to submit the form.' },
	orientation: { kind: 'enum', description: 'Lays options out in a row or a column.' },
	label: { kind: 'content', description: 'Built-in visible group label or legend.' },
} as const satisfies Record<string, CanonicalProp>

const select = {
	value: { kind: 'state', description: 'The selected value (or values).' },
	onValueChange: { kind: 'event', description: 'Runs when the selection changes.' },
	open: { kind: 'state', description: 'Whether the list is open.' },
	items: { kind: 'data', description: 'Options passed as data rather than as child components.' },
	multiple: { kind: 'boolean', description: 'Allows more than one selection.' },
	placeholder: { kind: 'text', description: 'Text shown while nothing is selected.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	required: { kind: 'boolean', description: 'A value must be picked to submit the form.' },
	invalid: { kind: 'boolean', description: 'Shows the control in an error state.' },
	name: { kind: 'text', description: 'Form field name.' },
	clearable: { kind: 'boolean', description: 'Shows a button that clears the selection.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
	size: { kind: 'enum', description: 'Preset size.' },
} as const satisfies Record<string, CanonicalProp>

const combobox = {
	value: { kind: 'state', description: 'The selected value (or values).' },
	onValueChange: { kind: 'event', description: 'Runs when the selection changes.' },
	inputValue: { kind: 'state', description: 'The text typed into the field.' },
	onInputValueChange: { kind: 'event', description: 'Runs when the typed text changes.' },
	open: { kind: 'state', description: 'Whether the list is open.' },
	items: { kind: 'data', description: 'Options passed as data rather than as child components.' },
	multiple: { kind: 'boolean', description: 'Allows more than one selection.' },
	placeholder: { kind: 'text', description: 'Hint shown while the field is empty.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	allowCustomValue: { kind: 'boolean', description: 'Accepts text that matches no option.' },
} as const satisfies Record<string, CanonicalProp>

const slider = {
	value: { kind: 'state', description: 'The current value (or values for several thumbs).' },
	onValueChange: { kind: 'event', description: 'Runs while the value changes.' },
	onValueCommit: { kind: 'event', description: 'Runs when the user finishes dragging.' },
	min: { kind: 'text', description: 'Lowest value.' },
	max: { kind: 'text', description: 'Highest value.' },
	step: { kind: 'text', description: 'Step between values.' },
	range: { kind: 'boolean', description: 'Two thumbs selecting a range.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	orientation: { kind: 'enum', description: 'Horizontal or vertical.' },
	name: { kind: 'text', description: 'Form field name.' },
} as const satisfies Record<string, CanonicalProp>

const numberInput = {
	value: { kind: 'state', description: 'The number in the field.' },
	onValueChange: { kind: 'event', description: 'Runs when the number changes.' },
	min: { kind: 'text', description: 'Lowest value.' },
	max: { kind: 'text', description: 'Highest value.' },
	step: { kind: 'text', description: 'Amount the buttons and arrow keys change it by.' },
	disabled: { kind: 'boolean', description: 'Turns the field off.' },
	name: { kind: 'text', description: 'Form field name.' },
	format: { kind: 'text', description: 'Number formatting (locale, currency, decimals).' },
} as const satisfies Record<string, CanonicalProp>

const datePicker = {
	value: { kind: 'state', description: 'The selected date.' },
	onValueChange: { kind: 'event', description: 'Runs when the date changes.' },
	open: { kind: 'state', description: 'Whether the calendar popup is open.' },
	minValue: { kind: 'text', description: 'Earliest date you can pick.' },
	maxValue: { kind: 'text', description: 'Latest date you can pick.' },
	isDateDisabled: { kind: 'event', description: 'Callback that blocks individual dates.' },
	locale: { kind: 'text', description: 'Locale for month names and formatting.' },
	placeholder: { kind: 'text', description: 'Text or date shown while empty.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	format: { kind: 'text', description: 'How the date is displayed in the field.' },
} as const satisfies Record<string, CanonicalProp>

const dialog = {
	open: { kind: 'state', description: 'Whether the dialog is open.' },
	onOpenChange: { kind: 'event', description: 'Runs when the dialog opens or closes.' },
	title: { kind: 'content', description: 'Heading that labels the dialog.' },
	description: { kind: 'content', description: 'Text that describes the dialog to assistive tech.' },
	closeOnEscape: { kind: 'boolean', description: 'Whether Escape closes it.' },
	closeOnOutsideClick: { kind: 'boolean', description: 'Whether a click on the backdrop closes it.' },
	showCloseButton: { kind: 'boolean', description: 'Built-in close button in a corner.' },
	preventScroll: { kind: 'boolean', description: 'Locks page scrolling while open.' },
	size: { kind: 'enum', description: 'Preset width.' },
} as const satisfies Record<string, CanonicalProp>

const drawer = {
	open: { kind: 'state', description: 'Whether the drawer is open.' },
	onOpenChange: { kind: 'event', description: 'Runs when it opens or closes.' },
	side: { kind: 'enum', description: 'Screen edge it slides in from.' },
	title: { kind: 'content', description: 'Heading that labels the drawer.' },
	closeOnEscape: { kind: 'boolean', description: 'Whether Escape closes it.' },
	closeOnOutsideClick: { kind: 'boolean', description: 'Whether a click outside closes it.' },
	size: { kind: 'enum', description: 'Preset width or height.' },
} as const satisfies Record<string, CanonicalProp>

const popover = {
	open: { kind: 'state', description: 'Whether it is open.' },
	onOpenChange: { kind: 'event', description: 'Runs when it opens or closes.' },
	content: { kind: 'content', description: 'What the popover shows.' },
	placement: { kind: 'enum', description: 'Side of the trigger it appears on.' },
	offset: { kind: 'text', description: 'Gap between trigger and popover.' },
	arrow: { kind: 'boolean', description: 'Shows an arrow pointing at the trigger.' },
	closeOnEscape: { kind: 'boolean', description: 'Whether Escape closes it.' },
	closeOnOutsideClick: { kind: 'boolean', description: 'Whether a click outside closes it.' },
} as const satisfies Record<string, CanonicalProp>

const tooltip = {
	content: { kind: 'content', description: 'The tooltip text or markup.' },
	placement: { kind: 'enum', description: 'Side of the trigger it appears on.' },
	open: { kind: 'state', description: 'Whether it is shown.' },
	onOpenChange: { kind: 'event', description: 'Runs when it shows or hides.' },
	openDelay: { kind: 'text', description: 'Delay before showing, in ms.' },
	closeDelay: { kind: 'text', description: 'Delay before hiding, in ms.' },
	offset: { kind: 'text', description: 'Gap between trigger and tooltip.' },
	arrow: { kind: 'boolean', description: 'Shows an arrow pointing at the trigger.' },
	disabled: { kind: 'boolean', description: 'Stops it from showing.' },
} as const satisfies Record<string, CanonicalProp>

const dropdownMenu = {
	open: { kind: 'state', description: 'Whether the menu is open.' },
	onOpenChange: { kind: 'event', description: 'Runs when it opens or closes.' },
	items: { kind: 'data', description: 'Menu items passed as data rather than as child components.' },
	onSelect: { kind: 'event', description: 'Runs when an item is chosen.' },
	placement: { kind: 'enum', description: 'Side of the trigger it appears on.' },
	closeOnSelect: { kind: 'boolean', description: 'Whether choosing an item closes the menu.' },
	disabled: { kind: 'boolean', description: 'Turns an item (or the menu) off.' },
} as const satisfies Record<string, CanonicalProp>

const tabs = {
	value: { kind: 'state', description: 'The active tab.' },
	onValueChange: { kind: 'event', description: 'Runs when the active tab changes.' },
	items: { kind: 'data', description: 'Tabs passed as data rather than as child components.' },
	orientation: { kind: 'enum', description: 'Horizontal or vertical tab list.' },
	activationMode: { kind: 'enum', description: 'Whether arrow keys select a tab right away or only move focus.' },
	disabled: { kind: 'boolean', description: 'Turns a single tab off.' },
	variant: { kind: 'enum', description: 'Visual style, such as underline or pills.' },
} as const satisfies Record<string, CanonicalProp>

const accordion = {
	value: { kind: 'state', description: 'Which item or items are expanded.' },
	onValueChange: { kind: 'event', description: 'Runs when items expand or collapse.' },
	multiple: { kind: 'boolean', description: 'Lets several items be open at once.' },
	collapsible: { kind: 'boolean', description: 'Lets the open item be closed again (single mode).' },
	items: { kind: 'data', description: 'Items passed as data rather than as child components.' },
	disabled: { kind: 'boolean', description: 'Turns an item (or all) off.' },
	title: { kind: 'content', description: 'The header text of an item.' },
} as const satisfies Record<string, CanonicalProp>

const collapsible = {
	open: { kind: 'state', description: 'Whether it is expanded.' },
	onOpenChange: { kind: 'event', description: 'Runs when it expands or collapses.' },
	disabled: { kind: 'boolean', description: 'Stops it from toggling.' },
} as const satisfies Record<string, CanonicalProp>

const toggle = {
	pressed: { kind: 'state', description: 'Whether it is pressed.' },
	onPressedChange: { kind: 'event', description: 'Runs when it is pressed or released.' },
	disabled: { kind: 'boolean', description: 'Turns it off.' },
	variant: { kind: 'enum', description: 'Visual style.' },
	size: { kind: 'enum', description: 'Preset size.' },
} as const satisfies Record<string, CanonicalProp>

const pagination = {
	page: { kind: 'state', description: 'The current page.' },
	onPageChange: { kind: 'event', description: 'Runs when the page changes.' },
	count: { kind: 'text', description: 'Total number of items (or pages, see notes).' },
	perPage: { kind: 'text', description: 'Items per page.' },
	siblingCount: { kind: 'text', description: 'Page links shown on each side of the current one.' },
	showEdges: { kind: 'boolean', description: 'Always shows the first and last page.' },
} as const satisfies Record<string, CanonicalProp>

const toast = {
	title: { kind: 'content', description: 'Main message.' },
	description: { kind: 'content', description: 'Secondary text.' },
	variant: { kind: 'enum', description: 'Type such as success, error, warning or info.' },
	duration: { kind: 'text', description: 'How long it stays, in ms.' },
	position: { kind: 'enum', description: 'Corner or edge of the screen it appears in.' },
	dismissible: { kind: 'boolean', description: 'Shows a close button or allows swiping away.' },
	action: { kind: 'content', description: 'Built-in action button (e.g. Undo).' },
} as const satisfies Record<string, CanonicalProp>

const alert = {
	variant: { kind: 'enum', description: 'Type or visual style, such as info, success, warning or error.' },
	color: { kind: 'enum', description: 'Color by role or palette name, when separate from variant.' },
	title: { kind: 'content', description: 'Heading text.' },
	description: { kind: 'content', description: 'Body text.' },
	icon: { kind: 'content', description: 'Built-in icon slot or prop.' },
	dismissible: { kind: 'boolean', description: 'Shows a close button.' },
	onclose: { kind: 'event', description: 'Runs when it is dismissed.' },
} as const satisfies Record<string, CanonicalProp>

const progress = {
	value: { kind: 'text', description: 'Current progress.' },
	max: { kind: 'text', description: 'Value that means complete.' },
	indeterminate: { kind: 'boolean', description: 'Shows ongoing activity without a value.' },
	label: { kind: 'content', description: 'Built-in visible label or value text.' },
	color: { kind: 'enum', description: 'Color by role or palette name.' },
	size: { kind: 'enum', description: 'Preset thickness or size.' },
} as const satisfies Record<string, CanonicalProp>

const spinner = {
	size: { kind: 'enum', description: 'Preset size.' },
	color: { kind: 'enum', description: 'Color by role or palette name.' },
	label: { kind: 'text', description: 'Accessible label for screen readers.' },
} as const satisfies Record<string, CanonicalProp>

const avatar = {
	src: { kind: 'text', description: 'Image URL.' },
	alt: { kind: 'text', description: 'Alternative text for the image.' },
	fallback: { kind: 'content', description: 'Initials or icon shown when there is no image.' },
	size: { kind: 'enum', description: 'Preset size.' },
	shape: { kind: 'enum', description: 'Circle, rounded or square.' },
} as const satisfies Record<string, CanonicalProp>

const badge = {
	variant: { kind: 'enum', description: 'Visual style, such as solid, soft or outline.' },
	color: { kind: 'enum', description: 'Color by role or palette name.' },
	size: { kind: 'enum', description: 'Preset size.' },
	dismissible: { kind: 'boolean', description: 'Shows a remove button.' },
	href: { kind: 'text', description: 'Renders the badge as a link.' },
} as const satisfies Record<string, CanonicalProp>

const separator = {
	orientation: { kind: 'enum', description: 'Horizontal or vertical.' },
	decorative: { kind: 'boolean', description: 'Hides it from assistive tech.' },
	label: { kind: 'content', description: 'Text shown in the middle of the line.' },
} as const satisfies Record<string, CanonicalProp>

/** Canonical props for the components we compare props for, in display order. */
export const canonicalProps = {
	'button': button,
	'toggle': toggle,
	'input': input,
	'textarea': textarea,
	'number-input': numberInput,
	'checkbox': checkbox,
	'switch': switchProps,
	'radio-group': radioGroup,
	'select': select,
	'combobox': combobox,
	'slider': slider,
	'date-picker': datePicker,
	'dialog': dialog,
	'drawer': drawer,
	'popover': popover,
	'tooltip': tooltip,
	'dropdown-menu': dropdownMenu,
	'tabs': tabs,
	'pagination': pagination,
	'accordion': accordion,
	'collapsible': collapsible,
	'alert': alert,
	'toast': toast,
	'progress': progress,
	'spinner': spinner,
	'avatar': avatar,
	'badge': badge,
	'separator': separator,
} as const satisfies Partial<Record<ComponentId, Record<string, CanonicalProp>>>

export type PropComponentId = keyof typeof canonicalProps
export const propComponentIds = Object.keys(canonicalProps) as PropComponentId[]

export function hasCanonicalProps(id: string): id is PropComponentId {
	return id in canonicalProps
}

/** Canonical prop ids for a component (empty for components we don't compare props for). */
export function canonicalPropIds(id: ComponentId): string[] {
	return hasCanonicalProps(id) ? Object.keys(canonicalProps[id]) : []
}

export function getCanonicalProp(component: ComponentId, prop: string): CanonicalProp | undefined {
	return hasCanonicalProps(component) ? (canonicalProps[component] as Record<string, CanonicalProp>)[prop] : undefined
}

/* ------------------------------------------------------------------------------------------
 * Library-wide conventions: the habits that apply to every component of a library, so you
 * learn them once when moving between libraries (event style, binding, refs, ...).
 * ---------------------------------------------------------------------------------------- */

export type ConventionId = 'events' | 'binding' | 'ref' | 'class' | 'rest-props' | 'render-delegation' | 'composition'

export const conventionInfo: Record<ConventionId, { label: string, description: string }> = {
	'events': {
		label: 'Events',
		description: 'How you listen to events: Svelte 5 callback props (`onclick`), Svelte 4 component events (`on:click`), or options on a builder.',
	},
	'binding': {
		label: 'State binding',
		description: 'How you read and control state such as open, value or checked: `bind:` on props, a value plus a change callback, or a builder getter.',
	},
	'ref': {
		label: 'Element ref',
		description: 'How you get the underlying DOM element (`bind:ref`, `bind:this`, an action, a `getElement()` method...).',
	},
	'class': {
		label: 'Classes',
		description: 'How your `class` reaches the component: passed to the root element, merged with the library classes, or split into per-part class props.',
	},
	'rest-props': {
		label: 'Extra attributes',
		description: 'Whether unknown props (aria-*, data-*, native attributes) are forwarded to an element, and which one.',
	},
	'render-delegation': {
		label: 'Custom element',
		description: 'How you swap the rendered element or render your own: a `child` snippet, an `as`/`tag` prop, spreading builder attributes...',
	},
	'composition': {
		label: 'Composition',
		description: 'How a component is assembled: one component with props, compound parts (`Dialog.Root`, `Dialog.Content`), builders or state machines.',
	},
}

export const conventionIds = Object.keys(conventionInfo) as ConventionId[]
