<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/marquee
-->
<script lang="ts">
	import * as marquee from '@zag-js/marquee'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const words = ['Svelte', 'Runes', 'Snippets', 'Stores', 'Actions']

	const id = $props.id()
	const service = useMachine(marquee.machine, { id, autoFill: true })
	const api = $derived(marquee.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getViewportProps()}>
		{#each Array.from({ length: api.contentCount }, (_, i) => i) as index (index)}
			<div {...api.getContentProps({ index })}>
				{#each words as word (word)}
					<span {...api.getItemProps()}>{word}</span>
				{/each}
			</div>
		{/each}
	</div>
</div>
