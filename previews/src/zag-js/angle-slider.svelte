<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/angle-slider
-->
<script lang="ts">
	import * as angleSlider from '@zag-js/angle-slider'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(angleSlider.machine, { id, defaultValue: 45 })
	const api = $derived(angleSlider.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Rotation</label>
	<span {...api.getValueTextProps()}>{api.valueAsDegree}</span>
	<div {...api.getControlProps()}>
		<div {...api.getThumbProps()}></div>
		<div {...api.getMarkerGroupProps()}>
			{#each [0, 90, 180, 270] as value (value)}
				<div {...api.getMarkerProps({ value })}></div>
			{/each}
		</div>
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
