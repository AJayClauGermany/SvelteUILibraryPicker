<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/toast
-->
<script lang="ts">
	import { Toast, Toaster, createToaster } from '@ark-ui/svelte/toast'

	const toaster = createToaster({ placement: 'bottom-end' })

	function save() {
		toaster.create({ title: 'Saved', description: 'Your changes are stored.', type: 'success' })
	}
</script>

<button type="button" onclick={save}>Save changes</button>

<Toaster {toaster}>
	{#snippet children(toast)}
		<Toast.Root>
			<Toast.Title>{toast().title}</Toast.Title>
			<Toast.Description>{toast().description}</Toast.Description>
			<Toast.CloseTrigger>Close</Toast.CloseTrigger>
		</Toast.Root>
	{/snippet}
</Toaster>
