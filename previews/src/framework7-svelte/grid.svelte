<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core grid classes on a Block, holding Buttons as the App Layout page does.
  Docs: https://framework7.io/svelte/grid.html
-->
<script lang="ts">
	import { Block, Button } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block class="grid grid-cols-2 grid-gap">
		<Button fill>One</Button>
		<Button fill>Two</Button>
	</Block>
	<Block class="grid grid-cols-3 grid-gap">
		<Button tonal>One</Button>
		<Button tonal>Two</Button>
		<Button tonal>Three</Button>
	</Block>
	<Block class="grid grid-cols-4 grid-gap">
		<Button outline>1</Button>
		<Button outline>2</Button>
		<Button outline>3</Button>
		<Button outline>4</Button>
	</Block>
</F7App>
