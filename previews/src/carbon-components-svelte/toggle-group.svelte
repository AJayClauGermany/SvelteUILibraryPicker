<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ToggleButtonGroup
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ToggleButton, ToggleButtonGroup } from 'carbon-components-svelte'

	let selected: (string | number)[] = $state(['day'])
</script>

<ToggleButtonGroup labelText="View" bind:selected>
	<ToggleButton value="day">Day</ToggleButton>
	<ToggleButton value="week">Week</ToggleButton>
	<ToggleButton value="month">Month</ToggleButton>
</ToggleButtonGroup>
