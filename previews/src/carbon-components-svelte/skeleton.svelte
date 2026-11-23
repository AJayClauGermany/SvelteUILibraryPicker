<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/SkeletonPlaceholder
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { SkeletonPlaceholder, SkeletonText } from 'carbon-components-svelte'
</script>

<SkeletonPlaceholder />
<br />
<SkeletonText heading />
<SkeletonText paragraph lines={3} />
