<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  BottomSheet has no open prop: it shows while rendered, and calls `close` on Escape,
  a backdrop click or when dragged down.
  Docs: https://kendell.dev/m3-svelte/
-->
<script lang="ts">
	import './styles.css'
	import { BottomSheet, Button } from 'm3-svelte'

	let open = $state(false)
</script>

<Button variant="tonal" onclick={() => (open = true)}>Open bottom sheet</Button>
{#if open}
	<BottomSheet close={() => (open = false)}>
		<p>Some extra options would go here.</p>
		<Button variant="text" onclick={() => (open = false)}>Done</Button>
	</BottomSheet>
{/if}
