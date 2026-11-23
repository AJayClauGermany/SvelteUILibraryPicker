<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/signature-pad
-->
<script lang="ts">
	import * as signaturePad from '@zag-js/signature-pad'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(signaturePad.machine, { id })
	const api = $derived(signaturePad.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Sign here</label>
	<div {...api.getControlProps()}>
		<svg {...api.getSegmentProps()}>
			{#each api.paths as path, i (i)}
				<path {...api.getSegmentPathProps({ path })} />
			{/each}
			{#if api.currentPath}
				<path {...api.getSegmentPathProps({ path: api.currentPath })} />
			{/if}
		</svg>
		<div {...api.getGuideProps()}></div>
	</div>
	<button {...api.getClearTriggerProps()}>Clear</button>
</div>
