import { defineTool } from '../schema'

export default defineTool({
	id: 'tanstack-virtual',
	name: 'TanStack Virtual',
	description:
		'A headless virtualizer that works out which rows, columns or grid cells of a long list are visible so you only render those, with your own markup.',
	kind: 'headless',
	docs: 'https://tanstack.com/virtual/latest/docs/framework/svelte/svelte-virtual',
	repository: 'https://github.com/TanStack/virtual',
	packages: ['@tanstack/svelte-virtual'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/TanStack/virtual/blob/main/LICENSE',
	},
	svelte: {
		supported: [3, 4, 5],
		peerRange: '^3.48.0 || ^4.0.0 || ^5.0.0',
		runes: false,
	},
	version: '3.13.52',
	components: ['virtual-list'],
	usedBy: [
		{
			library: 'ark-ui',
			how: 'The Svelte Combobox and Tree View docs include virtualized examples built with @tanstack/svelte-virtual.',
			source: 'https://github.com/chakra-ui/ark/blob/main/packages/svelte/src/lib/components/combobox/examples/virtualized.svelte',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'The repo has no llms.txt, AGENTS.md, CLAUDE.md or MCP server config, and its README, CONTRIBUTING and MIT LICENSE say nothing about AI. The tanstack.com site could not be checked.',
		sources: [
			'https://github.com/TanStack/virtual/blob/main/CONTRIBUTING.md',
			'https://github.com/TanStack/virtual/blob/main/LICENSE',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'The peer range accepts Svelte 5, but the adapter is built on Svelte stores (createVirtualizer returns a readable store you read with `$`), not runes. The package itself is developed and tested against Svelte 4, and the official Svelte examples use Svelte 4.',
		'The Svelte adapter is a thin wrapper over the framework-agnostic @tanstack/virtual-core, which it installs as a dependency and re-exports.',
	],
})
