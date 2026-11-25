<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/select
-->
<script lang="ts">
	import { createSelect } from '@melt-ui/svelte'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape']

	const {
		elements: { label, trigger, menu, option },
		states: { selectedLabel },
	} = createSelect<string>()
</script>

<!-- svelte-ignore a11y_label_has_associated_control: the builder links it to the trigger -->
<label {...$label} use:label>Fruit</label>
<button {...$trigger} use:trigger>{$selectedLabel || 'Pick a fruit'}</button>

<div {...$menu} use:menu>
	{#each fruits as fruit (fruit)}
		<div {...$option({ value: fruit, label: fruit })} use:option>{fruit}</div>
	{/each}
</div>
