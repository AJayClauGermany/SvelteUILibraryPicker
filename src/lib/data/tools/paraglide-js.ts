import { defineTool } from '../schema'

export default defineTool({
	id: 'paraglide-js',
	name: 'Paraglide JS',
	description:
		'A compiler-based i18n library that turns translation files into typed, tree-shakable message functions, plus a runtime for picking the locale on the client and server.',
	kind: 'utility',
	docs: 'https://paraglidejs.com/',
	repository: 'https://github.com/generaltranslation/paraglide-js',
	packages: ['@inlang/paraglide-js'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/generaltranslation/paraglide-js/blob/main/LICENSE',
		notes: 'The root LICENSE (MIT, copyright General Translation, Inc.) matches the license field in package.json; the optional Svelte adapter in framework/svelte carries its own MIT LICENSE.',
	},
	version: '3.2.2',
	components: ['i18n'],
	usedBy: [],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site publishes an llms.txt index, an llms-full.txt with every page, and a Markdown version of each page (append .md to its URL). No MCP server, AGENTS.md or CLAUDE.md was found in the repo, and CONTRIBUTING says nothing about AI use.',
		sources: [
			'https://paraglidejs.com/llms.txt',
			'https://paraglidejs.com/llms-full.txt',
			'https://github.com/generaltranslation/paraglide-js/blob/main/CONTRIBUTING.md',
			'https://github.com/generaltranslation/paraglide-js/blob/main/website/src/docs/agent-markdown.ts',
		],
		llmsTxt: 'https://paraglidejs.com/llms.txt',
	},
	maintenance: {
		lastRelease: { version: '3.2.2', date: '2026-11-10' },
		lastCommit: '2026-11-24',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@inlang/paraglide-js', 'https://github.com/generaltranslation/paraglide-js'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Framework-agnostic: the core package has no Svelte peer dependency (only optional vite and eslint peers), so no Svelte support data is recorded. The docs have a SvelteKit guide at https://paraglidejs.com/sveltekit.',
		'The Svelte CLI offers it as an add-on: `npx sv add paraglide` sets it up in a SvelteKit project (https://svelte.dev/docs/cli/paraglide).',
		'For messages that contain markup there is an optional companion package, @inlang/paraglide-js-svelte (version 1.0.5, peer svelte ^5.0.0), which renders them through Svelte snippets.',
		'It handles translated strings, not UI: the message functions and locale helpers are plain JavaScript that you call from your own components.',
		'The npm repository field points to generaltranslation/paraglide-js; the older opral/paraglide-js address used in the README and llms.txt leads to the same repository. The former inlang.com docs URL now redirects to paraglidejs.com.',
	],
})
