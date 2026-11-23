<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/combobox
-->
<script lang="ts">
	import { Combobox } from 'bits-ui'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange']

	let search = $state('')
	const filtered = $derived(
		fruits.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase())),
	)
</script>

<Combobox.Root type="single" onOpenChange={(open) => !open && (search = '')}>
	<Combobox.Input
		placeholder="Search fruit"
		oninput={(event) => (search = event.currentTarget.value)}
	/>
	<Combobox.Trigger>Open</Combobox.Trigger>
	<Combobox.Portal>
		<Combobox.Content>
			{#each filtered as fruit (fruit)}
				<Combobox.Item value={fruit} label={fruit}>
					{#snippet children({ selected })}
						{fruit}{selected ? ' (selected)' : ''}
					{/snippet}
				</Combobox.Item>
			{:else}
				<span>No results</span>
			{/each}
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
