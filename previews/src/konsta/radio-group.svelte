<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/radio
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListItem, Radio } from 'konsta/svelte'

	const sizes = ['Small', 'Medium', 'Large']
	let size = $state('Medium')
</script>

<App>
	<List>
		{#each sizes as option (option)}
			<ListItem label title={option}>
				{#snippet media()}
					<Radio
						component="div"
						name="size"
						value={option}
						checked={size === option}
						onchange={() => (size = option)}
					/>
				{/snippet}
			</ListItem>
		{/each}
	</List>
</App>
