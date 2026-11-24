import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-tiptap',
	name: 'svelte-tiptap',
	description:
		'Community Svelte components for the Tiptap editor: an editor content area, bubble and floating menus, and a renderer for Svelte node views.',
	kind: 'headless',
	// The repo README is the only documentation (it is also the npm homepage). The GitHub Pages
	// site built from the repo is a demo app, not docs.
	docs: 'https://github.com/sibiraj-s/svelte-tiptap#readme',
	repository: 'https://github.com/sibiraj-s/svelte-tiptap',
	packages: ['svelte-tiptap'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/sibiraj-s/svelte-tiptap/blob/master/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '3.0.2',
	components: ['rich-text-editor'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server or AGENTS.md/CLAUDE.md was found in the repo; the contributing guide asks for an issue or discussion before changes and says nothing about AI, and the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/sibiraj-s/svelte-tiptap',
			'https://github.com/sibiraj-s/svelte-tiptap/blob/master/.github/CONTRIBUTING.md',
			'https://github.com/sibiraj-s/svelte-tiptap/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'A Svelte layer on top of the Tiptap entry listed here, not a replacement: you still install @tiptap/core, @tiptap/pm and the Tiptap extensions you need (peer range ^3.0.0, plus the bubble and floating menu extensions and @floating-ui/dom), and configure the editor through the Tiptap docs.',
		'What it adds is Svelte-side glue: a store-based createEditor helper, components that mount the editor and its menus, and a way to render Svelte components as Tiptap node views. Menu markup and all styling are yours to write.',
		'Maintained by an individual developer, not by the Tiptap team. The README heading still mentions Tiptap v2, while the 3.x package peers on Tiptap 3.',
	],
})
