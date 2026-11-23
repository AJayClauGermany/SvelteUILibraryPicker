<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/steps
-->
<script lang="ts">
	import * as steps from '@zag-js/steps'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const items = ['Account', 'Profile', 'Review']

	const id = $props.id()
	const service = useMachine(steps.machine, { id, count: items.length })
	const api = $derived(steps.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getListProps()}>
		{#each items as title, index (title)}
			<div {...api.getItemProps({ index })}>
				<button {...api.getTriggerProps({ index })}>
					<span {...api.getIndicatorProps({ index })}>{index + 1}</span>
					<span>{title}</span>
				</button>
				<div {...api.getSeparatorProps({ index })}></div>
			</div>
		{/each}
	</div>
	{#each items as title, index (title)}
		<div {...api.getContentProps({ index })}>Content for {title}.</div>
	{/each}
	<div {...api.getContentProps({ index: items.length })}>All steps done.</div>
	<button {...api.getPrevTriggerProps()}>Back</button>
	<button {...api.getNextTriggerProps()}>Next</button>
</div>
