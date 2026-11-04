<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/accordion
-->
<script lang="ts">
	import { Accordion, type AccordionItemMeta } from 'melt/builders'

	type Item = AccordionItemMeta<{ title: string; body: string }>

	const items: Item[] = [
		{ id: 'one', title: 'First section', body: 'Content for the first section.' },
		{ id: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ id: 'three', title: 'Third section', body: 'Content for the third section.' },
	]

	const accordion = new Accordion({ value: 'one' })
</script>

<div {...accordion.root}>
	{#each items as i (i.id)}
		{@const item = accordion.getItem(i)}
		<h3 {...item.heading}>
			<button {...item.trigger}>{item.item.title}</button>
		</h3>
		{#if item.isExpanded}
			<div {...item.content}>{item.item.body}</div>
		{/if}
	{/each}
</div>
