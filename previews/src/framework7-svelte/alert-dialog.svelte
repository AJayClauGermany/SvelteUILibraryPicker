<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core f7.dialog API, called from a button.
  Docs: https://framework7.io/svelte/dialog.html
-->
<script lang="ts">
	import { Block, Button, f7 } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill onClick={() => f7.dialog.confirm('This removes the file for everyone.', 'Delete file?')}>Delete file</Button>
	</Block>
	<Block>
		<Button outline onClick={() => f7.dialog.alert('Your changes were saved.')}>Show alert</Button>
	</Block>
</F7App>
