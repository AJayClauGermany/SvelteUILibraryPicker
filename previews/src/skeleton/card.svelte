<!--
  Skeleton has no Card component: cards are Tailwind classes (`card` + a preset) on a plain
  element, which IS its default. ./styles.css loads Skeleton's cerberus theme; the padding
  and width are Tailwind utilities, as in Skeleton's docs.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/cards
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<div class="card preset-filled-surface-100-900 max-w-md p-4">
	<h2 class="h4">Project update</h2>
	<p>The first milestone is complete and the next one starts on Monday.</p>
</div>
