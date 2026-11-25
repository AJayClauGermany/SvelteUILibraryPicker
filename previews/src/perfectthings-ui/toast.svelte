<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#NotificationCenter
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Button, NotificationCenter, showNotification } from '@perfectthings/ui'

	const notify = () => showNotification('File uploaded.', 'success')

	onMount(() => {
		notify()
	})
</script>

<Button onclick={notify}>Show notification</Button>

<NotificationCenter />
