<!-- One toast, rendered by ../toast.svelte for each entry in the toast group. -->
<script lang="ts">
	import * as toast from '@zag-js/toast'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	interface Props {
		options: toast.Options
		index: number
		parent: toast.GroupService
	}

	const { options, index, parent }: Props = $props()

	const machineProps = $derived({ ...options, parent, index })
	const service = useMachine(toast.machine, () => machineProps)
	const api = $derived(toast.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getTitleProps()}>{api.title}</div>
	<div {...api.getDescriptionProps()}>{api.description}</div>
	<button {...api.getCloseTriggerProps()}>Close</button>
</div>
