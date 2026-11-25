<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/range-slider.html
-->
<script lang="ts">
	import { Block, BlockTitle, Range } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<BlockTitle>Volume</BlockTitle>
	<Block>
		<Range min={0} max={100} step={1} value={40} label />
	</Block>
	<BlockTitle>Price range</BlockTitle>
	<Block>
		<Range dual min={0} max={500} step={10} value={[100, 350]} label />
	</Block>
</F7App>
