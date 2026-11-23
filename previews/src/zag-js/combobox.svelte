<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/combobox
-->
<script lang="ts">
	import * as combobox from '@zag-js/combobox'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange', 'Pear']

	let options = $state.raw(fruits)
	const collection = $derived(combobox.collection({ items: options }))

	const id = $props.id()
	const service = useMachine(combobox.machine, {
		id,
		placeholder: 'Type to search',
		get collection() {
			return collection
		},
		onOpenChange() {
			options = fruits
		},
		onInputValueChange({ inputValue }) {
			const query = inputValue.toLowerCase()
			options = fruits.filter((fruit) => fruit.toLowerCase().includes(query))
		},
	})
	const api = $derived(combobox.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Fruit</label>
	<div {...api.getControlProps()}>
		<input {...api.getInputProps()} />
		<button {...api.getTriggerProps()}>▼</button>
	</div>
</div>
<div {...api.getPositionerProps()}>
	{#if options.length > 0}
		<ul {...api.getContentProps()}>
			{#each options as item (item)}
				<li {...api.getItemProps({ item })}>{item}</li>
			{/each}
		</ul>
	{/if}
</div>
