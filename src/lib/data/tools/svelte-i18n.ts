import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-i18n',
	name: 'svelte-i18n',
	description:
		'Store-based internationalization for Svelte: load locale dictionaries, switch the active locale, format ICU messages through FormatJS and numbers, dates and times with Intl.',
	kind: 'utility',
	// No separate docs site: the npm homepage points at the repo README, and the docs live as
	// Markdown files in the repo's docs/ folder. Checked in a shallow clone of main.
	docs: 'https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md',
	repository: 'https://github.com/kaisermann/svelte-i18n',
	packages: ['svelte-i18n'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/kaisermann/svelte-i18n/blob/main/LICENSE',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3 || ^4 || ^5',
		runes: false,
	},
	version: '4.0.1',
	components: ['i18n'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or CONTRIBUTING file was found in the repository, and the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/kaisermann/svelte-i18n',
			'https://github.com/kaisermann/svelte-i18n/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '4.0.1', date: '2024-10-21' },
		lastCommit: '2024-10-21',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-i18n', 'https://github.com/kaisermann/svelte-i18n'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'It is built on Svelte stores (you read translations with $_ or $format), not runes. Svelte 5 support came in 4.0.1, which only widened the peer range; the package itself was not rewritten for runes.',
		'The project is quiet: 4.0.1 (October 2024) is the latest release and the last commit on main, and the README says a rework (instances instead of a global singleton) is planned when the maintainer has time.',
		'Messages use the ICU MessageFormat syntax via intl-messageformat; it also ships a CLI that extracts message ids from your Svelte files.',
		'The docs are Markdown files in the repository (getting started, SvelteKit usage, formatting, locale, CLI, FAQ), not a hosted site.',
	],
})
