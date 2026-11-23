<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/radio-group
-->
<script lang="ts">
	import * as radio from '@zag-js/radio-group'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const sizes = [
		{ value: 'sm', label: 'Small' },
		{ value: 'md', label: 'Medium' },
		{ value: 'lg', label: 'Large' },
	]

	const id = $props.id()
	const service = useMachine(radio.machine, { id, name: 'size', defaultValue: 'md' })
	const api = $derived(radio.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getLabelProps()}>Size</div>
	{#each sizes as size (size.value)}
		<label {...api.getItemProps({ value: size.value })}>
			<span {...api.getItemTextProps({ value: size.value })}>{size.label}</span>
			<input {...api.getItemHiddenInputProps({ value: size.value })} />
			<div {...api.getItemControlProps({ value: size.value })}></div>
		</label>
	{/each}
</div>
