import { defineTool } from '../schema'

export default defineTool({
	id: 'sveltekit-superforms',
	name: 'Superforms',
	description:
		'Form handling for SvelteKit: schema validation on server and client, typed form data, error and loading state, and progressive enhancement.',
	kind: 'utility',
	docs: 'https://superforms.rocks',
	repository: 'https://github.com/ciscoheat/sveltekit-superforms',
	packages: ['sveltekit-superforms'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/ciscoheat/sveltekit-superforms/blob/main/LICENSE',
		notes:
			'Plain MIT. The README asks commercial users for a donation in exchange for commercial support on Discord; that is a support arrangement, not a license term.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.56.4',
		runes: false,
	},
	version: '3.1.0',
	components: ['form'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its Form components wrap Formsnap and Superforms; the registry item lists Superforms as a dependency and the Forms guide is built on it.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/form.json',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repo has an AGENTS.md written for AI coding agents working on the codebase. No llms.txt was found in the docs site source, and no MCP server or AI section in contributing docs.',
		sources: [
			'https://github.com/ciscoheat/sveltekit-superforms/blob/main/AGENTS.md',
			'https://github.com/ciscoheat/superforms-web',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'SvelteKit-specific: @sveltejs/kit (^2.12.0 || ^3.0.0) is a peer dependency, and the server side relies on SvelteKit load functions and form actions. A client-only SPA mode exists, but it still runs inside SvelteKit.',
		'Validation libraries (Zod, Valibot, ArkType, Yup, Joi and others) are optional peer dependencies used through adapters; install only the one you use.',
		'The client API returns Svelte stores rather than rune-based state, so `runes` is recorded as false even though the current release requires Svelte 5.',
		'It handles form state and validation only and renders no UI; pair it with your own inputs or with Formsnap for accessible field components.',
	],
})
