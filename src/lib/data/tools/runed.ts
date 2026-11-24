import { defineTool } from '../schema'

export default defineTool({
	id: 'runed',
	name: 'Runed',
	description:
		'A collection of rune-based helpers for Svelte 5: debounced and throttled values, persisted state, element size and visibility trackers, click-outside, context helpers, a small state machine and more.',
	kind: 'utility',
	// Site URL from sites/docs/src/lib/config/site.ts in the repo; /docs is the docs index route.
	docs: 'https://runed.dev/docs',
	repository: 'https://github.com/svecosystem/runed',
	packages: ['runed'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svecosystem/runed/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.7.0',
		runes: true,
	},
	version: '0.38.0',
	components: [],
	usedBy: [
		{
			library: 'bits-ui',
			how: 'Runtime dependency; component state classes use its Context and watch helpers throughout.',
			source: 'https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/package.json',
		},
		{
			library: 'melt',
			how: 'Runtime dependency; several builders (Popover, Tooltip, Toaster, File Upload, Avatar) import its helpers.',
			source: 'https://github.com/melt-ui/next-gen/blob/main/packages/melt/package.json',
		},
		{
			library: 'lily',
			how: 'Some copy-paste registry components (Stepper, Password, Image Cropper) import its Context helper, so adding them adds runed to your project.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/src/lib/registry/ui/stepper/stepper.svelte.ts',
		},
		{
			library: 'shadcn-svelte-extras',
			how: 'Many copy-paste registry components (Stepper, Password, Number Field, Image Cropper, Emoji Picker and others) import its helpers, so adding them adds runed to your project.',
			source: 'https://github.com/ieedan/shadcn-svelte-extras/tree/main/src/lib/components/ui/stepper',
		},
		{
			library: 'origin-ui-svelte',
			how: 'The base Timeline component uses it.',
			source: 'https://github.com/max-got/originui-svelte/blob/main/src/lib/components/ui/timeline/timeline-context.svelte.ts',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server or AGENTS.md/CLAUDE.md was found in the repo or the docs site source (sites/docs), and CONTRIBUTING.md and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/svecosystem/runed',
			'https://github.com/svecosystem/runed/blob/main/CONTRIBUTING.md',
			'https://github.com/svecosystem/runed/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '0.38.0', date: '2026-10-23' },
		lastCommit: '2026-10-22',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/runed', 'https://github.com/svecosystem/runed'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'General-purpose helpers, not tied to one component, so no canonical components are listed.',
		'Optional peers: @sveltejs/kit (^3.0.0) for the runed/kit entry point (search-params helper) and zod (^4.1.0) for schema validation there; the core package needs neither.',
		'Bits UI 2.20.4 depends on ^0.35.1 and Melt 0.44.0 on ^0.23.3, so either may install an older runed than the one recorded here. shadcn-svelte uses it indirectly through Bits UI.',
	],
})
