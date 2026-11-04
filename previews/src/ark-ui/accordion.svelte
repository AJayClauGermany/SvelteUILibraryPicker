<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/accordion
-->
<script lang="ts">
	import { Accordion } from '@ark-ui/svelte/accordion'

	const items = [
		{ value: 'one', title: 'First section', body: 'Content for the first section.' },
		{ value: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ value: 'three', title: 'Third section', body: 'Content for the third section.' },
	]
</script>

<Accordion.Root defaultValue={['one']}>
	{#each items as item (item.value)}
		<Accordion.Item value={item.value}>
			<Accordion.ItemTrigger>{item.title}</Accordion.ItemTrigger>
			<Accordion.ItemContent>{item.body}</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion.Root>
