import { defineTool } from '../schema'

export default defineTool({
	id: 'photoswipe',
	name: 'PhotoSwipe',
	description:
		'A framework-agnostic JavaScript image lightbox with pinch and click zoom, swipe navigation and an opening animation from the thumbnail.',
	kind: 'component',
	docs: 'https://photoswipe.com/getting-started/',
	repository: 'https://github.com/dimsemenov/PhotoSwipe',
	packages: ['photoswipe'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/dimsemenov/PhotoSwipe/blob/master/LICENSE',
	},
	version: '5.4.4',
	components: ['lightbox'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on photoswipe.com, no MCP server, and no AGENTS.md, CLAUDE.md or CONTRIBUTING file in the repo (which also holds the Docusaurus docs source). The README and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/dimsemenov/PhotoSwipe/blob/master/README.md',
			'https://github.com/dimsemenov/PhotoSwipe/blob/master/LICENSE',
			'https://github.com/dimsemenov/PhotoSwipe/tree/master/demo-docs-website',
		],
	},
	maintenance: {
		lastRelease: { version: '5.4.4', date: '2024-05-24' },
		lastCommit: '2025-12-04',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/photoswipe', 'https://github.com/dimsemenov/PhotoSwipe'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Framework-agnostic: it has no dependencies or Svelte peer dependency, so no Svelte support data is recorded. You create the lightbox in `onMount` (or an `$effect`) on your own gallery markup and destroy it on unmount.',
		'The official docs include a short Svelte page with a StackBlitz example: https://photoswipe.com/svelte-image-gallery/',
		'You must give each image its width and height up front, and import the stylesheet (`photoswipe/style.css`) yourself.',
		'The last npm release (5.4.4) dates from May 2024, though the repo still received fixes in late 2025 and the README says a v6 is in development.',
	],
})
