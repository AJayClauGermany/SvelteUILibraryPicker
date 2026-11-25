<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Without styles the toasts appear in the page flow, below the button.
  Docs: https://melt-ui.com/docs/builders/toast
-->
<script lang="ts">
	import { createToaster } from '@melt-ui/svelte'

	type Message = { title: string; description: string }

	const {
		elements: { content, title, description, close },
		helpers: { addToast },
		states: { toasts },
	} = createToaster<Message>()

	function notify() {
		addToast({ data: { title: 'Saved', description: 'Your changes were saved.' } })
	}
</script>

<button onclick={notify}>Show toast</button>

<div>
	{#each $toasts as { id, data } (id)}
		<div {...$content(id)} use:content>
			<h3 {...$title(id)} use:title>{data.title}</h3>
			<p {...$description(id)} use:description>{data.description}</p>
			<button {...$close(id)} use:close>Dismiss</button>
		</div>
	{/each}
</div>
