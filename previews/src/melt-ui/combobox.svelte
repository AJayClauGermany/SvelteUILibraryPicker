<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Filtering the options is left to you; here it is a simple text match.
  Docs: https://melt-ui.com/docs/builders/combobox
-->
<script lang="ts">
	import { createCombobox } from '@melt-ui/svelte'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango']

	const {
		elements: { label, input, menu, option },
		states: { inputValue, touchedInput },
	} = createCombobox<string>()

	const matches = $derived(
		$touchedInput ? fruits.filter(f => f.toLowerCase().includes($inputValue.toLowerCase())) : fruits,
	)
</script>

<!-- svelte-ignore a11y_label_has_associated_control: the builder links it to the input -->
<label {...$label} use:label>Fruit</label>
<input {...$input} use:input placeholder="Type to search" />

<ul {...$menu} use:menu>
	{#each matches as fruit (fruit)}
		<li {...$option({ value: fruit, label: fruit })} use:option>{fruit}</li>
	{:else}
		<li>No matches</li>
	{/each}
</ul>
