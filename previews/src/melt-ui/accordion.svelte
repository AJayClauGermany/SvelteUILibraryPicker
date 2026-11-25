<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/accordion
-->
<script lang="ts">
	import { createAccordion } from '@melt-ui/svelte'

	const sections = [
		{ id: 'one', title: 'First section', body: 'Content for the first section.' },
		{ id: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ id: 'three', title: 'Third section', body: 'Content for the third section.' },
	]

	const {
		elements: { root, item, heading, trigger, content },
	} = createAccordion({ defaultValue: 'one' })
</script>

<div {...$root} use:root>
	{#each sections as section (section.id)}
		<div {...$item(section.id)} use:item>
			<h3 {...$heading(3)} use:heading>
				<button {...$trigger(section.id)} use:trigger>{section.title}</button>
			</h3>
			<div {...$content(section.id)} use:content>{section.body}</div>
		</div>
	{/each}
</div>
