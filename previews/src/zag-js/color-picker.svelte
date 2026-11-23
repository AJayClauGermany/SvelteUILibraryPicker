<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/color-picker
-->
<script lang="ts">
	import * as colorPicker from '@zag-js/color-picker'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(colorPicker.machine, { id, defaultValue: colorPicker.parse('#3b82f6') })
	const api = $derived(colorPicker.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Colour: {api.valueAsString}</label>
	<input {...api.getHiddenInputProps()} />
	<div {...api.getControlProps()}>
		<button {...api.getTriggerProps()}>
			<div {...api.getSwatchProps({ value: api.value })}></div>
		</button>
		<input {...api.getChannelInputProps({ channel: 'hex' })} />
	</div>
	<div {...api.getPositionerProps()}>
		<div {...api.getContentProps()}>
			<div {...api.getAreaProps()}>
				<div {...api.getAreaBackgroundProps()}></div>
				<div {...api.getAreaThumbProps()}></div>
			</div>
			<div {...api.getChannelSliderProps({ channel: 'hue' })}>
				<div {...api.getChannelSliderTrackProps({ channel: 'hue' })}></div>
				<div {...api.getChannelSliderThumbProps({ channel: 'hue' })}></div>
			</div>
		</div>
	</div>
</div>
