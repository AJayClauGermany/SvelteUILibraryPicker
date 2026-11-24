import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-toast',
	name: 'svelte-toast',
	description:
		'A small toast notification package: place one SvelteToast container and push, update or pop toasts from anywhere, styled with CSS variables; also usable from plain JavaScript.',
	kind: 'component',
	// Listed as the homepage in package.json; the README calls it the demo and holds the API notes.
	docs: 'https://zerodevx.github.io/svelte-toast/',
	repository: 'https://github.com/zerodevx/svelte-toast',
	packages: ['@zerodevx/svelte-toast'],
	license: {
		spdx: 'ISC',
		url: 'https://github.com/zerodevx/svelte-toast/blob/master/LICENSE',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.57.0 || ^4.0.0 || ^5.0.0',
		runes: false,
	},
	version: '0.9.6',
	components: ['toast'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository; the ISC LICENSE has no AI clause.',
		sources: [
			'https://github.com/zerodevx/svelte-toast',
			'https://github.com/zerodevx/svelte-toast/blob/master/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '0.9.6', date: '2024-09-21' },
		lastCommit: '2024-09-21',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@zerodevx/svelte-toast', 'https://github.com/zerodevx/svelte-toast'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Written in the Svelte 4 component syntax (export let, stores); the peer range accepts Svelte 5, where it runs in legacy mode.',
		'Still pre-1.0; the latest release (0.9.6) dates from September 2024.',
		'The full API reference is the README on GitHub; the docs URL is the live demo.',
	],
})
