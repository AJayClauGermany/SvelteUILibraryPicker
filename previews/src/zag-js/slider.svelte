<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/slider
-->
<script lang="ts">
	import * as slider from '@zag-js/slider'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(slider.machine, { id, defaultValue: [40] })
	const api = $derived(slider.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Volume</label>
	<output {...api.getValueTextProps()}>{api.value[0]}</output>
	<div {...api.getControlProps()}>
		<div {...api.getTrackProps()}>
			<div {...api.getRangeProps()}></div>
		</div>
		{#each api.value as _, index (index)}
			<div {...api.getThumbProps({ index })}>
				<input {...api.getHiddenInputProps({ index })} />
			</div>
		{/each}
	</div>
</div>
