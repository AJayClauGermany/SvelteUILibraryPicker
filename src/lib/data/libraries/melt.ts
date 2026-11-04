import { defineLibrary } from '../schema'

const d = 'https://next.melt-ui.com/components'

export default defineLibrary({
	id: 'melt',
	name: 'Melt UI (next-gen)',
	description:
		'A pre-1.0 rewrite of Melt UI for Svelte 5 that provides runes-based, headless builder classes whose props you spread onto your own markup.',
	docs: 'https://next.melt-ui.com',
	repository: 'https://github.com/melt-ui/next-gen',
	packages: ['melt'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/melt-ui/next-gen/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.30.1',
		runes: true,
	},
	version: '0.44.0',
	styling: ['headless'],
	dependencies: [],
	features: ['typescript', 'accessibility', 'runes'],
	components: [
		{ id: 'accordion', name: 'Accordion', docs: `${d}/accordion` },
		{ id: 'avatar', name: 'Avatar', docs: `${d}/avatar` },
		{ id: 'collapsible', name: 'Collapsible', docs: `${d}/collapsible` },
		{ id: 'combobox', name: 'Combobox', docs: `${d}/combobox` },
		{ id: 'dialog', name: 'Dialog', docs: `${d}/dialog` },
		{ id: 'file-upload', name: 'File Upload', docs: `${d}/file-upload` },
		{ id: 'pin-input', name: 'PIN Input', docs: `${d}/pin-input` },
		{ id: 'popover', name: 'Popover', docs: `${d}/popover` },
		{ id: 'progress', name: 'Progress', docs: `${d}/progress` },
		{ id: 'radio-group', name: 'Radio Group', docs: `${d}/radio-group` },
		{ id: 'select', name: 'Select', docs: `${d}/select` },
		{ id: 'slider', name: 'Slider', docs: `${d}/slider` },
		{ id: 'tabs', name: 'Tabs', docs: `${d}/tabs` },
		{ id: 'toast', name: 'Toaster', docs: `${d}/toaster` },
		{ id: 'toggle', name: 'Toggle', docs: `${d}/toggle` },
		{ id: 'tooltip', name: 'Tooltip', docs: `${d}/tooltip` },
		{ id: 'tree-view', name: 'Tree', docs: `${d}/tree` },
	],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt, MCP server, agent instruction files or AI-related guidance was found in the repository, docs source, CONTRIBUTING or LICENSE.',
		sources: [
			'https://github.com/melt-ui/next-gen/blob/main/CONTRIBUTING.md',
			'https://github.com/melt-ui/next-gen/tree/main/docs',
		],
	},
	lastVerified: '2026-11-04',
	notes: [
		'Still 0.x; this is the successor to @melt-ui/svelte (the Svelte 3/4-era store-based library), published under the npm name "melt".',
		'Lists @floating-ui/dom (^1.6.0) as a peer dependency, but it is also a regular dependency, so installing melt pulls it in; the install guide only asks for melt.',
		'A work-in-progress Spatial Menu builder is also documented but has no canonical id here.',
	],
})
