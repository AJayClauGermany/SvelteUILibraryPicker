import { defineTool } from '../schema'

export default defineTool({
	id: 'formsnap',
	name: 'Formsnap',
	description:
		'Unstyled Svelte components that wrap Superforms and wire labels, descriptions, error messages and ARIA attributes to each form field.',
	kind: 'headless',
	docs: 'https://formsnap.dev/docs',
	repository: 'https://github.com/svecosystem/formsnap',
	packages: ['formsnap'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svecosystem/formsnap/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '2.1.0',
	components: ['form'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its Form components are thin styled wrappers around Formsnap, documented on the Forms page and listed as a dependency of the form registry item.',
			source: 'https://shadcn-svelte.com/docs/forms',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or AI guidance was found in the repo or its docs source.',
		sources: [
			'https://github.com/svecosystem/formsnap',
			'https://github.com/svecosystem/formsnap/tree/main/docs',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Built on Superforms: sveltekit-superforms (^2.19.0 || ^3.0.0) is a required peer dependency and you use its APIs directly, so it inherits the SvelteKit requirement.',
		'shadcn-svelte documents it today on its Forms page (https://shadcn-svelte.com/docs/forms), whose registry item depends on formsnap ^2.0.1 and sveltekit-superforms ^2.28.1.',
	],
})
