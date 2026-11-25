<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Dialog
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Button, Dialog } from '@perfectthings/ui'

	let dialog: Dialog | undefined = $state()

	onMount(() => {
		dialog?.open()
	})
</script>

<Button onclick={() => dialog?.open()}>Open dialog</Button>

<Dialog bind:this={dialog} title="Rename file">
	Choose a new name for this file.
	{#snippet footer()}
		<Button onclick={() => dialog?.close()}>Cancel</Button>
		<Button info onclick={() => dialog?.close()}>Rename</Button>
	{/snippet}
</Dialog>
