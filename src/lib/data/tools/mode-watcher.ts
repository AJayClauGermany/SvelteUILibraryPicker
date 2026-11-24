import { defineTool } from '../schema'

export default defineTool({
	id: 'mode-watcher',
	name: 'Mode Watcher',
	description:
		'Light/dark mode handling for Svelte apps: a ModeWatcher component sets the dark class and color-scheme on <html>, follows the OS preference and remembers the user’s choice.',
	kind: 'utility',
	// Site URL from docs/src/lib/site-config.ts in the repo; /docs is the docs index route.
	docs: 'https://mode-watcher.sveco.dev/docs',
	repository: 'https://github.com/svecosystem/mode-watcher',
	packages: ['mode-watcher'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svecosystem/mode-watcher/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.27.0',
		runes: true,
	},
	version: '1.1.0',
	components: ['theme-switcher'],
	usedBy: [
		{
			library: 'neobrutalism-svelte',
			how: 'Its Sonner component reads the current mode from mode-watcher.',
			source: 'https://github.com/olegpolin/neobrutalism-svelte/blob/main/src/lib/registry/ui/sonner/sonner.svelte',
		},
		{
			library: 'retroui-svelte',
			how: 'Its Sonner component reads the current mode from mode-watcher.',
			source: 'https://github.com/Mhamad6000/retroui-svelte/blob/main/registry.json',
		},
		{
			library: 'shadcn-svelte-extras',
			how: 'Its Light Switch and Theme Selector components are built on mode-watcher.',
			source: 'https://github.com/ieedan/shadcn-svelte-extras/blob/main/content/components/light-switch.md',
		},
		{
			library: 'shadcn-svelte',
			how: 'Its dark mode guide sets up mode-watcher, and the Sonner component reads the current mode from it.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/content/dark-mode/svelte.md',
		},
		{
			library: 'lily',
			how: 'Its dark mode page recommends mode-watcher, and the Sonner component imports it.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/content/dark-mode.md',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository or its docs source; the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/svecosystem/mode-watcher',
			'https://github.com/svecosystem/mode-watcher/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '1.1.0', date: '2025-06-28' },
		lastCommit: '2025-08-05',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/mode-watcher', 'https://github.com/svecosystem/mode-watcher'],
	},
	lastVerified: '2026-11-06',
	notes: [
		'It manages mode state and the <html> class; it ships no toggle button, so you render your own control (e.g. calling toggleMode).',
		'Besides light/dark mode it can also track a named theme, kept separate from the mode.',
	],
})
