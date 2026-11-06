import { defineTool } from '../schema'

export default defineTool({
	id: 'internationalized-date',
	name: '@internationalized/date',
	description:
		'Immutable date, time and time-zone objects with support for many calendar systems and locale-aware arithmetic, from the React Spectrum monorepo.',
	kind: 'utility',
	docs: 'https://react-aria.adobe.com/internationalized/date/',
	repository: 'https://github.com/adobe/react-spectrum/tree/main/packages/@internationalized/date',
	packages: ['@internationalized/date'],
	license: {
		spdx: 'Apache-2.0',
		url: 'https://github.com/adobe/react-spectrum/blob/main/LICENSE',
		notes: 'The package has no LICENSE of its own; the monorepo root LICENSE (Apache-2.0) and NOTICE.txt apply, and package.json declares Apache-2.0.',
	},
	version: '3.12.4',
	components: [
		'calendar',
		'range-calendar',
		'date-picker',
		'date-range-picker',
		'date-field',
		'date-range-field',
		'time-picker',
		'time-range-field',
	],
	usedBy: [
		{
			library: 'bits-ui',
			how: 'Peer dependency; the calendar, date field, date picker and time field components take and return its date objects.',
			source: 'https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/package.json',
		},
		{
			library: 'zag-js',
			how: 'Peer dependency of the date-picker and date-input machines.',
			source: 'https://github.com/chakra-ui/zag/blob/main/packages/machines/date-picker/package.json',
		},
		{
			library: 'ark-ui',
			how: 'Direct dependency of the Svelte package, used by its Zag-based date picker and date input.',
			source: 'https://github.com/chakra-ui/ark/blob/main/packages/svelte/package.json',
		},
		{
			library: 'skeleton',
			how: 'Direct dependency of the Svelte package, used by its Zag-based date picker.',
			source: 'https://github.com/skeletonlabs/skeleton/blob/main/packages/skeleton-svelte/package.json',
		},
		{
			library: 'shadcn-svelte',
			how: 'The registry lists it for the calendar components (and with every Bits UI based component), so the CLI installs it into your project.',
			source: 'https://github.com/huntabyte/shadcn-svelte/blob/main/docs/static/registry/calendar.json',
		},
		{
			library: 'lily',
			how: 'Its copied date components import it directly, on top of Bits UI.',
			source: 'https://github.com/levish0/lily-svelte/blob/main/docs/src/lib/registry/ui/date-picker/date-picker.svelte',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The React Spectrum monorepo has AGENTS.md and CLAUDE.md, and CONTRIBUTING accepts AI-assisted contributions as long as the human author owns them. The React Aria docs site, which hosts these docs, offers an MCP server, agent skills, per-page Markdown and an llms.txt.',
		sources: [
			'https://github.com/adobe/react-spectrum/blob/main/AGENTS.md',
			'https://github.com/adobe/react-spectrum/blob/main/CONTRIBUTING.md',
			'https://github.com/adobe/react-spectrum/blob/main/packages/dev/s2-docs/pages/react-aria/ai.mdx',
			'https://react-aria.adobe.com/ai.html',
		],
		upstreamContributing:
			'AI-assisted PRs are accepted, but you remain the author and must be able to explain every change. Point the assistant at AGENTS.md, describe the problem and intent separately from the fix, say what you tested, and be able to explain what changed between review rounds.',
		llmsTxt: 'https://react-aria.adobe.com/llms.txt',
	},
	lastVerified: '2026-11-06',
	notes: [
		'Framework-agnostic: plain TypeScript with no framework peer dependency, so no Svelte support data is recorded. It is maintained by Adobe alongside React Aria and React Spectrum.',
		'Libraries built on it expect values such as CalendarDate, CalendarDateTime, ZonedDateTime or Time rather than native Date objects, so you usually install it next to them.',
		'The package README still links to the older react-spectrum.adobe.com/internationalized/date/ pages; the docs source in the repo now lives under the React Aria site.',
	],
})
