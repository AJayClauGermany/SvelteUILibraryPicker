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
} as const satisfies Record<string, CanonicalProp>

const input = {
	value: { kind: 'state', description: 'The text in the field.' },
	oninput: { kind: 'event', description: 'Runs on each edit.' },
	type: { kind: 'enum', description: 'Native input type (text, email, password...).' },
	placeholder: { kind: 'text', description: 'Hint shown while empty.' },
	disabled: { kind: 'boolean', description: 'Turns the field off.' },
	readonly: { kind: 'boolean', description: 'Shows the value but blocks edits.' },
	invalid: { kind: 'boolean', description: 'Shows the field in an error state.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
	helperText: { kind: 'content', description: 'Built-in help or error text below the field.' },
	size: { kind: 'enum', description: 'Preset size.' },
} as const satisfies Record<string, CanonicalProp>

const checkbox = {
	checked: { kind: 'state', description: 'Whether it is checked.' },
	onCheckedChange: { kind: 'event', description: 'Runs when the checked state changes.' },
	indeterminate: { kind: 'boolean', description: 'Shows the mixed state.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	name: { kind: 'text', description: 'Form field name.' },
	value: { kind: 'text', description: 'Value submitted with the form when checked.' },
	required: { kind: 'boolean', description: 'Must be checked to submit the form.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
} as const satisfies Record<string, CanonicalProp>

const switchProps = {
	checked: { kind: 'state', description: 'Whether it is on.' },
	onCheckedChange: { kind: 'event', description: 'Runs when it is turned on or off.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	name: { kind: 'text', description: 'Form field name.' },
	required: { kind: 'boolean', description: 'Must be on to submit the form.' },
	label: { kind: 'content', description: 'Built-in visible label.' },
} as const satisfies Record<string, CanonicalProp>

const select = {
	value: { kind: 'state', description: 'The selected value (or values).' },
	onValueChange: { kind: 'event', description: 'Runs when the selection changes.' },
	items: { kind: 'data', description: 'Options passed as data rather than as child components.' },
	multiple: { kind: 'boolean', description: 'Allows more than one selection.' },
	placeholder: { kind: 'text', description: 'Text shown while nothing is selected.' },
	disabled: { kind: 'boolean', description: 'Turns the control off.' },
	name: { kind: 'text', description: 'Form field name.' },
} as const satisfies Record<string, CanonicalProp>

const dialog = {
	open: { kind: 'state', description: 'Whether the dialog is open.' },
	onOpenChange: { kind: 'event', description: 'Runs when the dialog opens or closes.' },
	title: { kind: 'content', description: 'Heading that labels the dialog.' },
	closeOnEscape: { kind: 'boolean', description: 'Whether Escape closes it.' },
	closeOnOutsideClick: { kind: 'boolean', description: 'Whether a click on the backdrop closes it.' },
	size: { kind: 'enum', description: 'Preset width.' },
} as const satisfies Record<string, CanonicalProp>

const tabs = {
	value: { kind: 'state', description: 'The active tab.' },
	onValueChange: { kind: 'event', description: 'Runs when the active tab changes.' },
	items: { kind: 'data', description: 'Tabs passed as data rather than as child components.' },
	orientation: { kind: 'enum', description: 'Horizontal or vertical tab list.' },
	activationMode: { kind: 'enum', description: 'Whether arrow keys select a tab right away or only move focus.' },
} as const satisfies Record<string, CanonicalProp>

const tooltip = {
	content: { kind: 'content', description: 'The tooltip text or markup.' },
	placement: { kind: 'enum', description: 'Side of the trigger it appears on.' },
	open: { kind: 'state', description: 'Whether it is shown.' },
	openDelay: { kind: 'text', description: 'Delay before showing, in ms.' },
	closeDelay: { kind: 'text', description: 'Delay before hiding, in ms.' },
} as const satisfies Record<string, CanonicalProp>

/** Canonical props for the components we compare props for, in display order. */
export const canonicalProps = {
	button,
	input,
	checkbox,
	switch: switchProps,
	select,
	dialog,
	tabs,
	tooltip,
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
