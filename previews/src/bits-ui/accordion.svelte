<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/accordion
-->
<script lang="ts">
	import { Accordion } from 'bits-ui'

	const items = [
		{ value: 'one', title: 'First section', body: 'Content for the first section.' },
		{ value: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ value: 'three', title: 'Third section', body: 'Content for the third section.' },
	]
</script>

<Accordion.Root type="single" value="one">
	{#each items as item (item.value)}
		<Accordion.Item value={item.value}>
			<Accordion.Header>
				<Accordion.Trigger>{item.title}</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>{item.body}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
