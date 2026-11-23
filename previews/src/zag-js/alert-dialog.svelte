<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/dialog#creating-an-alert-dialog
-->
<script lang="ts">
	import * as dialog from '@zag-js/dialog'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(dialog.machine, { id, role: 'alertdialog' })
	const api = $derived(dialog.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Delete file</button>
{#if api.open}
	<div use:portal {...api.getBackdropProps()}></div>
	<div use:portal {...api.getPositionerProps()}>
		<div {...api.getContentProps()}>
			<h2 {...api.getTitleProps()}>Delete this file?</h2>
			<p {...api.getDescriptionProps()}>This cannot be undone.</p>
			<button {...api.getCloseTriggerProps()}>Cancel</button>
			<button onclick={() => api.setOpen(false)}>Delete</button>
		</div>
	</div>
{/if}
