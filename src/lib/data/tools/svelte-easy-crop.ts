import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-easy-crop',
	name: 'Svelte Easy Crop',
	description:
		'A Svelte port of react-easy-crop: one Cropper component with drag and zoom that reports the crop area in pixels and percentages.',
	kind: 'component',
	docs: 'https://github.com/ValentinH/svelte-easy-crop#readme',
	repository: 'https://github.com/ValentinH/svelte-easy-crop',
	packages: ['svelte-easy-crop'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/ValentinH/svelte-easy-crop/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '5.0.1',
	components: ['image-cropper'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary: 'No llms.txt, MCP server, AGENTS.md, CONTRIBUTING guide or AI statement was found in the repository.',
		sources: ['https://github.com/ValentinH/svelte-easy-crop'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'It only computes the crop area; producing the cropped image (for example with a canvas) is up to you.',
		'The Cropper is absolutely positioned and fills its parent, so the parent needs `position: relative`.',
		'Docs are the GitHub README plus a Svelte playground example. Versions 4.x and 5.x declare `^5.0.0`; 3.x declares `^4.0.0 || ^5.0.0` and 2.x `^4.0.0`.',
	],
})
