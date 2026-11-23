<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/date-input#choosing-a-selection-mode
-->
<script lang="ts">
	import * as dateInput from '@zag-js/date-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(dateInput.machine, { id, selectionMode: 'range' })
	const api = $derived(dateInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Trip dates</label>
	<div {...api.getControlProps()}>
		{#each [0, 1] as index (index)}
			<div {...api.getSegmentGroupProps({ index })}>
				{#each api.getSegments({ index }) as segment, i (i)}
					<span {...api.getSegmentProps({ segment, index })}>{segment.text}</span>
				{/each}
			</div>
			<input {...api.getHiddenInputProps({ index })} />
		{/each}
	</div>
</div>
