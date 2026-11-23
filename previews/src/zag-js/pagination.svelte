<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/pagination
-->
<script lang="ts">
	import * as pagination from '@zag-js/pagination'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	// 120 items at the default 10 per page gives 12 pages.
	const id = $props.id()
	const service = useMachine(pagination.machine, { id, count: 120, defaultPage: 5 })
	const api = $derived(pagination.connect(service, normalizeProps))
</script>

<nav {...api.getRootProps()}>
	<button {...api.getPrevTriggerProps()}>Previous</button>
	{#each api.pages as page, i (i)}
		{#if page.type === 'page'}
			<button {...api.getItemProps(page)}>{page.value}</button>
		{:else}
			<span {...api.getEllipsisProps({ index: i })}>…</span>
		{/if}
	{/each}
	<button {...api.getNextTriggerProps()}>Next</button>
</nav>
