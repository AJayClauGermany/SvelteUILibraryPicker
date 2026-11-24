import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-sonner',
	name: 'svelte-sonner',
	description:
		'A Svelte 5 port of the Sonner toast library: mount one Toaster and call toast() from anywhere; ships its own styles, light/dark themes and an unstyled option.',
	kind: 'component',
	// The demo site lives in the repo (src/routes) and declares this URL as its og:url;
	// shadcn-svelte's Sonner page links to it as the upstream docs.
	docs: 'https://svelte-sonner.vercel.app',
	repository: 'https://github.com/wobsoriano/svelte-sonner',
	packages: ['svelte-sonner'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/wobsoriano/svelte-sonner/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '1.2.3',
	components: ['toast'],
	usedBy: [
		{
			library: 'neobrutalism-svelte',
			how: 'Its Sonner component wraps svelte-sonner.',
			source: 'https://github.com/olegpolin/neobrutalism-svelte/blob/main/src/lib/registry/ui/sonner/sonner.svelte',
		},
		{
			library: 'retroui-svelte',
			how: 'Its Sonner component wraps svelte-sonner.',
			source: 'https://github.com/Mhamad6000/retroui-svelte/blob/main/registry.json',
		},
		{
			library: 'shadcn-svelte',
			how: 'Its Sonner component is a styled wrapper around svelte-sonner, which the CLI installs.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/sonner.json',
		},
		{
			library: 'lily',
			how: 'Its Sonner component wraps the svelte-sonner Toaster.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/src/lib/registry/ui/sonner/sonner.svelte',
		},
		{
			library: 'origin-ui-svelte',
			how: 'The toast examples on the Notifications page use it.',
			source: 'https://github.com/max-got/originui-svelte/blob/main/src/lib/constants.ts',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository; the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/wobsoriano/svelte-sonner',
			'https://github.com/wobsoriano/svelte-sonner/blob/main/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '1.2.3', date: '2026-11-02' },
		lastCommit: '2026-11-02',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-sonner', 'https://github.com/wobsoriano/svelte-sonner'],
	},
	lastVerified: '2026-11-06',
	notes: [
		'The toast theme defaults to the system preference; shadcn-svelte and Lily pair it with mode-watcher to follow the app’s own light/dark setting.',
	],
})
