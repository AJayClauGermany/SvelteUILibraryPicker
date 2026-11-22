import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-maplibre-gl',
	name: 'Svelte MapLibre GL',
	description:
		'Declarative Svelte 5 components that wrap MapLibre GL JS: a map container plus sources, layers, markers, popups and map controls.',
	kind: 'component',
	docs: 'https://svelte-maplibre-gl.mierune.dev/docs/quickstart',
	repository: 'https://github.com/MIERUNE/svelte-maplibre-gl',
	packages: ['svelte-maplibre-gl', 'maplibre-gl'],
	license: {
		spdx: 'MIT OR Apache-2.0',
		url: 'https://github.com/MIERUNE/svelte-maplibre-gl/blob/main/LICENSE-MIT.txt',
		notes: 'Dual-licensed at your option; the Apache 2.0 text is in LICENSE-APACHE.txt next to it.',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5.0.0',
		runes: true,
	},
	version: '2.2.1',
	components: ['map'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or AI-related note was found in the repository, which also holds the docs site source; the README contributing section and the pull request template do not mention AI.',
		sources: [
			'https://github.com/MIERUNE/svelte-maplibre-gl',
			'https://github.com/MIERUNE/svelte-maplibre-gl/blob/main/README.md',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'You install maplibre-gl yourself (peer range ^5.19.0 || ^6.0.0) and provide a map style, from your own tile server or a hosted provider.',
		'Optional extension packages under @svelte-maplibre-gl/ add deck.gl overlays, PMTiles, contour lines and Terra Draw drawing tools.',
		'The underlying MapLibre map object stays reachable, so imperative MapLibre GL JS code still works alongside the components.',
		'svelte-maplibre (dimfeld/svelte-maplibre) is an older, also maintained Svelte wrapper for MapLibre; its 2.x line is Svelte 5 only.',
	],
})
