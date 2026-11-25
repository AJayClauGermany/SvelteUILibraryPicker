<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  A List with virtualList: the core Virtual List hands back the visible slice through
  renderExternal, and only those rows are rendered. Scroll the 5,000 rows.
  Docs: https://framework7.io/svelte/virtual-list.html
-->
<script lang="ts">
	import { List, ListItem, theme } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'

	const rows = Array.from({ length: 5000 }, (_, i) => ({ title: `Row ${i + 1}` }))

	let visible = $state<{ items: typeof rows, topPosition: number }>({ items: [], topPosition: 0 })
</script>

<F7App>
	<List
		virtualList
		virtualListParams={{
			items: rows,
			height: theme.ios ? 44 : 48,
			renderExternal: (_list: unknown, data: { items: typeof rows, topPosition: number }) => (visible = data),
		}}
	>
		{#each visible.items as row (row.title)}
			<ListItem title={row.title} style={`top: ${visible.topPosition}px`} virtualListIndex={rows.indexOf(row)} />
		{/each}
	</List>
</F7App>
