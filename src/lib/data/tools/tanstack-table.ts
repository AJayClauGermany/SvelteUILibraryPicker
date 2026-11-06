import { defineTool } from '../schema'

// tanstack.com and shadcn-svelte.com were unreachable from the research environment. The docs
// URL is the one shadcn-svelte's Data Table page links to, and it matches the route in the
// TanStack repo's docs/config.json (framework/svelte/quick-start).
export default defineTool({
	id: 'tanstack-table',
	name: 'TanStack Table',
	description:
		'A headless table engine with a Svelte 5 adapter that manages sorting, filtering, pagination, selection and grouping state while you write the table markup and styles.',
	kind: 'headless',
	docs: 'https://tanstack.com/table/latest/docs/framework/svelte/quick-start',
	repository: 'https://github.com/TanStack/table',
	packages: ['@tanstack/svelte-table'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/TanStack/table/blob/main/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '9.3.1',
	components: ['table'],
	usedBy: [
		{
			library: 'shadcn-svelte',
			how: 'The Data Table guide builds on its Table component and has you install @tanstack/svelte-table v9.',
			source: 'https://shadcn-svelte.com/docs/components/data-table',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repo has an AGENTS.md, and the npm packages ship agent skills (SKILL.md files, including Svelte getting-started and migration skills) with a docs guide on loading them. CONTRIBUTING allows AI-assisted code under conditions.',
		sources: [
			'https://github.com/TanStack/table/blob/main/AGENTS.md',
			'https://github.com/TanStack/table/blob/main/docs/agent-skills.md',
			'https://github.com/TanStack/table/tree/main/packages/svelte-table/skills',
			'https://github.com/TanStack/table/blob/main/CONTRIBUTING.md',
		],
		upstreamContributing:
			'AGENTS.md says AI-assisted changes follow CONTRIBUTING.md like any other: keep each change to one topic, understand and verify generated code, and follow the PR template. CONTRIBUTING warns that mass or low-quality AI-generated PRs are treated as spam.',
	},
	lastVerified: '2026-11-06',
	notes: [
		'Install @tanstack/svelte-table; it brings @tanstack/table-core as a dependency.',
		'Version 9 of the Svelte adapter requires Svelte 5 and uses runes. The quick-start page says Svelte 3 and 4 apps should stay on version 8 of @tanstack/svelte-table.',
		'shadcn-svelte\'s Data Table guide now uses @tanstack/svelte-table v9. The static registry JSON in its repo (data-table and dashboard-01 items) still lists @tanstack/table-core ^8.21.3, the older setup with a locally copied adapter.',
		'Headless: no markup or styles are included, so it pairs with any table component from a UI library.',
	],
})
