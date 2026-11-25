<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/radio.html
-->
<script lang="ts">
	import { Block, List, ListItem, Radio } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Radio name="standalone" value="one" checked /> Standalone radio
	</Block>
	<List>
		<ListItem radio name="plan" value="monthly" title="Monthly" checked />
		<ListItem radio name="plan" value="yearly" title="Yearly" />
		<ListItem radio name="plan" value="lifetime" title="Lifetime" disabled />
	</List>
</F7App>
