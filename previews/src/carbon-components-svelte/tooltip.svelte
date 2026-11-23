<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Tooltip
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Tooltip } from 'carbon-components-svelte'
</script>

<Tooltip triggerText="Storage limit">
	<p>Each project can hold up to 5 GB of files.</p>
</Tooltip>
