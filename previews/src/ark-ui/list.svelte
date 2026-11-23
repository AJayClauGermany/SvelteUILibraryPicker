<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/listbox
-->
<script lang="ts">
	import { Listbox, createListCollection } from '@ark-ui/svelte/listbox'

	const collection = createListCollection({
		items: [
			{ label: 'Svelte', value: 'svelte' },
			{ label: 'SvelteKit', value: 'sveltekit' },
			{ label: 'Vite', value: 'vite' },
		],
	})
</script>

<Listbox.Root {collection} defaultValue={['svelte']}>
	<Listbox.Label>Tool</Listbox.Label>
	<Listbox.Content>
		{#each collection.items as item (item.value)}
			<Listbox.Item {item}>
				<Listbox.ItemText>{item.label}</Listbox.ItemText>
				<Listbox.ItemIndicator>✓</Listbox.ItemIndicator>
			</Listbox.Item>
		{/each}
	</Listbox.Content>
</Listbox.Root>
