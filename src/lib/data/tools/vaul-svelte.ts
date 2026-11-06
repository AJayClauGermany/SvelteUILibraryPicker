import { defineTool } from '../schema'

export default defineTool({
	id: 'vaul-svelte',
	name: 'Vaul Svelte',
	description:
		'Unstyled drawer for Svelte that slides in from a screen edge, with drag-to-dismiss and snap points; a Svelte port of the React Vaul drawer.',
	kind: 'headless',
	docs: 'https://github.com/huntabyte/vaul-svelte#readme',
	repository: 'https://github.com/huntabyte/vaul-svelte',
	packages: ['vaul-svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/huntabyte/vaul-svelte/blob/main/LICENSE',
		notes: 'Copyright is shared by Hunter Johnston and Emil Kowalski, the author of the original React Vaul.',
	},
	svelte: {
		supported: [4, 5],
		peerRange: '^4.0.0 || ^5.0.0-next.1',
		runes: false,
	},
	version: '0.3.2',
	components: ['drawer'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its Drawer component wraps the vaul-svelte primitives (installs the next pre-release).',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/drawer.json',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide mentioning AI was found in the repository (main and next branches). The docs site could not be reached to check for an llms.txt.',
		sources: [
			'https://github.com/huntabyte/vaul-svelte',
			'https://github.com/huntabyte/vaul-svelte/tree/next',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Version 0.3.2 (the npm latest tag) uses Svelte 4 component syntax and builds on Bits UI 0.x. The Svelte 5 rewrite is published only as a pre-release (1.0.0-next.7 under the next tag, svelte peer ^5.0.0, runes), developed on the next branch.',
		'The 1.0.0-next.7 package imports bits-ui but lists it only as a dev dependency, so apps install bits-ui themselves.',
		'The API reference is in the repository README; it shares most props with the Bits UI Dialog.',
	],
})
