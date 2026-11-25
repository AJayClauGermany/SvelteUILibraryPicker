<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Drawer
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Button, Drawer } from '@perfectthings/ui'

	let drawer: Drawer | undefined = $state()

	onMount(() => {
		drawer?.open()
	})
</script>

<Button onclick={() => drawer?.toggle()}>Toggle drawer</Button>

<Drawer bind:this={drawer} title="Filters">
	<p>Filters for the list go here.</p>
	<Button onclick={() => drawer?.close()}>Close</Button>
</Drawer>
