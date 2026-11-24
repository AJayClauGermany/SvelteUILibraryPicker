import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-awesome-color-picker',
	name: 'Svelte Awesome Color Picker',
	description:
		'A ColorPicker component with keyboard and touch support, alpha, nullable values, swatches and swappable sub-components, falling back to the native color input without JavaScript.',
	kind: 'component',
	docs: 'https://svelte-awesome-color-picker.vercel.app/',
	repository: 'https://github.com/Ennoriel/svelte-awesome-color-picker',
	packages: ['svelte-awesome-color-picker'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/LICENSE',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '4.1.3',
	components: ['color-picker'],
	usedBy: [],
	ai: {
		status: 'no-statement',
		summary:
			'No llms.txt on the docs site, no MCP server, no AGENTS.md/CLAUDE.md, and the contributing guide has no AI section; the LICENSE is plain MIT.',
		sources: [
			'https://github.com/Ennoriel/svelte-awesome-color-picker',
			'https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/contributing.md',
			'https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/LICENSE',
		],
	},
	maintenance: {
		lastRelease: { version: '4.1.3', date: '2026-05-28' },
		lastCommit: '2026-05-28',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/svelte-awesome-color-picker', 'https://github.com/Ennoriel/svelte-awesome-color-picker'],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Version 4 is a Svelte 5 rewrite with breaking changes; the docs include a v3 to v4 migration section. The last 3.x release (3.1.4) declares `^3.55.1 || ^4.0.0 || ^5.0.0`; earlier 3.x releases declare `^3.55.1 || ^4.0.0`.',
		'Ships a default layout plus a Chrome-style variant and an accessibility-notice variant; inner parts (wrapper, text input, indicator...) can be replaced with your own components.',
		'Styled through CSS custom properties, including a dark theme example. Color parsing uses the colord package.',
		'Inside containers with hidden overflow the popup gets clipped; the docs suggest a portal or the responsive position prop.',
	],
})
