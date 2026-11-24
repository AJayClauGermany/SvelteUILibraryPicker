import { defineLibrary } from '../schema'

// Docs site routes (checked against the repo at commit eecd3a0 and fetched live): pages come
// from src/docs/<nn>-<slug>.md via svelte-doc-kit's [...slug] route, served at /<slug>. A
// made-up slug returns 404.
const site = 'https://captaincodeman.github.io/svelte-headlessui'
const repo = 'https://github.com/captaincodeman/svelte-headlessui'
const c = (slug: string) => `${site}/${slug}`

export default defineLibrary({
	id: 'svelte-headlessui',
	name: 'Svelte-HeadlessUI (CaptainCodeman)',
	description:
		'An unofficial Svelte take on Tailwind Headless UI where each widget is a createX factory that returns a store plus use: actions you attach to your own markup.',
	docs: `${site}/`,
	repository: repo,
	packages: ['svelte-headlessui'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/license`,
	},
	svelte: {
		supported: [4, 5],
		peerRange: '^4.0.0 || ^5.0.0',
		runes: false,
	},
	version: '0.0.46',
	styling: ['headless'],
	dependencies: [
		{
			package: 'svelte-transition',
			kind: 'peer',
			required: false,
			notes: 'Separate package by the same author that several examples use for enter/leave CSS class transitions. Not needed for the behaviour itself.',
			source: c('transition'),
		},
	],
	features: ['typescript'],
	components: [
		{
			id: 'combobox',
			name: 'Combobox',
			docs: c('combobox'),
			notes: 'createCombobox. A separate page covers multi-select.',
		},
		{
			id: 'select',
			name: 'Listbox',
			docs: c('listbox'),
			notes: 'createListbox. A separate page covers multi-select.',
		},
		{ id: 'dropdown-menu', name: 'Menu', docs: c('menu'), notes: 'createMenu.' },
		{ id: 'dialog', name: 'Dialog', docs: c('dialog'), notes: 'createDialog.' },
		{ id: 'popover', name: 'Popover', docs: c('popover'), notes: 'createPopover.' },
		{
			id: 'collapsible',
			name: 'Disclosure',
			docs: c('disclosure'),
			notes: 'createDisclosure, one section per instance. The example stacks several to form an accordion.',
		},
		{ id: 'tabs', name: 'Tabs', docs: c('tabs'), notes: 'createTabs.' },
		{
			id: 'switch',
			name: 'Switch (Toggle)',
			docs: c('toggle'),
			notes: 'The toggle action of createSwitch.',
		},
		{
			id: 'toggle',
			name: 'Switch (Button)',
			docs: c('button'),
			notes: 'The button action of createSwitch, which sets aria-pressed.',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No AI policy found in the README, CONTRIBUTING or LICENSE. The repo has no AGENTS.md or CLAUDE.md and the docs site has no llms.txt.',
		sources: [
			`${repo}/blob/master/README.md`,
			`${repo}/blob/master/CONTRIBUTING.md`,
			`${repo}/blob/master/license`,
			`${site}/`,
		],
	},
	maintenance: {
		lastRelease: { version: '0.0.46', date: '2025-01-26' },
		lastCommit: '2025-01-26',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-headlessui', 'https://github.com/captaincodeman/svelte-headlessui'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Written in TypeScript with no .svelte files: each factory returns a svelte/store store and use: actions, so components are wired with $store and use:action rather than runes or snippets.',
		'The peer range has allowed Svelte 5 since 0.0.34. The docs site itself now builds on Svelte 5, and its examples use runes, snippets and onclick attributes with the library unchanged.',
		'Nothing is styled. The docs examples use Tailwind CSS classes, but Tailwind is not required.',
		'The Radio Group docs page shows a plain bind:group pattern with native radio inputs; the package exports no radio group helper, so it is not listed as a component here.',
		'The Transition page documents the separate svelte-transition package rather than an export of this one.',
		'Not the same project as @rgossiaux/svelte-headlessui, which the README mentions as an alternative.',
	],
})
