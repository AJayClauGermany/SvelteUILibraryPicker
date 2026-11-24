import { defineTool } from '../schema'

export default defineTool({
	id: 'auto-animate',
	name: 'AutoAnimate',
	description:
		'A zero-config helper that watches a parent element and animates its direct children as they are added, removed or reordered.',
	kind: 'utility',
	docs: 'https://auto-animate.formkit.com/#usage-svelte',
	repository: 'https://github.com/formkit/auto-animate',
	packages: ['@formkit/auto-animate'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/formkit/auto-animate/blob/master/LICENSE',
	},
	version: '0.11.0',
	components: ['animation'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the docs site, MCP server, AGENTS.md/CLAUDE.md for the project or AI section in the README contributing notes was found, and the MIT LICENSE has no AI clause. The repo keeps a .cursorrules file that describes the codebase for editor agents, but it states no policy.',
		sources: [
			'https://github.com/formkit/auto-animate',
			'https://github.com/formkit/auto-animate/blob/master/README.md',
			'https://github.com/formkit/auto-animate/blob/master/.cursorrules',
			'https://github.com/formkit/auto-animate/tree/master/docs',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Framework-agnostic: the package has no Svelte peer dependency, so no Svelte support data is recorded. It also ships adapters for React, Vue (plus a Nuxt module), Preact, Solid, Angular and Marko.',
		'Svelte usage is documented in two forms: the core autoAnimate function used directly as an action (use:autoAnimate), and, since 0.11.0, a Svelte 5 attachment exported from @formkit/auto-animate/svelte ({@attach autoAnimate}).',
		'It only animates the immediate children of the element it is attached to, and by default it skips animations when the user prefers reduced motion.',
	],
})
