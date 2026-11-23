<!--
  Melt UI (next-gen) is headless: the toaster root uses the native popover attribute and
  no styles ship with it, so toasts appear in the browser's default popover box.
  Intentionally unstyled.
  Docs: https://next.melt-ui.com/components/toaster
-->
<script lang="ts">
	import { Toaster } from 'melt/builders'

	type Message = { title: string; description: string }

	const toaster = new Toaster<Message>()

	function notify() {
		toaster.addToast({ data: { title: 'Saved', description: 'Your changes were saved.' } })
	}
</script>

<button onclick={notify}>Show toast</button>

<div {...toaster.root}>
	{#each toaster.toasts as toast (toast.id)}
		<div {...toast.content}>
			<h3 {...toast.title}>{toast.data.title}</h3>
			<p {...toast.description}>{toast.data.description}</p>
			<button {...toast.close}>Dismiss</button>
		</div>
	{/each}
</div>
