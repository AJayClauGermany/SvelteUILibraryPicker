<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/stepper.html
-->
<script lang="ts">
	import { Block, Stepper } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Stepper value={2} min={0} max={10} />
	</Block>
	<Block>
		<Stepper fill value={5} min={0} max={10} manualInputMode />
	</Block>
</F7App>
