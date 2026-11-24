import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-echarts',
	name: 'svelte-echarts',
	description:
		'A single Chart component for Apache ECharts: you pass an ECharts init function and an options object, and it renders and resizes the chart.',
	kind: 'component',
	// The README is the only reference (npm lists it as the homepage); it links a demo site.
	docs: 'https://github.com/bherbruck/svelte-echarts#readme',
	repository: 'https://github.com/bherbruck/svelte-echarts',
	packages: ['svelte-echarts', 'echarts'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/bherbruck/svelte-echarts/blob/main/LICENSE',
		notes: 'The LICENSE file is the MIT text with a copyright line naming GU Yiling and ECOMFE rather than the package author.',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5',
		runes: true,
	},
	version: '1.0.0',
	components: ['chart'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md, contributing guide or issue/PR template mentioning AI was found in the repository; the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/bherbruck/svelte-echarts',
			'https://github.com/bherbruck/svelte-echarts/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '1.0.0', date: '2025-04-25' },
		lastCommit: '2025-04-24',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-echarts', 'https://github.com/bherbruck/svelte-echarts'],
	},
	lastVerified: '2026-11-23',
	notes: [
		'echarts is a peer dependency you install yourself. 1.0.0 declares ^5.0.0, while the current ECharts release is 6.x, so check compatibility before using ECharts 6.',
		'You register the chart types, components and renderer you need with echarts/core and pass its init function, which keeps bundles tree-shaken; passing the full echarts init also works.',
		'1.0.0 (April 2025) is the latest release and the last commit on main is from the same day.',
		'The look comes from ECharts themes and options, not CSS; the chart fills its parent element, which needs a size.',
	],
})
