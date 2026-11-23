<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ToastNotification
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Button, NotificationQueue } from 'carbon-components-svelte'

	let queue: NotificationQueue

	function notify() {
		queue.add({
			kind: 'success',
			title: 'Saved',
			subtitle: 'Your changes are live.',
			timeout: 5000,
		})
	}
</script>

<Button on:click={notify}>Show toast</Button>

<NotificationQueue bind:this={queue} offsetTop="1rem" />
