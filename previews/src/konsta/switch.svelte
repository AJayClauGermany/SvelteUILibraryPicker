<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/toggle
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListItem, Toggle } from 'konsta/svelte'

	let wifi = $state(true)
	let bluetooth = $state(false)
</script>

<App>
	<List>
		<ListItem label title="Wi-Fi">
			{#snippet after()}
				<Toggle component="div" bind:checked={wifi} />
			{/snippet}
		</ListItem>
		<ListItem label title="Bluetooth">
			{#snippet after()}
				<Toggle component="div" bind:checked={bluetooth} />
			{/snippet}
		</ListItem>
	</List>
</App>
