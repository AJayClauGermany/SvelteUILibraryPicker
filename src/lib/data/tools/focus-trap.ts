import { defineTool } from '../schema'

export default defineTool({
	id: 'focus-trap',
	name: 'focus-trap',
	description:
		'A framework-agnostic script that keeps keyboard focus inside one or more DOM containers, with options for initial and returned focus and deactivation on Escape or outside clicks.',
	kind: 'utility',
	// No separate docs site: the README is the documentation and the GitHub Pages site is its demo page.
	docs: 'https://github.com/focus-trap/focus-trap#readme',
	repository: 'https://github.com/focus-trap/focus-trap',
	packages: ['focus-trap'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/focus-trap/focus-trap/blob/master/LICENSE',
	},
	version: '8.2.6',
	components: ['focus-trap'],
	usedBy: [
		{
			library: 'melt',
			how: 'Runtime dependency; the Popover builder traps focus in its content with it.',
			source: 'https://github.com/melt-ui/next-gen/blob/main/packages/melt/package.json',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repo commits a WARP.md with build, test and architecture guidance for the Warp AI coding agent. No llms.txt or MCP server was found, and CONTRIBUTING.md and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/focus-trap/focus-trap/blob/master/WARP.md',
			'https://github.com/focus-trap/focus-trap/blob/master/CONTRIBUTING.md',
			'https://github.com/focus-trap/focus-trap/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Framework-agnostic: it works on plain DOM elements, has no Svelte peer dependency, so no Svelte support data is recorded. It ships its own TypeScript types and depends on tabbable.',
		'Melt 0.44.0 depends on ^7.6.5, an older major than the version recorded here.',
		'Zag (and through it Ark UI and Skeleton) ships its own @zag-js/focus-trap, which its source says was refactored from focus-trap; it does not depend on this package. Bits UI has its own focus scope built on tabbable.',
	],
})
