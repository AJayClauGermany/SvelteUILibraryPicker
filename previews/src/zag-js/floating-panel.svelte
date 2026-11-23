<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/floating-panel
-->
<script lang="ts">
	import * as floatingPanel from '@zag-js/floating-panel'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const axes = ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'] as const

	const id = $props.id()
	const service = useMachine(floatingPanel.machine, { id })
	const api = $derived(floatingPanel.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Toggle panel</button>
<div {...api.getPositionerProps()}>
	<div {...api.getContentProps()}>
		<div {...api.getDragTriggerProps()}>
			<div {...api.getHeaderProps()}>
				<p {...api.getTitleProps()}>Notes</p>
				<div {...api.getControlProps()}>
					<button {...api.getStageTriggerProps({ stage: 'minimized' })}>Minimise</button>
					<button {...api.getStageTriggerProps({ stage: 'maximized' })}>Maximise</button>
					<button {...api.getStageTriggerProps({ stage: 'default' })}>Restore</button>
					<button {...api.getCloseTriggerProps()}>Close</button>
				</div>
			</div>
		</div>
		<div {...api.getBodyProps()}>Drag the header to move this panel.</div>
		{#each axes as axis (axis)}
			<div {...api.getResizeTriggerProps({ axis })}></div>
		{/each}
	</div>
</div>
