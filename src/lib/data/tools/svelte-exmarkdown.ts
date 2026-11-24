import { defineTool } from '../schema'

// Docs site source: docs/*.md in the repo, served at /docs/<file name without .md>.
export default defineTool({
	id: 'svelte-exmarkdown',
	name: 'svelte-exmarkdown',
	description:
		'A Svelte 5 component that renders Markdown strings at runtime through unified/remark/rehype, with plugins and per-element overrides via components or snippets.',
	kind: 'component',
	docs: 'https://ssssota.github.io/svelte-exmarkdown',
	repository: 'https://github.com/ssssota/svelte-exmarkdown',
	packages: ['svelte-exmarkdown'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/ssssota/svelte-exmarkdown/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.1.3',
		runes: true,
	},
	version: '5.0.2',
	components: ['markdown'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md, contributing guide or AI-related note was found in the repo, which also holds the docs site source; the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/ssssota/svelte-exmarkdown',
			'https://github.com/ssssota/svelte-exmarkdown/tree/main/docs',
		],
	},
	maintenance: {
		lastRelease: { version: '5.0.2', date: '2025-08-09' },
		lastCommit: '2026-07-17',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-exmarkdown', 'https://github.com/ssssota/svelte-exmarkdown'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Renders at runtime rather than at build time, so it suits Markdown that arrives as data (CMS content, user input, chat output); for Markdown files compiled into pages, a preprocessor such as MDsveX is the usual choice.',
		'Raw HTML inside the Markdown is not rendered by default; the docs say to add the rehype-raw plugin only when you trust the input. Elements can also be limited with allowlist/denylist helpers.',
		'GitHub Flavored Markdown is an opt-in plugin (svelte-exmarkdown/gfm); syntax highlighting, math and other syntax come from remark/rehype plugins.',
		'The repo changelog lists a 5.0.3 patch, but the latest version on npm at the time of checking was 5.0.2 (published August 2025).',
	],
})
