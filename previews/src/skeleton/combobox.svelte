<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/combobox
-->
<script lang="ts">
	import './styles.css'
	import { Combobox, Portal, useListCollection } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Pear']
	let query = $state('')

	const matches = $derived(fruits.filter((f) => f.toLowerCase().includes(query.toLowerCase())))
	const collection = $derived(useListCollection({ items: matches }))
</script>

<Combobox
	{collection}
	placeholder="Pick a fruit"
	onInputValueChange={(details) => (query = details.inputValue)}
	onOpenChange={() => (query = '')}
>
	<Combobox.Label>Fruit</Combobox.Label>
	<Combobox.Control>
		<Combobox.Input />
		<Combobox.Trigger />
	</Combobox.Control>
	<Portal>
		<Combobox.Positioner>
			<Combobox.Content>
				{#each matches as fruit (fruit)}
					<Combobox.Item item={fruit}>
						<Combobox.ItemText>{fruit}</Combobox.ItemText>
						<Combobox.ItemIndicator />
					</Combobox.Item>
				{/each}
			</Combobox.Content>
		</Combobox.Positioner>
	</Portal>
</Combobox>
