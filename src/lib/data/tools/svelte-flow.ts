import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-flow',
	name: 'Svelte Flow',
	description:
		'Svelte package from the xyflow team for node-based UIs: a pannable, zoomable canvas of draggable nodes and connectable edges, with minimap, controls and background add-ons.',
	kind: 'component',
	docs: 'https://svelteflow.dev',
	// Monorepo shared with React Flow; the Svelte package lives in packages/svelte.
	repository: 'https://github.com/xyflow/xyflow',
	packages: ['@xyflow/svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/xyflow/xyflow/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.25.0',
		runes: true,
	},
	version: '2.0.3',
	components: ['node-editor'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'The docs site publishes llms.txt and llms-full.txt. No MCP server, AGENTS.md/CLAUDE.md or AI section in CONTRIBUTING.md was found in the repository, and the MIT LICENSE has no AI clause.',
		sources: [
			'https://svelteflow.dev/llms.txt',
			'https://github.com/xyflow/xyflow/blob/main/CONTRIBUTING.md',
			'https://github.com/xyflow/xyflow/blob/main/LICENSE',
		],
		llmsTxt: 'https://svelteflow.dev/llms.txt',
	},
	lastVerified: '2026-11-24',
	notes: [
		'Needs a stylesheet import: style.css for the default look, base.css for the minimum, or xy-theme.css for the xyflow theme.',
		'The library stays MIT; a paid Pro subscription adds Pro examples and support, not extra package features.',
		'1.0 and later are Svelte 5 only; the last 0.x release (0.1.39) declares a peer range of ^3.0.0 || ^4.0.0 || ^5.0.0.',
	],
})
