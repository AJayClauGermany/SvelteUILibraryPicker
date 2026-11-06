import { defineTool } from '../schema'

export default defineTool({
	id: 'floating-ui',
	name: 'Floating UI',
	description:
		'A positioning engine that places a floating element next to its anchor and keeps it in view by flipping, shifting and resizing it as space runs out.',
	kind: 'utility',
	docs: 'https://floating-ui.com/docs/getting-started',
	repository: 'https://github.com/floating-ui/floating-ui',
	packages: ['@floating-ui/dom'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/floating-ui/floating-ui/blob/master/LICENSE',
		notes: 'One MIT LICENSE at the monorepo root covers @floating-ui/dom, @floating-ui/core and the other packages.',
	},
	version: '1.8.0',
	components: ['popover', 'tooltip', 'dropdown-menu', 'hover-card', 'select', 'combobox', 'context-menu', 'menubar'],
	usedBy: [
		{
			library: 'bits-ui',
			how: 'Runtime dependency (with @floating-ui/core); its shared floating layer positions popovers, tooltips, menus, selects, comboboxes and the link preview.',
			source: 'https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/package.json',
		},
		{
			library: 'melt',
			how: 'Listed as both a dependency and a peer; the Popover and Tooltip builders position their content with it.',
			source: 'https://github.com/melt-ui/next-gen/blob/main/packages/melt/package.json',
		},
		{
			library: 'flowbite-svelte',
			how: 'Runtime dependency (with @floating-ui/utils); a shared Popper helper places Popover, Tooltip, Dropdown, Mega Menu and Speed Dial.',
			source: 'https://github.com/themesberg/flowbite-svelte/blob/main/package.json',
		},
		{
			library: 'svelte-ux',
			how: 'Runtime dependency used by Popover, Tooltip, Menu and the select fields.',
			source: 'https://github.com/techniq/svelte-ux/blob/main/packages/svelte-ux/package.json',
		},
		{
			library: 'sivir-ui',
			how: 'Runtime dependency; a shared positioning helper and the tooltip and context menu call it.',
			source: 'https://github.com/aidan-neel/sivir-ui/blob/main/packages/sivir/package.json',
		},
		{
			library: 'zag-js',
			how: 'The @zag-js/popper utility, which the overlay machines (popover, tooltip, menu, select...) depend on, wraps it.',
			source: 'https://github.com/chakra-ui/zag/blob/main/packages/utilities/popper/package.json',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md/CLAUDE.md or AI section in the README contributing notes was found in the repo, which also holds the docs website source. There is no separate CONTRIBUTING file.',
		sources: [
			'https://github.com/floating-ui/floating-ui',
			'https://github.com/floating-ui/floating-ui/blob/master/README.md',
			'https://github.com/floating-ui/floating-ui/tree/master/website',
		],
	},
	lastVerified: '2026-11-06',
	notes: [
		'Framework-agnostic: @floating-ui/dom works with plain DOM elements, so it has no Svelte peer dependency and no Svelte support data is recorded. The project ships React and Vue bindings but no official Svelte package.',
		'It only computes positions; focus handling, dismissal and ARIA wiring are left to you (or to the UI library built on it).',
		'Ark UI and Skeleton use it indirectly through Zag (@zag-js/popper), and shadcn-svelte and Lily indirectly through Bits UI; they do not depend on it themselves.',
		'Bootstrap Svelte and Sveltestrap depend on @popperjs/core (Popper v2, the predecessor of Floating UI) instead.',
	],
})
