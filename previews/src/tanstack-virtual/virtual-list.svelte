<!--
  TanStack Virtual is headless: it works out which items are visible and where they go, and you
  write the markup. This preview is unstyled on purpose; that IS its default look.
  Docs: https://tanstack.com/virtual/latest/docs/framework/svelte/svelte-virtual
-->
<script lang="ts">
	import { createVirtualizer } from '@tanstack/svelte-virtual'

	const items = Array.from({ length: 10_000 }, (_, i) => `Item ${i + 1}`)

	let scrollElement = $state<HTMLDivElement | null>(null)

	const virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
		count: items.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 32,
	})
</script>

<!-- Not styling: a virtual list needs a scroll container with a fixed height, and an inner
     element as tall as the whole list with items positioned inside it. The list waits for the
     container so the virtualizer can measure it when it first starts. -->
<div bind:this={scrollElement} style="height: 240px; overflow: auto">
	{#if scrollElement}
		<div style="height: {$virtualizer.getTotalSize()}px; position: relative">
			{#each $virtualizer.getVirtualItems() as row (row.index)}
				<div style="position: absolute; top: 0; left: 0; width: 100%; height: {row.size}px; transform: translateY({row.start}px)">
					{items[row.index]}
				</div>
			{/each}
		</div>
	{/if}
</div>
