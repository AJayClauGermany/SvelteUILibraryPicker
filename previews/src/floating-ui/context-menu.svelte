<!--
  Floating UI is a positioning engine only: it ships no styles and no markup, so this context menu
  is intentionally unstyled. computePosition() places it at the pointer through a virtual element;
  that IS its default. Opening and closing are plain event handlers of ours.
  Docs: https://floating-ui.com/docs/virtual-elements
-->
<script lang="ts">
	import { computePosition, flip, shift } from '@floating-ui/dom'

	let menu = $state<HTMLDivElement>()
	let point = $state<{ x: number, y: number }>()
	let last = $state('nothing yet')

	$effect(() => {
		if (!point || !menu) return
		const el = menu
		const { x, y } = point
		// A virtual element: a zero-size rectangle at the pointer instead of a DOM reference.
		const at = { getBoundingClientRect: () => ({ x, y, top: y, left: x, right: x, bottom: y, width: 0, height: 0 }) }
		computePosition(at, el, { placement: 'right-start', middleware: [flip(), shift({ padding: 4 })] })
			.then(pos => Object.assign(el.style, { left: `${pos.x}px`, top: `${pos.y}px` }))
	})

	function choose(action: string) {
		last = action
		point = undefined
	}
</script>

<svelte:window onkeydown={e => e.key === 'Escape' && (point = undefined)} />

<p>Last action: {last}</p>
<p
	oncontextmenu={(e) => {
		e.preventDefault()
		point = { x: e.clientX, y: e.clientY }
	}}
>
	Right-click anywhere on this line to open the menu.
</p>
{#if point}
	<!-- Floating UI needs an absolutely positioned element to place; this is not styling. -->
	<div bind:this={menu} style="position: absolute; top: 0; left: 0">
		<button onclick={() => choose('Copy')}>Copy</button><br />
		<button onclick={() => choose('Paste')}>Paste</button><br />
		<button onclick={() => choose('Inspect')}>Inspect</button>
	</div>
{/if}
