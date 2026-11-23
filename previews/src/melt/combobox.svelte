<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/combobox
-->
<script lang="ts">
	import { Combobox } from 'melt/builders'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange']

	const combobox = new Combobox<string>()

	const filtered = $derived(
		combobox.touched
			? fruits.filter((f) => f.toLowerCase().includes(combobox.inputValue.toLowerCase()))
			: fruits,
	)
</script>

<label {...combobox.label}>Fruit</label>
<input {...combobox.input} />
<button {...combobox.trigger}>Open</button>

<div {...combobox.content}>
	{#each filtered as fruit (fruit)}
		<div {...combobox.getOption(fruit)}>{fruit}</div>
	{:else}
		<span>No matches</span>
	{/each}
</div>
