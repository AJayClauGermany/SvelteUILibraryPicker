<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  The FAB uses its text prop: icons need the separate Framework7 Icons or Material Icons fonts.
  Docs: https://framework7.io/svelte/floating-action-button.html
-->
<script lang="ts">
	import { Block, Fab } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Fab position="right-bottom" text="Compose" />
	<Block>
		<p>The button floats over the page content, in the bottom right corner.</p>
	</Block>
</F7App>
