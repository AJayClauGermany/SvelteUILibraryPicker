<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/toggle.html
-->
<script lang="ts">
	import { Block, List, ListItem, Toggle } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Toggle checked />
		<Toggle />
		<Toggle checked color="green" />
	</Block>
	<List>
		<ListItem title="Wi-Fi">
			{#snippet after()}
				<Toggle checked />
			{/snippet}
		</ListItem>
		<ListItem title="Bluetooth">
			{#snippet after()}
				<Toggle />
			{/snippet}
		</ListItem>
	</List>
</F7App>
