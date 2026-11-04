<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Modal
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
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
