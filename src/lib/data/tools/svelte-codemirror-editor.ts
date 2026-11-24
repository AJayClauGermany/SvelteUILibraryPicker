import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-codemirror-editor',
	name: 'svelte-codemirror-editor',
	description:
		'A Svelte component that wraps a CodeMirror 6 editor, with props for language, theme, extra extensions and common editor features, and a bindable value.',
	kind: 'component',
	// The README is the only documentation (it is also the npm homepage). The GitHub Pages site
	// built from src/routes is a small demo with a few language examples, not docs.
	docs: 'https://github.com/touchifyapp/svelte-codemirror-editor#readme',
	repository: 'https://github.com/touchifyapp/svelte-codemirror-editor',
	packages: ['svelte-codemirror-editor'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/touchifyapp/svelte-codemirror-editor/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '2.1.0',
	components: ['code-editor'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt (the demo site returns 404 for it), MCP server, AGENTS.md/CLAUDE.md or contributing guide was found in the repository; the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/touchifyapp/svelte-codemirror-editor',
			'https://github.com/touchifyapp/svelte-codemirror-editor/blob/main/LICENSE',
			'https://touchifyapp.github.io/svelte-codemirror-editor/',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'codemirror is a peer dependency you install yourself; language support (@codemirror/lang-*) and themes such as @codemirror/theme-one-dark are separate packages passed in as props.',
		'The 2.x line is Svelte 5 only (runes); the last 1.x release (1.4.2) declares a peer range of ^3.0.0 || ^4.0.0 || ^5.0.0.',
		'The README recommends excluding the component and the CodeMirror packages from Vite dependency optimization (optimizeDeps.exclude) in Vite and SvelteKit projects.',
		'The latest release (2.1.0) dates from October 2025; there have been no commits since.',
	],
})
