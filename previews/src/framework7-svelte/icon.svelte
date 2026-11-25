<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Only the few icons built into the CSS bundle are shown; Framework7 Icons and Material Icons
  are separate font packages.
  Docs: https://framework7.io/svelte/icon.html
-->
<script lang="ts">
	import { Block, Icon } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Icon icon="icon-back" />
		<Icon icon="icon-forward" />
		<Icon icon="icon-prev" />
		<Icon icon="icon-next" />
		<Icon icon="icon-close" />
	</Block>
</F7App>
