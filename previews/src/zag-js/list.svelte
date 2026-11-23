<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/listbox
-->
<script lang="ts">
	import * as listbox from '@zag-js/listbox'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const fruits = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Cherry', value: 'cherry' },
	]

	const id = $props.id()
	const service = useMachine(listbox.machine, {
		id,
		collection: listbox.collection({ items: fruits }),
		defaultValue: ['banana'],
	})
	const api = $derived(listbox.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Pick a fruit</label>
	<ul {...api.getContentProps()}>
		{#each fruits as item (item.value)}
			<li {...api.getItemProps({ item })}>
				<span {...api.getItemTextProps({ item })}>{item.label}</span>
				<span {...api.getItemIndicatorProps({ item })}>✓</span>
			</li>
		{/each}
	</ul>
</div>
