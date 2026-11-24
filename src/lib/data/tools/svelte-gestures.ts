import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-gestures',
	name: 'svelte-gestures',
	description:
		'Pointer-event gesture recognizers for Svelte 5 (pan, pinch, rotate, swipe, tap, press, multi-touch and custom shapes), applied to elements as attachments.',
	kind: 'utility',
	// The project has no docs site: the README is the documentation (also the npm homepage).
	docs: 'https://github.com/Rezi/svelte-gestures#readme',
	repository: 'https://github.com/Rezi/svelte-gestures',
	packages: ['svelte-gestures'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/Rezi/svelte-gestures/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		runes: true,
	},
	version: '5.2.2',
	components: ['gestures'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide was found in the repo, the README does not mention AI, and the LICENSE is the standard MIT text.',
		sources: [
			'https://github.com/Rezi/svelte-gestures',
			'https://github.com/Rezi/svelte-gestures/blob/main/README.md',
			'https://github.com/Rezi/svelte-gestures/blob/main/LICENSE',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'The package declares no svelte peerDependency. The README says 5.2.x works only with Svelte 5, and the gestures are built on attachments (createAttachmentKey from svelte/attachments, bundled into the npm build), which Svelte added in 5.29.0.',
		'The 5.2 releases replaced the earlier actions with attachments and changed how options are passed (the CHANGELOG lists this under 5.2.1, though 5.2.0 on npm already used attachments); the README for 5.1.4 and older is kept in the repo. The README points Svelte 4 projects to svelte-gestures 4 and older Svelte to 1.5.2 or lower.',
		'Also includes a composed gesture for combining recognizers on one element, a touch scroll helper and optional plugins for visual feedback and vibration.',
		'Also published on JSR as @rezi/svelte-gestures. The latest release (5.2.2) and last commit date from September 2025.',
	],
})
