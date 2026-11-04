<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The dialog is called Modal in Flowbite.
  Docs: https://flowbite-svelte.com/docs/components/modal
-->
<script lang="ts">
	import './styles.css'
	import { Button, Modal } from 'flowbite-svelte'

	let open = $state(false)
</script>

<Button onclick={() => (open = true)}>Open dialog</Button>

<Modal title="Example dialog" bind:open>
	<p>A short message inside the dialog.</p>
	{#snippet footer()}
		<Button onclick={() => (open = false)}>Close</Button>
	{/snippet}
</Modal>
