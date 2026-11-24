import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-range-slider-pips',
	name: 'Svelte Range Slider Pips',
	description:
		'An accessible range slider with one or more handles, range fills, floating labels and "pips" (tick marks with optional value labels), themed through CSS variables.',
	kind: 'component',
	// npm lists this as the homepage; the root redirects to the introduction page.
	docs: 'https://simeydotme.github.io/svelte-range-slider-pips/',
	repository: 'https://github.com/simeydotme/svelte-range-slider-pips',
	packages: ['svelte-range-slider-pips'],
	license: {
		spdx: 'MPL-2.0',
		url: 'https://github.com/simeydotme/svelte-range-slider-pips/blob/main/LICENSE-MPL-2.0',
		notes: 'Mozilla Public License 2.0 (file-level copyleft): changes to the library\'s own files must be shared under the same license, while apps that only use it can keep their own license.',
	},
	svelte: {
		supported: [4, 5],
		peerRange: '^4.2.7 || ^5.0.0',
		runes: false,
	},
	version: '4.1.1',
	components: ['slider'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the docs site, no MCP server, no AGENTS.md/CLAUDE.md, and the contributing guide (docs/contributing.md) has no section on AI; the LICENSE is the standard MPL-2.0 text with no AI clause.',
		sources: [
			'https://github.com/simeydotme/svelte-range-slider-pips',
			'https://github.com/simeydotme/svelte-range-slider-pips/blob/main/docs/contributing.md',
			'https://github.com/simeydotme/svelte-range-slider-pips/blob/main/LICENSE-MPL-2.0',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'The component is written in Svelte\'s legacy syntax (export let props, dispatched events). It runs in Svelte 5 apps; the README notes issues in runes mode when $state values are also bound to an <input> element, suggests legacy mode where possible, and links an issue with a workaround.',
		'The package also ships a plain JavaScript build (with its CSS) for use without a Svelte app, e.g. in other frameworks or with a script tag.',
		'Version 4 changed some markup and styling compared to v3; the repo has an upgrade guide (docs/upgrade.md).',
	],
})
