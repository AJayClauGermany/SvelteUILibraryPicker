<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/select
-->
<script lang="ts">
	import { Select, createListCollection } from '@ark-ui/svelte/select'
	import { Portal } from '@ark-ui/svelte/portal'

	const collection = createListCollection({
		items: [
			{ label: 'Svelte', value: 'svelte' },
			{ label: 'SvelteKit', value: 'sveltekit' },
			{ label: 'Vite', value: 'vite' },
		],
	})
</script>

<Select.Root {collection}>
	<Select.Label>Tool</Select.Label>
	<Select.Control>
		<Select.Trigger>
			<Select.ValueText placeholder="Pick one" />
			<Select.Indicator>▾</Select.Indicator>
		</Select.Trigger>
		<Select.ClearTrigger>Clear</Select.ClearTrigger>
	</Select.Control>
	<Portal>
		<Select.Positioner>
			<Select.Content>
				{#each collection.items as item (item.value)}
					<Select.Item {item}>
						<Select.ItemText>{item.label}</Select.ItemText>
						<Select.ItemIndicator>✓</Select.ItemIndicator>
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Positioner>
	</Portal>
	<Select.HiddenSelect />
</Select.Root>
