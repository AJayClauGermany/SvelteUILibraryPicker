import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-maplibre',
	name: 'svelte-maplibre',
	description:
		'Svelte components around MapLibre GL JS: a map container with sources, styled layers, markers, popups, controls and optional deck.gl layers.',
	kind: 'component',
	// npm homepage; the docs pages are generated from the library source in src/routes/docs.
	docs: 'https://svelte-maplibre.imfeld.dev/docs',
	repository: 'https://github.com/dimfeld/svelte-maplibre',
	packages: ['svelte-maplibre'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/dimfeld/svelte-maplibre/blob/master/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '2.0.1',
	components: ['map'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide was found in the repository, which also holds the docs site. The pull request template asks contributors to disclose how much AI helped and to understand the code; the bug report template asks for observed symptoms instead of AI-written root-cause guesses.',
		sources: [
			'https://github.com/dimfeld/svelte-maplibre',
			'https://github.com/dimfeld/svelte-maplibre/blob/master/.github/pull_request_template.md',
			'https://github.com/dimfeld/svelte-maplibre/blob/master/.github/ISSUE_TEMPLATE/bug_report.yml',
		],
		upstreamContributing:
			'Say in each pull request how much of it was AI-assisted and what you checked by hand. In bug reports, describe the symptoms you see rather than pasting an AI-generated diagnosis.',
	},
	lastVerified: '2026-11-23',
	notes: [
		'maplibre-gl (^6.7.0) is a regular dependency, so it is installed with the package. With Vite you import the MapLibre worker URL and pass it to setWorkerUrl before the first map is created (see the README).',
		'2.0.0 moved to MapLibre GL JS 6 and dropped 4 and 5. The 1.x line also declares a Svelte ^5.0.0 peer range; 0.9.x accepted Svelte 3, 4 and 5.',
		'deck.gl (for DeckGlLayer) and topojson-client (for TopoJSON) are optional peer dependencies.',
		'The README calls the library functional but still evolving and points to the examples, which include their source code.',
		'svelte-maplibre-gl (MIERUNE) is a separate Svelte 5 wrapper for the same map engine.',
	],
})
