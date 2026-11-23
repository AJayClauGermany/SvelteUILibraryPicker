<!--
  Skeleton has no Placeholder component: placeholders are the `placeholder` and
  `placeholder-circle` classes on plain elements, which IS its default. ./styles.css loads
  the cerberus theme; sizes, spacing and the pulse are Tailwind utilities, as in its docs.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/placeholders
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<div class="max-w-md space-y-4 animate-pulse">
	<div class="flex items-center gap-4">
		<div class="placeholder-circle size-12"></div>
		<div class="placeholder w-40"></div>
	</div>
	<div class="placeholder"></div>
	<div class="placeholder"></div>
	<div class="placeholder w-2/3"></div>
</div>
