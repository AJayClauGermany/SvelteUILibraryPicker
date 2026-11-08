<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Modal
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Button, Modal } from 'carbon-components-svelte'

	let open = $state(true)
</script>

<Button on:click={() => (open = true)}>Open dialog</Button>

<Modal
	bind:open
	modalHeading="Delete file?"
	primaryButtonText="Delete"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:submit={() => (open = false)}
>
	<p>This cannot be undone.</p>
</Modal>
