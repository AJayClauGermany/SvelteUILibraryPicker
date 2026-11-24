import { defineTool } from '../schema'

export default defineTool({
	id: 'event-calendar',
	name: 'Event Calendar',
	description:
		'A full-size drag and drop event calendar with day grid, time grid, list and resource timeline views, written in Svelte and usable as a Svelte 5 component or from plain JavaScript.',
	kind: 'component',
	// The README is the documentation; the GitHub Pages site (the npm homepage) is a live demo.
	docs: 'https://github.com/vkurko/calendar#readme',
	repository: 'https://github.com/vkurko/calendar',
	packages: ['@event-calendar/core'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/vkurko/calendar/blob/master/LICENSE',
	},
	// No svelte peerDependency: svelte (^5.59.1 in 5.21.2) is a regular dependency, so peerRange is omitted.
	svelte: {
		supported: [5],
		runes: true,
	},
	version: '5.21.2',
	components: ['event-calendar'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the demo site, no MCP server, AGENTS.md or CLAUDE.md in the repository, and the contributing guide does not mention AI; the MIT LICENSE has no AI clause.',
		sources: [
			'https://github.com/vkurko/calendar/blob/master/CONTRIBUTING.md',
			'https://github.com/vkurko/calendar/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Svelte is a regular dependency, not a peer: Svelte apps import the Calendar component (resolved through the package’s svelte export condition), while other apps call createCalendar() or use the separate @event-calendar/build browser bundle.',
		'Views come from plugins passed to the calendar (DayGrid, List, TimeGrid, ResourceTimeGrid, ResourceTimeline); dragging, resizing and selecting need the Interaction plugin as well.',
		'The Svelte component pulls in its own CSS; the plain JavaScript setup imports @event-calendar/core/index.css. A dark theme is enabled with the ec-dark or ec-auto-dark class, and colours are CSS variables.',
		'Options are modelled on FullCalendar, so FullCalendar configs translate fairly directly. A live demo runs at https://vkurko.github.io/calendar/.',
	],
})
