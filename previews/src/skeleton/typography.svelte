<!--
  Skeleton's typography is a set of opt-in classes (`h1`…`h6`, `anchor`, `blockquote`, `kbd`,
  `mark` and more) on native elements, which IS its default; plain text gets the theme's
  base styles. ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/design/typography
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<h1 class="h1">Heading one</h1>
<h2 class="h2">Heading two</h2>
<h3 class="h3">Heading three</h3>
<p>
	Body text with an <a class="anchor" href="#top">anchor</a>, a <mark class="mark">highlight</mark>
	and a shortcut: <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd>.
</p>
<blockquote class="blockquote">A short quotation set apart from the text.</blockquote>
