<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Popover
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Button, Popover } from '@perfectthings/ui'

	let popover: Popover | undefined = $state()
	let trigger: HTMLElement | undefined = $state()

	onMount(() => {
		popover?.open(trigger)
	})
</script>

<Button bind:element={trigger} onclick={e => popover?.open(e)}>Details</Button>

<Popover bind:this={popover}>
	<p>Last edited two hours ago.</p>
</Popover>
