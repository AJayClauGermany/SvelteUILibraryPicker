<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core f7.toast API, called from a button.
  Docs: https://framework7.io/svelte/toast.html
-->
<script lang="ts">
	import { Block, Button, f7 } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill onClick={() => f7.toast.show({ text: 'Message archived', closeTimeout: 2500 })}>Show toast</Button>
	</Block>
	<Block>
		<Button outline onClick={() => f7.toast.show({ text: 'Connection lost', closeButton: true, position: 'top' })}>
			Toast with close button
		</Button>
	</Block>
</F7App>
