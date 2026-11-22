import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-highlight',
	name: 'Svelte Highlight',
	description:
		'Svelte components for syntax-highlighted code blocks, with themes, line numbers, a copy button, diffs and streaming, using grammars converted from highlight.js.',
	kind: 'component',
	docs: 'https://svhe.onrender.com',
	repository: 'https://github.com/metonym/svelte-highlight',
	packages: ['svelte-highlight'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/metonym/svelte-highlight/blob/master/LICENSE',
		notes: 'The language grammars and themes are derived from highlight.js and stay under its BSD-3-Clause license, see https://github.com/metonym/svelte-highlight/blob/master/LICENSE.highlight.txt.',
	},
	svelte: {
		supported: [4, 5],
		runes: false,
	},
	version: '7.25.2',
	components: ['code-block'],
	usedBy: [],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site ships an llms.txt written for coding agents, pointing them to the README sections that are most often misread. No AGENTS.md, MCP server or AI section in CONTRIBUTING was found.',
		sources: [
			'https://github.com/metonym/svelte-highlight/blob/master/www/public/llms.txt',
			'https://github.com/metonym/svelte-highlight/blob/master/CONTRIBUTING.md',
		],
		llmsTxt: 'https://svhe.onrender.com/llms.txt',
	},
	lastVerified: '2026-11-22',
	notes: [
		'The published package declares no `svelte` peer dependency. Its components use the classic (non-runes) component syntax, and the repo keeps example apps for both Svelte 5 and Svelte 4 (examples/vite@svelte-4).',
		'Since 7.16 it uses its own highlighting engine; highlight.js is no longer a runtime dependency (it is only needed for the optional helper that imports custom highlight.js languages).',
		'The full reference lives in the GitHub README; the docs site is mostly a gallery of languages and styles.',
		'Bootstrap Svelte and SMUI use it only as a development dependency for their own docs sites, so they are not listed under "used by".',
	],
})
