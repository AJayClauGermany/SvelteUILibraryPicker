import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-confetti',
	name: 'Svelte Confetti',
	description:
		'A single Svelte component that bursts confetti using plain DOM elements and CSS animations (no canvas), with props for amount, colours, spread, duration and looping.',
	kind: 'component',
	// Demo and docs site linked from the README and the npm homepage field.
	docs: 'https://mitcheljager.github.io/svelte-confetti/',
	repository: 'https://github.com/Mitcheljager/svelte-confetti',
	packages: ['svelte-confetti'],
	license: {
		spdx: 'Unlicense',
		url: 'https://github.com/Mitcheljager/svelte-confetti/blob/master/LICENSE',
		notes: 'The LICENSE file (in the repo and in the npm tarball) is the Unlicense public-domain dedication, while package.json declares "MIT".',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5.0.0',
		runes: true,
	},
	version: '2.3.2',
	components: ['confetti'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the docs site, no MCP server, no AGENTS.md/CLAUDE.md and no contributing guide were found in the repository; the Unlicense text has no AI clause.',
		sources: [
			'https://github.com/Mitcheljager/svelte-confetti',
			'https://github.com/Mitcheljager/svelte-confetti/blob/master/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '2.3.2', date: '2025-07-02' },
		lastCommit: '2025-12-27',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-confetti', 'https://github.com/Mitcheljager/svelte-confetti'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'The 2.x line targets Svelte 5; the README points Svelte 4 users to the 1.x line.',
		'Confetti pieces are rendered as elements animated with CSS, so very high amounts can affect performance; a prop can turn the effect off for users who prefer reduced motion.',
	],
})
