import { defineTool } from '../schema'

export default defineTool({
	id: 'iconify-svelte',
	name: 'Iconify for Svelte',
	description:
		'A single Svelte Icon component that renders any icon from the Iconify collections as SVG, fetching icon data on demand from the Iconify API or from icons you register offline.',
	kind: 'component',
	docs: 'https://iconify.design/docs/icon-components/svelte/',
	repository: 'https://github.com/iconify/iconify',
	packages: ['@iconify/svelte'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/iconify/iconify/blob/main/license.txt',
		notes: 'The component is MIT; each icon set it loads keeps its own license (listed per set on the Iconify icon sets site).',
	},
	svelte: {
		supported: [5],
		peerRange: '>5.0.0',
		runes: true,
	},
	version: '5.2.4',
	components: ['icon'],
	usedBy: [
		{
			library: 'lily',
			how: 'Its components import the Iconify Icon component for their icons; the CLI adds @iconify/svelte.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/src/lib/registry/ui/accordion/accordion-trigger.svelte',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, AGENTS.md or AI section was found in the iconify monorepo (README, CONTRIBUTING) or in the documentation source repo. The docs host could not be reached from our environment to check for a served llms.txt.',
		sources: [
			'https://github.com/iconify/iconify/blob/main/CONTRIBUTING.md',
			'https://github.com/iconify/documentation',
		],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Version 5.x is Svelte 5 only. The svelte3 dist-tag points to 4.2.0 (peer `>4.0.0`) for Svelte 4 projects, and 3.x declares a peer of `*`.',
		'By default icon data is loaded at runtime from the public Iconify API; the package also has an offline entry point for icons you bundle yourself.',
		'The component README links to an SSR-friendlier alternative, the iconify-icon web component, for projects that hit hydration issues.',
		'The documentation source repo (iconify/documentation) still shows @iconify/svelte@2 in its install snippets, so the docs may lag behind the current major; check the package README for the latest usage.',
		'm3-svelte renders icon objects in the Iconify data format (@iconify/types) with its own Icon component; it does not use this package.',
	],
})
