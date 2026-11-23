<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Meter
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Meter } from 'carbon-components-svelte'
</script>

<Meter labelText="Storage" value={420} max={1000} valueText="420 GB of 1 TB" />
<br />
<Meter
	labelText="Monthly quota"
	value={88}
	thresholds={{ warning: 75, error: 95 }}
	showThresholds
	valueText="88%"
	helperText="Close to the limit"
/>
