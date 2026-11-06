import { defineTool } from '../schema'

export default defineTool({
	id: 'embla-carousel',
	name: 'Embla Carousel',
	description:
		'A dependency-free carousel engine for swipe, drag and snapping, applied in Svelte as an action on your own markup, which you style yourself.',
	kind: 'headless',
	docs: 'https://www.embla-carousel.com/docs/v8/get-started/svelte',
	repository: 'https://github.com/davidjerleke/embla-carousel',
	packages: ['embla-carousel-svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/davidjerleke/embla-carousel/blob/master/LICENSE',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.49.0 || ^4.0.0 || ^5.0.0',
	},
	version: '8.6.0',
	components: ['carousel'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'The Carousel component is built on embla-carousel-svelte.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/carousel.json',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md or CLAUDE.md was found in the repo or in the committed build of the docs site, and CONTRIBUTING and the MIT LICENSE say nothing about AI.',
		sources: [
			'https://github.com/davidjerleke/embla-carousel/blob/master/CONTRIBUTING.md',
			'https://github.com/davidjerleke/embla-carousel/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'The Svelte package is a `use:` action you put on the viewport element, not a component; runes do not apply to it.',
		'embla-carousel-svelte pulls in the framework-agnostic embla-carousel core as a regular dependency, so only the Svelte package needs installing. Plugins such as autoplay are separate packages.',
		'Facts are for the 8.x line on npm `latest`. A 9.0 release candidate is published under the `next` tag and the docs site now opens on v9, with v8 docs kept under /docs/v8.',
	],
})
