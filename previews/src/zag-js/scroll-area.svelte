<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/scroll-area
-->
<script lang="ts">
	import * as scrollArea from '@zag-js/scroll-area'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const lines = Array.from({ length: 12 }, (_, i) => `Line ${i + 1} of the scrollable content.`)

	const id = $props.id()
	const service = useMachine(scrollArea.machine, { id })
	const api = $derived(scrollArea.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getViewportProps()}>
		<div {...api.getContentProps()}>
			{#each lines as line (line)}
				<p>{line}</p>
			{/each}
		</div>
	</div>
	<div {...api.getScrollbarProps()}>
		<div {...api.getThumbProps()}></div>
	</div>
</div>
