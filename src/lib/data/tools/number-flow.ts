import { defineTool } from '../schema'

export default defineTool({
	id: 'number-flow',
	name: 'NumberFlow',
	description:
		'A Svelte component that formats numbers with Intl.NumberFormat and animates each digit when the value changes, backed by a framework-agnostic custom element.',
	kind: 'component',
	docs: 'https://number-flow.barvian.me/svelte',
	repository: 'https://github.com/barvian/number-flow',
	packages: ['@number-flow/svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/barvian/number-flow/blob/main/LICENSE.md',
	},
	svelte: {
		supported: [4, 5],
		peerRange: '^4 || ^5',
		runes: false,
	},
	version: '0.4.2',
	components: ['animated-value'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the docs site (404), and no MCP server, AGENTS.md/CLAUDE.md or contributing guide in the repository; the README does not mention AI and the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/barvian/number-flow',
			'https://github.com/barvian/number-flow/blob/main/LICENSE.md',
		],
	},
	maintenance: {
		lastRelease: { version: '0.4.2', date: '2026-07-18' },
		lastCommit: '2026-09-20',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@number-flow/svelte', 'https://github.com/barvian/number-flow'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'The Svelte package wraps a custom element (`<number-flow-svelte>`) built on the framework-agnostic number-flow package; the same author publishes React, Vue and vanilla versions from the same repo.',
		'Components are written in legacy (non-runes) Svelte syntax, which Svelte 5 still runs.',
		'Styling is done with plain CSS on the element and its exposed ::part() selectors.',
	],
})
