<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ImageLoader
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ImageLoader, InlineLoading } from 'carbon-components-svelte'

	// A tiny inline image, so the preview needs no network request.
	const landscape =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" fill="#a6c8ff"/><circle cx="250" cy="50" r="24" fill="#fddc69"/><path d="M0 180 L110 70 L190 150 L240 110 L320 180 Z" fill="#0f62fe"/></svg>',
		)
</script>

<ImageLoader src={landscape} alt="A drawn landscape" ratio="16x9" fadeIn>
	<svelte:fragment slot="loading"><InlineLoading description="Loading image" /></svelte:fragment>
	<svelte:fragment slot="error">The image could not be loaded.</svelte:fragment>
</ImageLoader>
