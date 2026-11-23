<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/date-input
-->
<script lang="ts">
	import * as dateInput from '@zag-js/date-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(dateInput.machine, { id })
	const api = $derived(dateInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Birthday</label>
	<div {...api.getControlProps()}>
		<div {...api.getSegmentGroupProps()}>
			{#each api.getSegments() as segment, i (i)}
				<span {...api.getSegmentProps({ segment })}>{segment.text}</span>
			{/each}
		</div>
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
