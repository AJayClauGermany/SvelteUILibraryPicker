<!--
  svelte-highlight ships highlight.js themes; we use its bundled GitHub theme and its GitHub Dark
  counterpart in dark mode, set up as the README's "Theming" section shows. No styles of ours.
  Docs: https://svhe.onrender.com
-->
<script lang="ts">
	import { Highlight, HighlightStyle } from 'svelte-highlight'
	import typescript from 'svelte-highlight/languages/typescript'
	import github from 'svelte-highlight/themes/github'
	import githubDark from 'svelte-highlight/themes/github-dark'
	import 'svelte-highlight/themes/base.css'
	import { theme } from '../../theme.svelte.ts'

	const code = `type Point = { x: number; y: number }

function distance(a: Point, b: Point): number {
	return Math.hypot(b.x - a.x, b.y - a.y)
}`
</script>

<HighlightStyle theme={theme.current === 'dark' ? githubDark : github}>
	<Highlight language={typescript} {code} />
</HighlightStyle>
