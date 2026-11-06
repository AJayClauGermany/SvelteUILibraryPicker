import { defineTool } from '../schema'

export default defineTool({
	id: 'carbon-charts-svelte',
	name: 'Carbon Charts for Svelte',
	description:
		'Svelte wrappers around IBM Carbon Charts, a d3-based set of about 26 chart types (bar, line, donut, gauge, heatmap, treemap...) styled to the Carbon Design System.',
	kind: 'component',
	docs: 'https://charts.carbondesignsystem.com/',
	repository: 'https://github.com/carbon-design-system/carbon-charts/tree/main/packages/svelte',
	packages: ['@carbon/charts-svelte'],
	license: {
		spdx: 'Apache-2.0',
		url: 'https://github.com/carbon-design-system/carbon-charts/blob/main/LICENSE.md',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.31.0 || ^4.0.0 || ^5.20.0',
		runes: false,
	},
	version: '1.22.18',
	components: ['chart'],
	usedBy: [
		{
			library: 'carbon-components-svelte',
			how: 'Lists Carbon Charts Svelte as a related Carbon project in its README and docs; not a package dependency.',
			source: 'https://github.com/carbon-design-system/carbon-components-svelte/blob/master/README.md',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or AI section in the contributing guide or PR template was found in the repository; the Apache-2.0 LICENSE has no AI clause.',
		sources: [
			'https://github.com/carbon-design-system/carbon-charts/blob/main/.github/CONTRIBUTING.md',
			'https://github.com/carbon-design-system/carbon-charts/blob/main/LICENSE.md',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Version is the npm `latest` tag (published February 2025), whose components use `export let`. The `next` tag (1.27.27 at the time of checking, built from the main branch) is rewritten with runes and needs Svelte 5 (peer ^5.20.2; its README says 5.33+).',
		'Installs @ibm/telemetry-js and runs it in a postinstall script to collect anonymised usage metrics; the package README explains how to opt out.',
		'Styles are imported separately from @carbon/charts-svelte/styles.css (or the SCSS entry), and the README asks SvelteKit apps to keep @carbon/charts out of SSR externals for production builds.',
	],
})
