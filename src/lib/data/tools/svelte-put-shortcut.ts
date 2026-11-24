import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-put-shortcut',
	name: '@svelte-put/shortcut',
	description:
		'A small Svelte action that binds keyboard shortcuts on an element or the window, matching keys or key codes with optional modifiers and calling a handler or dispatching an event.',
	kind: 'utility',
	// npm homepage and the package README both point here; svelte-put.vnphanquang.com/docs/shortcut redirects to it.
	docs: 'https://vnphanquang.com/projects/svelte-put/packages/shortcut',
	repository: 'https://github.com/vnphanquang/svelte-put',
	packages: ['@svelte-put/shortcut'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/vnphanquang/svelte-put/blob/main/LICENSE',
		notes: 'One MIT LICENSE at the monorepo root covers every svelte-put package; packages/shortcut has no LICENSE of its own.',
	},
	svelte: {
		supported: [5],
		peerRange: '>=5.0.0',
		runes: true,
	},
	version: '4.2.1',
	components: ['hotkeys'],
	usedBy: [],
	ai: {
		status: 'restricted',
		summary:
			'The repo\'s AI_POLICY.md (Human Voice policy) allows AI-assisted code but requires issues, comments and PR descriptions in the contributor\'s own words. The docs site\'s robots.txt disallows AI crawlers and agents (Claude-Code included), its ai.txt withholds consent to training commercial AI, and its footer says "no ai". No llms.txt, MCP server or AGENTS.md/CLAUDE.md was found.',
		sources: [
			'https://github.com/vnphanquang/svelte-put/blob/main/AI_POLICY.md',
			'https://github.com/vnphanquang/svelte-put/blob/main/CONTRIBUTING.md',
			'https://vnphanquang.com/projects/svelte-put/robots.txt',
			'https://vnphanquang.com/projects/svelte-put/ai.txt',
		],
		upstreamContributing:
			'Write issues, comments and PR descriptions for svelte-put yourself, not with an AI, and only submit code you fully understand.',
	},
	maintenance: {
		lastRelease: { version: '4.2.1', date: '2026-11-21' },
		lastCommit: '2026-11-23',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@svelte-put/shortcut', 'https://github.com/vnphanquang/svelte-put'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Part of the svelte-put monorepo (packages/shortcut). Version 4 dropped Svelte 4; it is used as an action (use:shortcut) and fires an onshortcut event.',
		'Marked restricted because the docs site opts out of AI agents and AI training, so this entry holds facts and links only, with no previews.',
	],
})
