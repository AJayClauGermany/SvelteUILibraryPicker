<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Modal#alert-mode
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Button, Modal } from 'carbon-components-svelte'

	let open = $state(true)
</script>

<Button kind="danger" on:click={() => (open = true)}>Delete project</Button>

<Modal
	bind:open
	alert
	danger
	size="xs"
	modalHeading="Delete this project?"
	primaryButtonText="Delete"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:submit={() => (open = false)}
>
	<p>All of its files will be removed for good.</p>
</Modal>
