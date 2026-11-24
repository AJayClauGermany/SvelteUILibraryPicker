import { defineTool } from '../schema'

export default defineTool({
	id: 'phosphor-svelte',
	name: 'Phosphor (Svelte)',
	description:
		'The Phosphor icon family as one Svelte 5 component per icon, with six weights (thin to duotone) and props for size, color and mirroring.',
	kind: 'component',
	docs: 'https://github.com/haruaki07/phosphor-svelte#readme',
	repository: 'https://github.com/haruaki07/phosphor-svelte',
	packages: ['phosphor-svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/haruaki07/phosphor-svelte/blob/main/LICENSE',
		notes: 'The icon artwork comes from the phosphor-icons/core repo (included as a git submodule), which is also MIT licensed.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0 || ^5.0.0-next.96',
		runes: true,
	},
	version: '3.1.1',
	components: ['icon'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'Its CLI offers Phosphor as one of the selectable icon libraries (installing phosphor-svelte), and the Lyra preset uses it by default.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/packages/cli/src/icons/libraries.ts',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'The repo has no llms.txt, MCP server, AGENTS.md/CLAUDE.md, CONTRIBUTING file or AI clause in its LICENSE or README. phosphoricons.com does not serve an llms.txt.',
		sources: [
			'https://github.com/haruaki07/phosphor-svelte',
			'https://github.com/haruaki07/phosphor-svelte/blob/main/README.md',
			'https://phosphoricons.com',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Usage docs live in the package README; the npm homepage, phosphoricons.com, is where you browse and search the icons.',
		'Version 3.x is Svelte 5 only. The previous major, 2.0.1, declares a peer of `>=3` for older Svelte projects.',
		'Components are exported with an `Icon` suffix (e.g. `CubeIcon`); the unsuffixed names still work but are deprecated. The README recommends deep imports (or its optional Vite plugin) because named imports from the package root compile slowly.',
		'The repo and npm package are maintained under the haruaki07 account, not the phosphor-icons GitHub organization that hosts the icon artwork.',
	],
})
