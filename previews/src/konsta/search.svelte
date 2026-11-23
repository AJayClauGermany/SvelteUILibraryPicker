<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/searchbar
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListItem, Navbar, Searchbar } from 'konsta/svelte'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Mango']
	let query = $state('')
	const results = $derived(fruits.filter((f) => f.toLowerCase().includes(query.toLowerCase())))
</script>

<App>
	<Navbar title="Fruits">
		{#snippet subnavbar()}
			<Searchbar bind:value={query} placeholder="Search fruits" onClear={() => (query = '')} />
		{/snippet}
	</Navbar>
	<List>
		{#each results as fruit (fruit)}
			<ListItem title={fruit} />
		{/each}
	</List>
</App>
