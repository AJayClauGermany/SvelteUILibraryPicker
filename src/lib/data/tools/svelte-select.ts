import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-select',
	name: 'Svelte Select',
	description:
		'A single Select component that covers plain selects, searchable typeaheads and multi-select, with grouping, async loading of options and CSS custom properties for theming.',
	kind: 'component',
	// The README is the reference (props, events, snippets, theming); npm lists it as the homepage.
	docs: 'https://github.com/rob-balfre/svelte-select#readme',
	repository: 'https://github.com/rob-balfre/svelte-select',
	packages: ['svelte-select'],
	license: {
		spdx: 'LicenseRef-svelte-select',
		url: 'https://github.com/rob-balfre/svelte-select/blob/master/LICENSE',
		notes: 'package.json says ISC, but the LICENSE file is a different short permissive text (use, change and sell freely; keep the license or a link to it with copies). It has no SPDX id, so it is recorded as a LicenseRef.',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5',
		runes: true,
	},
	version: '6.0.0',
	components: ['select', 'combobox'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository; the LICENSE has no AI clause.',
		sources: [
			'https://github.com/rob-balfre/svelte-select',
			'https://github.com/rob-balfre/svelte-select/blob/master/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '6.0.0', date: '2026-08-11' },
		lastCommit: '2026-08-11',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-select', 'https://github.com/rob-balfre/svelte-select'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Version 6 is Svelte 5 only and moved to callback props and snippets; the repo has a migration guide for 5.x users. The 5.x line (last release 5.8.3) uses the Svelte 4 API.',
		'Theming is done with CSS custom properties; a no-styles build and an experimental Tailwind stylesheet (needs PostCSS) are also exported.',
		'Positions the list with floating-ui through the svelte-floating-ui dependency.',
		'The README links a separate examples site with a demo of every prop.',
	],
})
