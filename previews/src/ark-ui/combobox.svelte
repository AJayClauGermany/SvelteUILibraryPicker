<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/combobox
-->
<script lang="ts">
	import { Combobox, useListCollection } from '@ark-ui/svelte/combobox'
	import { useFilter } from '@ark-ui/svelte/locale'
	import { Portal } from '@ark-ui/svelte/portal'

	const filters = useFilter({ sensitivity: 'base' })

	const { collection, filter } = useListCollection({
		initialItems: [
			{ label: 'Svelte', value: 'svelte' },
			{ label: 'SvelteKit', value: 'sveltekit' },
			{ label: 'Vite', value: 'vite' },
			{ label: 'Vitest', value: 'vitest' },
		],
		filter: (itemText, query) => filters().contains(itemText, query),
	})
</script>

<Combobox.Root {collection} onInputValueChange={(e) => filter(e.inputValue)}>
	<Combobox.Label>Tool</Combobox.Label>
	<Combobox.Control>
		<Combobox.Input placeholder="Type to search" />
		<Combobox.Trigger>Open</Combobox.Trigger>
		<Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
	</Combobox.Control>
	<Portal>
		<Combobox.Positioner>
			<Combobox.Content>
				<Combobox.Empty>No matches</Combobox.Empty>
				{#each collection().items as item (item.value)}
					<Combobox.Item {item}>
						<Combobox.ItemText>{item.label}</Combobox.ItemText>
						<Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
					</Combobox.Item>
				{/each}
			</Combobox.Content>
		</Combobox.Positioner>
	</Portal>
</Combobox.Root>
