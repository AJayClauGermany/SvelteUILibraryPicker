<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/dialog
-->
<script lang="ts">
	import * as dialog from '@zag-js/dialog'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(dialog.machine, { id })
	const api = $derived(dialog.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Open dialog</button>
{#if api.open}
	<div use:portal {...api.getBackdropProps()}></div>
	<div use:portal {...api.getPositionerProps()}>
		<div {...api.getContentProps()}>
			<h2 {...api.getTitleProps()}>Rename project</h2>
			<p {...api.getDescriptionProps()}>Pick a new name for this project.</p>
			<input placeholder="Project name" />
			<button {...api.getCloseTriggerProps()}>Close</button>
		</div>
	</div>
{/if}
