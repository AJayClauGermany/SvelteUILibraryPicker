<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/rating-group
-->
<script lang="ts">
	import * as rating from '@zag-js/rating-group'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(rating.machine, { id, defaultValue: 3 })
	const api = $derived(rating.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Rating</label>
	<div {...api.getControlProps()}>
		{#each api.items as index (index)}
			<span {...api.getItemProps({ index })}>
				{api.getItemState({ index }).highlighted ? '★' : '☆'}
			</span>
		{/each}
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
