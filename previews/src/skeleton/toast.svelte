<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The trigger is a plain <button> with Skeleton's own `btn` classes, as in its docs.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/toast
-->
<script lang="ts">
	import './styles.css'
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const toaster = createToaster()

	function notify() {
		toaster.success({ title: 'Saved', description: 'Your changes were saved.' })
	}
</script>

<button type="button" class="btn preset-filled" onclick={notify}>Show toast</button>

<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast}>
			<Toast.Message>
				<Toast.Title>{toast.title}</Toast.Title>
				<Toast.Description>{toast.description}</Toast.Description>
			</Toast.Message>
			<Toast.CloseTrigger />
		</Toast>
	{/snippet}
</Toast.Group>
