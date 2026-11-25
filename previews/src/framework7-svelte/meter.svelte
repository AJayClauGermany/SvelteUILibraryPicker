<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Gauge colours are props with fixed defaults (a black arc and black text), so they do not follow
  dark mode unless you pass your own.
  Docs: https://framework7.io/svelte/gauge.html
-->
<script lang="ts">
	import { Block, Gauge } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Gauge type="circle" value={0.64} valueText="64%" labelText="Storage used" />
		<Gauge type="semicircle" value={0.3} valueText="30%" labelText="CPU" />
	</Block>
</F7App>
