<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/toast
-->
<script lang="ts">
	import * as toast from '@zag-js/toast'
	import { normalizeProps, useMachine } from '@zag-js/svelte'
	import ToastItem from './toast/item.svelte'

	const toaster = toast.createStore({ placement: 'bottom-end' })

	const id = $props.id()
	const service = useMachine(toast.group.machine, { id, store: toaster })
	const api = $derived(toast.group.connect(service, normalizeProps))
</script>

<button onclick={() => toaster.create({ title: 'Saved', description: 'Your changes were stored.' })}>
	Show toast
</button>

<div {...api.getGroupProps()}>
	{#each api.getToasts() as options, index (options.id)}
		<ToastItem {options} {index} parent={service} />
	{/each}
</div>
