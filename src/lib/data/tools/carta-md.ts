import { defineTool } from '../schema'

export default defineTool({
	id: 'carta-md',
	name: 'Carta',
	description:
		'A Svelte Markdown editor and viewer built on unified/remark/rehype, with a write and preview pane, syntax highlighting and a plugin system.',
	kind: 'component',
	docs: 'https://beartocode.github.io/carta/getting-started',
	repository: 'https://github.com/BearToCode/carta',
	packages: ['carta-md'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/BearToCode/carta/blob/master/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '4.11.5',
	components: ['rich-text-editor'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md, contributing guide or AI-related note was found in the monorepo, which also holds the docs site source; the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/BearToCode/carta',
			'https://github.com/BearToCode/carta/tree/master/docs',
		],
	},
	maintenance: {
		lastRelease: { version: '4.11.5', date: '2026-10-07' },
		lastCommit: '2026-10-07',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/carta-md', 'https://github.com/BearToCode/carta'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Edits Markdown source rather than WYSIWYG content; the rendered preview sits beside the text area or in a separate tab.',
		'Carta does not sanitize the rendered HTML by default; the docs strongly recommend adding one that works on server and client (for example isomorphic-dompurify).',
		'Optional plugins are separate @cartamd/plugin-* packages (math, code, emoji, slash commands, attachments, anchors, TikZ and more), and remark/rehype plugins can be added too.',
	],
})
