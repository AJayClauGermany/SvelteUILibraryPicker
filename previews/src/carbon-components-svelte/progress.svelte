<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ProgressBar
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ProgressBar } from 'carbon-components-svelte'
</script>

<ProgressBar value={40} labelText="Uploading files" helperText="40 of 100 MB" />
<br />
<ProgressBar labelText="Preparing export" helperText="Working on it" />
<br />
<ProgressBar value={100} status="finished" labelText="Backup" />
