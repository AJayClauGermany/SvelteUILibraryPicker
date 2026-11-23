<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/listbox
-->
<script lang="ts">
	import './styles.css'
	import { Listbox, useListCollection } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const collection = useListCollection({
		items: ['Small', 'Medium', 'Large', 'Extra large']
	})
</script>

<Listbox {collection}>
	<Listbox.Label>Size</Listbox.Label>
	<Listbox.Content>
		{#each collection.items as item (item)}
			<Listbox.Item {item}>
				<Listbox.ItemText>{item}</Listbox.ItemText>
				<Listbox.ItemIndicator />
			</Listbox.Item>
		{/each}
	</Listbox.Content>
</Listbox>
