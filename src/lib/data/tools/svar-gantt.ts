import { defineTool } from '../schema'

// github.com pages answered 403 through the research proxy; the repo was cloned (commit ba70128)
// and the license/changelog files were checked on raw.githubusercontent.com instead.
export default defineTool({
	id: 'svar-gantt',
	name: 'SVAR Svelte Gantt',
	description:
		'A ready-made Svelte 5 Gantt chart from the SVAR widget family: a task grid beside a timeline with drag-and-drop scheduling, dependency links, a task edit form, zooming and light/dark themes.',
	kind: 'component',
	docs: 'https://docs.svar.dev/svelte/gantt/getting_started/',
	repository: 'https://github.com/svar-widgets/gantt',
	packages: ['@svar-ui/svelte-gantt'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/svar-widgets/gantt/blob/main/license.txt',
		notes: 'Covers the open-source edition only. The PRO edition is a separate package (@svar/svelte-gantt) under paid commercial licenses.',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '2.8.3',
	components: ['gantt'],
	// The gantt depends on @svar-ui/svelte-core (pinned 2.6.2), not the other way round;
	// svar-core neither depends on nor documents the gantt. See notes.
	usedBy: [],
	ai: {
		status: 'welcomes',
		summary:
			'The Gantt docs have an AI tools page offering an installable agent skill (svar-svelte), flat Markdown context files for chat tools, and an SVAR MCP server with docs and code examples. No llms.txt was found at the docs or website root, and the repo has no AGENTS.md or contributing guidance on AI.',
		sources: [
			'https://docs.svar.dev/svelte/gantt/ai-tools/',
			'https://docs.svar.dev/mcp-server/',
			'https://github.com/svar-widgets/skills/tree/main/svar-svelte',
			'https://github.com/svar-widgets/skills/tree/main/guides',
			'https://github.com/svar-widgets/gantt/blob/main/license.txt',
		],
	},
	maintenance: {
		lastRelease: { version: '2.8.3', date: '2026-11-08' },
		lastCommit: '2026-11-08',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/@svar-ui/svelte-gantt', 'https://github.com/svar-widgets/gantt'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Open-core: the MIT package covers the timeline, grid, editor and dependencies; auto-scheduling, constraints, critical path, resources, baselines, undo/redo and export are PRO-only (paid, per-developer licences). The two editions use package names that differ by only a few characters, so check which one you install.',
		'Wrap the chart in the exported Willow or WillowDark theme component, as the quickstart shows; without a theme it does not display correctly.',
		'Depends on @svar-ui/svelte-core (tracked here as SVAR Svelte Core) and the SVAR grid, menu, toolbar and editor packages at pinned versions.',
		'The 2.x line targets Svelte 5 (support added in 2.0.1); the README points Svelte 4 users to wx-svelte-gantt 1.x.',
		'Live demos: https://docs.svar.dev/svelte/gantt/samples/ (linked from the README).',
	],
})
