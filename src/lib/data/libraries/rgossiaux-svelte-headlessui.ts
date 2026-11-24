import { defineLibrary } from '../schema'

// Docs site routes (checked against the repo at the master branch head and fetched live; a
// made-up slug returns 404): component pages are /docs/2.0/<slug> from src/routes/docs/2.0/*.
// The 1.0 docs stay online under /docs/1.0/<slug>.
const site = 'https://svelte-headlessui.goss.io'
const c = (slug: string) => `${site}/docs/2.0/${slug}`
const repo = 'https://github.com/rgossiaux/svelte-headlessui'

export default defineLibrary({
	id: 'rgossiaux-svelte-headlessui',
	name: 'Svelte Headless UI (rgossiaux)',
	description:
		'An unofficial Svelte 3 port of Tailwind Labs\' Headless UI: unstyled, accessible compound components that keep the React API shape, for styling yourself or porting Tailwind UI snippets.',
	docs: site,
	repository: repo,
	packages: ['@rgossiaux/svelte-headlessui'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
		notes: 'Copyright is shared between Tailwind Labs (the original Headless UI) and Ryan Gossiaux and contributors.',
	},
	svelte: {
		supported: [3],
		peerRange: '^3.47.0',
		runes: false,
	},
	version: '2.0.0',
	styling: ['headless'],
	dependencies: [],
	features: ['typescript', 'accessibility', 'ssr'],
	components: [
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: 'Parts: Dialog, DialogOverlay, DialogTitle, DialogDescription. Renders through a built-in portal.' },
		{ id: 'collapsible', name: 'Disclosure', docs: c('disclosure'), notes: 'Parts: Disclosure, DisclosureButton, DisclosurePanel. One section per Disclosure; there is no accordion wrapper, so an accordion is several Disclosures.' },
		{ id: 'select', name: 'Listbox', docs: c('listbox'), notes: 'Custom single-value select: Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption. Value via bind:value since 2.0.' },
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'Parts: Menu, MenuButton, MenuItems, MenuItem.' },
		{ id: 'popover', name: 'Popover', docs: c('popover'), notes: 'Parts: Popover, PopoverButton, PopoverPanel, PopoverOverlay, PopoverGroup. No built-in positioning; the docs suggest svelte-popperjs, wired in through the use prop.' },
		{ id: 'radio-group', name: 'Radio Group', docs: c('radio-group'), notes: 'Parts: RadioGroup, RadioGroupOption, RadioGroupLabel, RadioGroupDescription. Value via bind:value since 2.0.' },
		{ id: 'switch', name: 'Switch', docs: c('switch'), notes: 'Comes with SwitchGroup, SwitchLabel and SwitchDescription. Checked state via bind:checked since 2.0.' },
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'Parts: TabGroup, TabList, Tab, TabPanels, TabPanel.' },
		{ id: 'animation', name: 'Transition', docs: c('transition'), notes: 'Transition (also exported as TransitionRoot) and TransitionChild apply CSS classes during enter/leave, mainly to port Tailwind UI code; the docs also show Svelte\'s own transitions as an alternative.' },
	],
	ai: {
		status: 'no-statement',
		summary: 'Checked the repo (README, LICENSE, .github issue templates and workflows; there is no CONTRIBUTING file) and the docs site: no llms.txt (404), no MCP server, no AGENTS.md or CLAUDE.md, and no mention of AI tools. The MIT license has no AI-specific terms.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/LICENSE`,
			`${site}/docs/2.0`,
		],
	},
	maintenance: {
		lastRelease: { version: '2.0.0', date: '2023-06-11' },
		lastCommit: '2023-07-11',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@rgossiaux/svelte-headlessui', 'https://github.com/rgossiaux/svelte-headlessui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Not the same project as the CaptainCodeman svelte-headlessui library (listed separately): this is the earlier, unofficial port by Ryan Gossiaux, published as @rgossiaux/svelte-headlessui. Neither is affiliated with Tailwind Labs.',
		'Svelte 3 only (peer svelte ^3.47.0, built and tested against Svelte 3.59). Components use export let, $: statements, slots with let: slot props, on: event forwarding, $$restProps, stores and createEventDispatcher. Event forwarding uses get_current_component from svelte/internal, which Svelte 5 no longer exposes. Listed for reference and migration planning; we found no Svelte 4 or 5 support.',
		'Ports Headless UI 1.4.2 (React/Vue), so later upstream components such as Combobox are not included. The Version history page maps each release to its Headless UI version.',
		'Version 2.0 moved Listbox, RadioGroup and Switch from on:change events to bind: two-way binding and renamed the Transition events (introstart, introend, outrostart, outroend). The 1.0 docs remain online under /docs/1.0/.',
		'Completely unstyled: style through class or style props (which may be functions of component state), slot props, :global() CSS or a CSS framework. The docs examples use Tailwind CSS classes, but nothing in the package depends on Tailwind.',
		'Every component takes an as prop to change the rendered element and a use prop for Svelte actions; DOM events are forwarded.',
		'Portal and PortalGroup are exported from the package but have no docs page of their own; the Dialog page explains that Dialog uses a portal internally.',
	],
})
