import { defineTool } from '../schema'

// docs.svar.dev was unreachable from the research environment; the docs, demo and license
// links below are the ones the repository README points to.
export default defineTool({
	id: 'svar-datagrid',
	name: 'SVAR Svelte DataGrid',
	description:
		'A ready-made Svelte 5 data grid from the SVAR widget family, with virtual scrolling, inline editing, filtering, tree rows and a built-in toolbar and context menu.',
	kind: 'component',
	docs: 'https://docs.svar.dev/svelte/grid/getting_started/',
	repository: 'https://github.com/svar-widgets/grid',
	packages: ['@svar-ui/svelte-grid'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svar-widgets/grid/blob/main/license.txt',
	},
	svelte: {
		// No `svelte` peerDependency is declared (npm view @svar-ui/svelte-grid@2.7.5).
		// Svelte 5 support arrived in 2.0.1 (svelte/whatsnew.md) and the components use $props().
		supported: [5],
		runes: true,
	},
	version: '2.7.5',
	components: ['table'],
	// Relation to svar-core is the other way round: the grid depends on @svar-ui/svelte-core
	// (pinned 2.6.1) rather than svar-core building on the grid. See notes.
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'The grid repository has no llms.txt, AGENTS.md, agent skill or contributing guidance on AI, and the LICENSE is plain MIT. The docs site could not be reached to check for an llms.txt there.',
		sources: [
			'https://github.com/svar-widgets/grid',
			'https://github.com/svar-widgets/grid/blob/main/license.txt',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Depends on @svar-ui/svelte-core (tracked here as SVAR Svelte Core) at a pinned version: its cell editors, filters, tooltips and the Willow, WillowDark and Material theme wrappers reuse Core components.',
		'Also pulls in the SVAR menu and toolbar packages as regular dependencies.',
		'The 2.x line targets Svelte 5; the README points Svelte 4 users to the older wx-svelte-grid 1.x package.',
		'The package declares no svelte peerDependency; Svelte 5 support comes from the changelog (2.0.1) and the runes-based source.',
		'Live demos: https://docs.svar.dev/svelte/grid/samples/#/base/willow (linked from the README).',
	],
})
