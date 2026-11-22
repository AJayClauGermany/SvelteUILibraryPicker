import { defineTool } from '../schema'

export default defineTool({
	id: 'neodrag',
	name: 'Neodrag',
	description:
		'A small Svelte action that makes any element freely draggable, with options for axis locking, bounds, grid snapping and drag handles.',
	kind: 'utility',
	docs: 'https://www.neodrag.dev/docs/svelte',
	repository: 'https://github.com/PuruVJ/neodrag',
	packages: ['@neodrag/svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/PuruVJ/neodrag/blob/main/LICENSE.txt',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.0.0 || ^4.0.0 || ^5.0.0',
		runes: false,
	},
	version: '2.3.3',
	components: ['drag-and-drop'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md, contributing guide or AI-related note was found in the monorepo, which also holds the docs site source; the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/PuruVJ/neodrag',
			'https://github.com/PuruVJ/neodrag/tree/main/docs',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Moves single elements around freely; it does not manage list order or drop zones. For sortable lists and boards, see svelte-dnd-action.',
		'The stable 2.x line (2.3.3, June 2025) is an action that works in Svelte 3, 4 and 5. A 3.0 rewrite on a shared @neodrag/core is published under the next tag (3.0.0-next.12) and lives on the main branch.',
		'The project also ships React, Vue, Solid and vanilla packages from the same monorepo.',
	],
})
