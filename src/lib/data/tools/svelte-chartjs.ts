import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-chartjs',
	name: 'svelte-chartjs',
	description:
		'Svelte components for Chart.js: one component per chart type (bar, line, pie, doughnut, radar, polar area, bubble, scatter) plus a generic Chart, drawn on a canvas.',
	kind: 'component',
	// Listed as the homepage in package.json and as "Docs" in the README; built from sites/docs in the repo.
	docs: 'https://saurav.tech/svelte-chartjs/',
	repository: 'https://github.com/SauravKanchan/svelte-chartjs',
	packages: ['svelte-chartjs', 'chart.js'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/SauravKanchan/svelte-chartjs/blob/master/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '4.0.1',
	components: ['chart'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository or its docs source; the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/SauravKanchan/svelte-chartjs',
			'https://github.com/SauravKanchan/svelte-chartjs/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'chart.js is a peer dependency you install yourself (^3.5.0 || ^4.0.0); you also register the Chart.js elements and scales you use, which keeps bundles tree-shaken.',
		'Version 4.0.0 made Svelte 5 a requirement; the last 3.x release (3.1.5) declares a peer range of ^4.0.0.',
		'Look and colours are Chart.js defaults, changed through Chart.js options rather than CSS.',
	],
})
