<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import { Accordion, AccordionItem } from 'flowbite-svelte'

	const items = [
		{ title: 'First section', body: 'Content for the first section.' },
		{ title: 'Second section', body: 'Content for the second section.' },
		{ title: 'Third section', body: 'Content for the third section.' },
	]
</script>

<Accordion>
	{#each items as item, i (item.title)}
		<AccordionItem open={i === 0}>
			{#snippet header()}{item.title}{/snippet}
			<p>{item.body}</p>
		</AccordionItem>
	{/each}
</Accordion>
