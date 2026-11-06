import { defineTool } from '../schema'

export default defineTool({
	id: 'paneforge',
	name: 'PaneForge',
	description:
		'Svelte components for resizable pane layouts: groups of panes split by draggable handles, with nesting, collapsing and saved layouts. Ships only layout styles.',
	kind: 'headless',
	docs: 'https://paneforge.com/docs',
	repository: 'https://github.com/svecosystem/paneforge',
	packages: ['paneforge'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svecosystem/paneforge/blob/main/LICENSE',
		notes: 'Copyright is shared by Hunter Johnston and Brian Vaughn, whose react-resizable-panels it adapts code from.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.29.0',
		runes: true,
	},
	version: '1.0.2',
	components: ['resizable'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its Resizable component is built on PaneForge.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/resizable.json',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt route, MCP server, AGENTS.md/CLAUDE.md or contributing guide mentioning AI was found in the repository, which also holds the docs site source.',
		sources: [
			'https://github.com/svecosystem/paneforge',
			'https://github.com/svecosystem/paneforge/tree/main/docs',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Unstyled apart from the CSS needed to lay out the panes; each part takes a class prop for your own styles.',
	],
})
