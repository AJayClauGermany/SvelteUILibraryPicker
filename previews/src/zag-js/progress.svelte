<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/linear-progress
-->
<script lang="ts">
	import * as progress from '@zag-js/progress'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(progress.machine, { id, defaultValue: 40 })
	const api = $derived(progress.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getLabelProps()}>Uploading</div>
	<div {...api.getTrackProps()}>
		<div {...api.getRangeProps()}></div>
	</div>
	<div {...api.getValueTextProps()}>{api.percentAsString}</div>
</div>
