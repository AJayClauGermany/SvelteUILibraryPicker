<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/select
-->
<script lang="ts">
	import * as select from '@zag-js/select'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const fruits = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Cherry', value: 'cherry' },
	]
	const collection = select.collection({ items: fruits })

	const id = $props.id()
	const service = useMachine(select.machine, { id, collection })
	const api = $derived(select.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Fruit</label>
	<div {...api.getControlProps()}>
		<button {...api.getTriggerProps()}>{api.valueAsString || 'Pick a fruit'}</button>
	</div>
	<div use:portal {...api.getPositionerProps()}>
		<ul {...api.getContentProps()}>
			{#each fruits as item (item.value)}
				<li {...api.getItemProps({ item })}>
					<span {...api.getItemTextProps({ item })}>{item.label}</span>
					<span {...api.getItemIndicatorProps({ item })}>✓</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
