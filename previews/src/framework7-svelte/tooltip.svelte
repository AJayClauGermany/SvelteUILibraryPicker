<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  The tooltip prop on Button and Link creates a core Tooltip; hover or tap the controls.
  Docs: https://framework7.io/svelte/tooltip.html
-->
<script lang="ts">
	import { Block, Button, Link } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill tooltip="Saves a draft to your device">Save draft</Button>
	</Block>
	<Block>
		<p>
			Read the <Link tooltip="Updated last week">terms</Link> before you continue.
		</p>
	</Block>
</F7App>
