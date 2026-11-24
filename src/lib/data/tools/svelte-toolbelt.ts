import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-toolbelt',
	name: 'Svelte Toolbelt',
	description:
		'Small Svelte 5 helpers for component authors: boxed reactive values, prop merging that chains event handlers and combines classes and styles, ref attachments and style conversion.',
	kind: 'utility',
	// The project has no docs site; its README (also the npm homepage) is the documentation.
	docs: 'https://github.com/huntabyte/svelte-toolbelt#readme',
	repository: 'https://github.com/huntabyte/svelte-toolbelt',
	packages: ['svelte-toolbelt'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/huntabyte/svelte-toolbelt/blob/main/LICENSE',
		notes: 'The npm package.json has no license field; the repo LICENSE is MIT. NOTICE.txt lists code adapted from Adobe React Aria / React Stately (Apache-2.0).',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.31.0',
		runes: true,
	},
	version: '0.13.0',
	components: [],
	usedBy: [
		{
			library: 'bits-ui',
			how: 'Runtime dependency; nearly every component uses its boxes, mergeProps and ref helpers.',
			source: 'https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/package.json',
		},
		{
			library: 'lily',
			how: 'The copy-paste Stepper component imports its box and mergeProps helpers, so adding it adds svelte-toolbelt to your project.',
			source: 'https://github.com/levish0/lily-svelte/tree/main/docs/src/lib/registry/ui/stepper',
		},
		{
			library: 'shadcn-svelte-extras',
			how: 'Many copy-paste registry components (Stepper, Password, Number Field, Color Picker and others) import its box and props helpers, so adding them adds svelte-toolbelt to your project.',
			source: 'https://github.com/ieedan/shadcn-svelte-extras/tree/main/src/lib/components/ui/stepper',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide was found in the repository, and the README and MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/huntabyte/svelte-toolbelt',
			'https://github.com/huntabyte/svelte-toolbelt/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '0.13.0', date: '2026-11-05' },
		lastCommit: '2026-11-05',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-toolbelt', 'https://github.com/huntabyte/svelte-toolbelt'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'The README describes it as the author’s personal toolkit and points to Runed for a broader, more fully featured set of utilities.',
		'It depends on Runed itself. Bits UI 2.20.4 pins ^0.10.6, so it may install an older svelte-toolbelt than the one recorded here; shadcn-svelte uses it indirectly through Bits UI.',
	],
})
