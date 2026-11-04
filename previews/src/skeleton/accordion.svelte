<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Skeleton styles the accordion only lightly (spacing, radius, hover tint); its docs add
  dividers and bold titles with utility classes, which this preview deliberately does not.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/accordion
-->
<script lang="ts">
	import './styles.css'
	import { Accordion } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const items = [
		{ id: 'one', title: 'First section', body: 'Content for the first section.' },
		{ id: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ id: 'three', title: 'Third section', body: 'Content for the third section.' },
	]
</script>

<Accordion defaultValue={['one']}>
	{#each items as item (item.id)}
		<Accordion.Item value={item.id}>
			<Accordion.ItemTrigger>{item.title}</Accordion.ItemTrigger>
			<Accordion.ItemContent>{item.body}</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
