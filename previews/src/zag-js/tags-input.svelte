<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/tags-input
-->
<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(tagsInput.machine, { id, defaultValue: ['svelte', 'design'] })
	const api = $derived(tagsInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Topics</label>
	<div {...api.getControlProps()}>
		{#each api.value as value, index (value)}
			<span {...api.getItemProps({ index, value })}>
				<span {...api.getItemPreviewProps({ index, value })}>
					<span {...api.getItemTextProps({ index, value })}>{value}</span>
					<button {...api.getItemDeleteTriggerProps({ index, value })}>&#x2715;</button>
				</span>
				<input {...api.getItemInputProps({ index, value })} />
			</span>
		{/each}
		<input placeholder="Add a topic" {...api.getInputProps()} />
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
