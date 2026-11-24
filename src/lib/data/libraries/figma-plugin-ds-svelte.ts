import { defineLibrary } from '../schema'

// The README is the only documentation. Component links are GitHub heading anchors in the README
// on the master branch (clone at the last commit, 2022-09-02); each heading below was confirmed in
// that README, and the README shipped in the 1.4.3 npm tarball is identical.
const repo = 'https://github.com/thomas-lowry/figma-plugin-ds-svelte'
const readme = `${repo}#readme`
const c = (anchor: string) => `${repo}#${anchor}`

export default defineLibrary({
	id: 'figma-plugin-ds-svelte',
	name: 'Figma Plugin DS Svelte',
	description:
		'A small set of Svelte 3 components and icons that reproduce the look of Figma\'s own interface, meant for building the UI of Figma plugins.',
	docs: readme,
	repository: repo,
	packages: ['figma-plugin-ds-svelte'],
	license: {
		spdx: 'MIT',
		url: `${repo}/blob/master/LICENSE`,
	},
	svelte: {
		supported: [3],
		runes: false,
	},
	version: '1.4.3',
	styling: ['css'],
	dependencies: [],
	features: ['icons', 'forms', 'design-system'],
	components: [
		{ id: 'button', name: 'Button', docs: c('button'), notes: 'Primary, secondary and tertiary variants, plus a destructive flag.' },
		{ id: 'checkbox', name: 'Checkbox', docs: c('checkbox') },
		{ id: 'accordion', name: 'Disclosure / DisclosureItem', docs: c('disclosure'), notes: 'Only one item can be open at a time; an item can be styled as a bold section header.' },
		{ id: 'icon', name: 'Icon', docs: c('icon'), notes: `Renders one of the bundled Figma-style SVG icons (exported as IconName modules), your own imported SVG, or a text character, with optional spin. IconButton is a clickable icon with a selected state: ${c('icon-button')}` },
		{ id: 'input', name: 'Input', docs: c('input'), notes: 'Can show an icon or text character inside the field; borderless until hover unless borders is set.' },
		{ id: 'label', name: 'Label', docs: c('labels-and-sections'), notes: 'A styled text label rendered as a plain div, not a <label> element tied to a control. Shown together with Section, a section title.' },
		{ id: 'alert', name: 'OnboardingTip', docs: c('onboarding-tip'), notes: 'An inline hint with an icon and text, closest to a callout; it is not dismissible.' },
		{ id: 'radio-group', name: 'Radio', docs: c('radio-button'), notes: 'Single radios grouped with bind:group; there is no group component.' },
		{ id: 'select', name: 'SelectMenu', docs: c('select-menu'), notes: 'Built from an array of item objects, with optional option groups and group labels. SelectItem and SelectDivider are exported but used internally.' },
		{ id: 'switch', name: 'Switch', docs: c('switch') },
		{ id: 'textarea', name: 'Textarea', docs: c('textarea') },
		{ id: 'typography', name: 'Type', docs: c('type'), notes: `Text with Figma sizes, weights and color tokens. The README also lists the color, type, radius, shadow and size CSS variables under Tokens: ${c('tokens')}` },
	],
	ai: {
		status: 'no-statement',
		summary: 'No AI policy found: the repo has only a README, LICENSE and source (no CONTRIBUTING, AGENTS.md, CLAUDE.md or .github folder), there is no docs site and so no llms.txt, no MCP server or agent skills, and the MIT LICENSE adds no AI terms.',
		sources: [
			readme,
			`${repo}/blob/master/LICENSE`,
		],
	},
	maintenance: {
		lastRelease: { version: '1.4.3', date: '2022-09-08' },
		lastCommit: '2022-09-02',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/figma-plugin-ds-svelte', repo],
	},
	lastVerified: '2026-11-24',
	notes: [
		'Built for Figma plugin UIs rather than general web apps; the README calls it a work in progress and points to Figsvelte, the author\'s plugin boilerplate with the library preinstalled.',
		'Svelte 3 only. The package has no peerDependencies; the repo builds against svelte ^3.20.1 (a devDependency). Components use export let, $: statements, slots, on: events, createEventDispatcher and a store with context in Disclosure. No svelte/internal imports. On Svelte 5 that syntax only runs in legacy mode, and we found no Svelte 4 or 5 work upstream.',
		'Ships uncompiled .svelte source (the svelte and main fields point to src/index.js), which also imports a global .css file and the icons as .svg files. Your bundler has to handle those imports; the Icon component expects SVG markup as a string. The README gives no bundler setup beyond npm install.',
		'Styling: each component has scoped CSS that reads CSS variables. GlobalCSS adds the token variables and a set of utility classes; components read Figma\'s own --figma-color-* variables, which a comment in global.css says is how they follow Figma\'s light and dark mode. The older named colour variables (blue, black8...) are kept as aliases of those. The README does not document dark mode.',
		'All components accept a class prop for extra or utility classes.',
		'The 1.4.3 npm release includes Checkbox style changes that are not on the repository\'s master branch.',
		'The README shows importing SectionHeader, but the package exports the section title component as Section.',
		'IconButton has no canonical id of its own here and is linked from the Icon entry.',
	],
})
