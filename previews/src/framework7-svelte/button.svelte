<!--
  Framework7's default theme is "auto": Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/button.html
-->
<script lang="ts">
	import { Block, Button } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill>Fill</Button>
	</Block>
	<Block>
		<Button tonal>Tonal</Button>
	</Block>
	<Block>
		<Button outline>Outline</Button>
	</Block>
	<Block>
		<Button>Plain</Button>
	</Block>
</F7App>
