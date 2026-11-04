<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Dialog is a native <dialog>; a Button in its `buttons` snippet submits the dialog form and closes it.
  Docs: https://kendell.dev/m3-svelte/#dialog-demo
-->
<script lang="ts">
	import './styles.css'
	import { Button, Dialog } from 'm3-svelte'

	let open = $state(false)
</script>

<Button onclick={() => (open = true)}>Open dialog</Button>
<Dialog headline="Example dialog" bind:open>
	A short message inside the dialog.
	{#snippet buttons()}
		<Button variant="text">Close</Button>
	{/snippet}
</Dialog>
