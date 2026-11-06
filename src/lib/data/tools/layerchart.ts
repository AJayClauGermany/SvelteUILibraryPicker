import { defineTool } from '../schema'

export default defineTool({
	id: 'layerchart',
	name: 'LayerChart',
	description:
		'Composable Svelte chart components built on d3: ready-made charts (area, bar, line, pie, radar...) plus lower-level marks, axes and tooltips, rendered as SVG, Canvas or HTML layers.',
	kind: 'component',
	docs: 'https://layerchart.com',
	repository: 'https://github.com/techniq/layerchart',
	packages: ['layerchart'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/techniq/layerchart/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '2.9.2',
	components: ['chart'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its Chart component is a themed container and tooltip used together with LayerChart components; the registry lists layerchart as a dependency.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/chart.json',
		},
		{
			library: 'lily',
			how: 'Its Chart component adds a themed container, tooltip and palette; LayerChart does the drawing.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/content/components/chart.md',
		},
		{
			library: 'svelte-ux',
			how: 'Points to LayerChart as its companion charting library (README and docs navigation); not a package dependency.',
			source: 'https://github.com/techniq/svelte-ux/blob/main/README.md',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The docs have an LLMs guide: the site follows the llms.txt proposal with a root llms.txt and per-page /llms.txt variants, and each page has a copy-as-Markdown / open-in-chat button. No AGENTS.md, MCP server or AI section in a contributing guide was found.',
		sources: [
			'https://layerchart.com/docs/guides/LLMs',
			'https://github.com/techniq/layerchart/blob/main/docs/src/content/guides/LLMs.md',
		],
		llmsTxt: 'https://layerchart.com/llms.txt',
	},
	lastVerified: '2026-11-06',
	notes: [
		'Default colours come from CSS currentColor and a few CSS variables (e.g. --color-primary), so charts can be styled with plain CSS or utility classes.',
		'The 2.x line is Svelte 5 only; the last 1.x release (1.0.13) declares a peer range of ^3.56.0 || ^4.0.0 || ^5.0.0.',
		'Same author as Svelte UX, which links to it as a companion library.',
	],
})
