<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/InlineNotification
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { InlineNotification } from 'carbon-components-svelte'
</script>

<InlineNotification kind="success" title="Saved." subtitle="Your changes are live." />
<InlineNotification kind="error" title="Upload failed." subtitle="The file is too large." />
