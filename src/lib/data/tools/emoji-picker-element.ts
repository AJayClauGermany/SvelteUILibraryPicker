import { defineTool } from '../schema'

// The README is the project's documentation (the GitHub Pages site only hosts demos), so `docs`
// points at the README. github.com pages could not be fetched over HTTP from the research
// environment (proxy 403); the repo, README, LICENSE and CONTRIBUTING were verified from a
// `git clone --depth 1` of the default branch (master) instead.
export default defineTool({
	id: 'emoji-picker-element',
	name: 'emoji-picker-element',
	description:
		'A lightweight emoji picker shipped as a framework-agnostic custom element, with search, skin tones, favourites and custom emoji, storing emoji data in IndexedDB.',
	kind: 'component',
	docs: 'https://github.com/nolanlawson/emoji-picker-element#readme',
	repository: 'https://github.com/nolanlawson/emoji-picker-element',
	packages: ['emoji-picker-element'],
	license: {
		spdx: 'Apache-2.0',
		url: 'https://github.com/nolanlawson/emoji-picker-element/blob/master/LICENSE',
	},
	version: '1.29.1',
	components: ['emoji-picker'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt (none on the GitHub Pages demo site), MCP server, AGENTS.md/CLAUDE.md, or AI section in the README or CONTRIBUTING.md was found. The LICENSE is the standard Apache-2.0 text with no AI clauses.',
		sources: [
			'https://github.com/nolanlawson/emoji-picker-element/blob/master/README.md',
			'https://github.com/nolanlawson/emoji-picker-element/blob/master/CONTRIBUTING.md',
			'https://github.com/nolanlawson/emoji-picker-element/blob/master/LICENSE',
		],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Framework-agnostic web component with no dependencies or peer dependencies, so no Svelte support data is recorded. It was built with Svelte 3/4 until v1.21.0 replaced Svelte with vanilla JS; the old emoji-picker-element/svelte import is deprecated.',
		'Client-side only: in SvelteKit, import it in the browser (e.g. inside onMount or a dynamic import), not during SSR.',
		'Renders in Shadow DOM, so styling goes through its CSS variables and light/dark classes rather than arbitrary CSS; it follows prefers-color-scheme by default.',
		'By default it downloads emoji data from the jsDelivr CDN; set dataSource to self-host the emoji-picker-element-data JSON.',
		'The shadcn-svelte-extras Emoji Picker does not use this package; it is built on @emoji-mart/data with Bits UI Command.',
	],
})
