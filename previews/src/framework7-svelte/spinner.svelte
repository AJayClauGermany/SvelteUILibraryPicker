<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/preloader.html
-->
<script lang="ts">
	import { Block, Preloader } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Preloader />
		<Preloader size={42} />
		<Preloader color="green" />
	</Block>
</F7App>
