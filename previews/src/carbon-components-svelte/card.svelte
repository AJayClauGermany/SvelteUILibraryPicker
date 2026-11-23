<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Tile
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ClickableTile, Tile } from 'carbon-components-svelte'
</script>

<Tile>
	<h4>Monthly report</h4>
	<p>Usage is up 12% compared with last month.</p>
</Tile>
<br />
<ClickableTile href="#reports">Open all reports</ClickableTile>
