<!--
  Skeleton has no Badge component: badges are Tailwind classes (`badge` + a preset) on a
  plain <span>, which IS its default. ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/badges
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<span class="badge preset-filled-brand">New</span>
<span class="badge preset-tonal">Draft</span>
<span class="badge preset-outlined">Archived</span>
