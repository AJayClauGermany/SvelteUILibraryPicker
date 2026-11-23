<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { App, Checkbox, List, ListItem } from 'konsta/svelte'

	let terms = $state(true)
	let news = $state(false)
</script>

<App>
	<List>
		<ListItem label title="Accept terms">
			{#snippet media()}
				<Checkbox component="div" bind:checked={terms} />
			{/snippet}
		</ListItem>
		<ListItem label title="Subscribe to news">
			{#snippet media()}
				<Checkbox component="div" bind:checked={news} />
			{/snippet}
		</ListItem>
		<ListItem label title="Some selected">
			{#snippet media()}
				<Checkbox component="div" indeterminate />
			{/snippet}
		</ListItem>
		<ListItem label title="Unavailable">
			{#snippet media()}
				<Checkbox component="div" disabled />
			{/snippet}
		</ListItem>
	</List>
</App>
