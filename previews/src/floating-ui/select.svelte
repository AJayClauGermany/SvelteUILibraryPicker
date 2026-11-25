<!--
  Floating UI is a positioning engine only: it ships no styles and no markup, so this select list is
  intentionally unstyled. computePosition() places it, and the size() middleware makes the list at
  least as wide as its button, as its docs suggest for select dropdowns; that IS its default.
  Selection is plain markup of ours: list interactions are not part of @floating-ui/dom.
  Docs: https://floating-ui.com/docs/size
-->
<script lang="ts">
	import { autoUpdate, computePosition, flip, offset, size } from '@floating-ui/dom'

	const fruits = ['Apple', 'Banana', 'Cherry']
	let trigger: HTMLButtonElement
	let list = $state<HTMLDivElement>()
	let open = $state(false)
	let value = $state('Choose a fruit')

	$effect(() => {
		if (!open || !list) return
		const el = list
		return autoUpdate(trigger, el, () => {
			computePosition(trigger, el, {
				placement: 'bottom-start',
				middleware: [
					offset(4),
					flip(),
					size({
						apply({ rects }) {
							el.style.minWidth = `${rects.reference.width}px`
						},
					}),
				],
			}).then(({ x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` }))
		})
	})
</script>

<button bind:this={trigger} aria-expanded={open} aria-controls="fruits" onclick={() => (open = !open)}>
	{value}
</button>
{#if open}
	<!-- Floating UI needs an absolutely positioned element to place; this is not styling. -->
	<div id="fruits" bind:this={list} style="position: absolute; top: 0; left: 0">
		{#each fruits as fruit (fruit)}
			<button onclick={() => ((value = fruit), (open = false))}>{fruit}</button><br />
		{/each}
	</div>
{/if}
