<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/tabs
-->
<script lang="ts">
	import * as tabs from '@zag-js/tabs'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const panels = [
		{ value: 'account', label: 'Account', body: 'Update your name and email.' },
		{ value: 'password', label: 'Password', body: 'Change your password here.' },
		{ value: 'billing', label: 'Billing', body: 'Manage your plan and invoices.' },
	]

	const id = $props.id()
	const service = useMachine(tabs.machine, { id, defaultValue: 'account' })
	const api = $derived(tabs.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getListProps()}>
		{#each panels as panel (panel.value)}
			<button {...api.getTriggerProps({ value: panel.value })}>{panel.label}</button>
		{/each}
	</div>
	{#each panels as panel (panel.value)}
		<div {...api.getContentProps({ value: panel.value })}>{panel.body}</div>
	{/each}
</div>
