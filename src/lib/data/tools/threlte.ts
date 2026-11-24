import { defineTool } from '../schema'

export default defineTool({
	id: 'threlte',
	name: 'Threlte',
	description:
		'A 3D framework for Svelte that wraps Three.js in declarative, reactive components: a Canvas, a <T> component for any Three.js object, render loop scheduling and pointer events.',
	kind: 'component',
	docs: 'https://threlte.xyz',
	repository: 'https://github.com/threlte/threlte',
	packages: ['@threlte/core'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/threlte/threlte/blob/main/LICENSE.md',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5',
		runes: true,
	},
	version: '8.7.0',
	components: ['scene-3d'],
	usedBy: [],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site publishes llms.txt and llms-full.txt and advertises both in its page head. No MCP server, AGENTS.md/CLAUDE.md or AI section in CONTRIBUTING.md was found; the MIT LICENSE has no AI clause.',
		sources: [
			'https://threlte.xyz/llms.txt',
			'https://github.com/threlte/threlte/blob/main/apps/docs/src/components/SEO/SEO.astro',
			'https://github.com/threlte/threlte/blob/main/CONTRIBUTING.md',
		],
		llmsTxt: 'https://threlte.xyz/llms.txt',
	},
	lastVerified: '2026-11-24',
	notes: [
		'three is a required peer dependency (>=0.172) and is installed alongside @threlte/core.',
		'@threlte/core is the minimum; optional packages such as @threlte/extras (ready-made helpers like controls, environments and text), @threlte/rapier (physics) and @threlte/xr can be added as needed.',
		'Scenes are WebGL/WebGPU canvases with no UI-library styling; look and feel come from your Three.js materials, lights and models.',
	],
})
