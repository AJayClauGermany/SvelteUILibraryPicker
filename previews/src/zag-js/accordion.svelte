<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/accordion
-->
<script lang="ts">
	import * as accordion from '@zag-js/accordion'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const items = [
		{ value: 'one', title: 'First section', body: 'Content for the first section.' },
		{ value: 'two', title: 'Second section', body: 'Content for the second section.' },
		{ value: 'three', title: 'Third section', body: 'Content for the third section.' },
	]

	const id = $props.id()
	const service = useMachine(accordion.machine, { id, defaultValue: ['one'] })
	const api = $derived(accordion.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	{#each items as item (item.value)}
		<div {...api.getItemProps({ value: item.value })}>
			<h3>
				<button {...api.getItemTriggerProps({ value: item.value })}>{item.title}</button>
			</h3>
			<div {...api.getItemContentProps({ value: item.value })}>{item.body}</div>
		</div>
	{/each}
</div>
