<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/timer
-->
<script lang="ts">
	import * as timer from '@zag-js/timer'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(timer.machine, {
		id,
		countdown: true,
		startMs: timer.parse({ minutes: 5 }),
	})
	const api = $derived(timer.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getAreaProps()}>
		<span {...api.getItemProps({ type: 'minutes' })}>{api.formattedTime.minutes}</span>
		<span {...api.getSeparatorProps()}>:</span>
		<span {...api.getItemProps({ type: 'seconds' })}>{api.formattedTime.seconds}</span>
	</div>
	<div {...api.getControlProps()}>
		<button {...api.getActionTriggerProps({ action: 'start' })}>Start</button>
		<button {...api.getActionTriggerProps({ action: 'pause' })}>Pause</button>
		<button {...api.getActionTriggerProps({ action: 'resume' })}>Resume</button>
		<button {...api.getActionTriggerProps({ action: 'reset' })}>Reset</button>
	</div>
</div>
