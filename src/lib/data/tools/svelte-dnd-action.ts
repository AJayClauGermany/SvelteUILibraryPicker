import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-dnd-action',
	name: 'svelte-dnd-action',
	description:
		'A Svelte action that turns a container into a drop zone for sortable lists and boards, with pointer, touch and keyboard dragging and screen-reader announcements.',
	kind: 'headless',
	docs: 'https://github.com/isaacHagoel/svelte-dnd-action#readme',
	repository: 'https://github.com/isaacHagoel/svelte-dnd-action',
	packages: ['svelte-dnd-action'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/isaacHagoel/svelte-dnd-action/blob/master/LICENSE',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '>=3.23.0 || ^5.0.0-next.0',
		runes: false,
	},
	version: '0.9.80',
	components: ['drag-and-drop'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md, contributing guide or AI-related note was found in the repository, which also holds the documentation (the README); the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/isaacHagoel/svelte-dnd-action',
			'https://github.com/isaacHagoel/svelte-dnd-action/blob/master/README.md',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'The documentation is the README on GitHub; there is no separate docs site.',
		'Headless: you apply the action to your own markup and update your items array from its consider and finalize events, so styling is up to you.',
		'Written in plain JavaScript as an action, not with runes; the README has a Svelte 5 section (use onconsider / onfinalize) and the peer range accepts Svelte 3, 4 and 5.',
		'Still on a 0.x version number, although the README describes it as production ready and actively maintained.',
	],
})
