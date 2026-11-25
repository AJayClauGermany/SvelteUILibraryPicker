<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/progressbar.html
-->
<script lang="ts">
	import { Block, BlockTitle, Progressbar } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<BlockTitle>Determinate</BlockTitle>
	<Block>
		<Progressbar progress={40} />
	</Block>
	<BlockTitle>Infinite</BlockTitle>
	<Block>
		<Progressbar infinite />
	</Block>
</F7App>
