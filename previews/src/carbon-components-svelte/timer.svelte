<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/RelativeTime
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { RelativeTime } from 'carbon-components-svelte'

	const started = Date.now() - 90 * 1000
	const deployed = Date.now() - 3 * 60 * 60 * 1000
</script>

<p>Build started <RelativeTime date={started} /></p>
<p>Last deploy <RelativeTime date={deployed} /></p>
