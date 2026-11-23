<!--
  Skeleton has no Divider component: dividers are the `hr` and `vr` classes on plain
  elements, which IS its default. ./styles.css loads Skeleton's cerberus theme; the small
  layout wrapper uses Tailwind utilities, as in Skeleton's docs.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/dividers
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<p>Above the line</p>
<hr class="hr" />
<p>Below the line</p>

<div class="grid grid-cols-[1fr_auto_1fr] gap-4">
	<span>Left</span>
	<span class="vr"></span>
	<span>Right</span>
</div>
