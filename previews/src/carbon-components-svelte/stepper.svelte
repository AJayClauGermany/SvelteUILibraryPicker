<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ProgressIndicator
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ProgressIndicator, ProgressStep } from 'carbon-components-svelte'
</script>

<ProgressIndicator currentIndex={1}>
	<ProgressStep complete label="Account" description="Create your account" />
	<ProgressStep label="Profile" description="Tell us about you" />
	<ProgressStep label="Review" description="Check your details" />
</ProgressIndicator>
