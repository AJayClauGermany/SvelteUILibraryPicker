<!--
  Floating UI is a positioning engine only: it ships no styles and no markup, so this tooltip is
  intentionally unstyled. computePosition() from @floating-ui/dom places it; that IS its default.
  Docs: https://floating-ui.com/docs/tutorial
-->
<script lang="ts">
	import { computePosition, flip, offset, shift } from '@floating-ui/dom'

	let trigger: HTMLButtonElement
	let tip = $state<HTMLDivElement>()
	let open = $state(false)

	$effect(() => {
		if (!open || !tip) return
		const el = tip
		computePosition(trigger, el, { placement: 'top', middleware: [offset(6), flip(), shift({ padding: 4 })] })
			.then(({ x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` }))
	})
</script>

<button
	bind:this={trigger}
	aria-describedby="tip"
	onmouseenter={() => (open = true)}
	onmouseleave={() => (open = false)}
	onfocus={() => (open = true)}
	onblur={() => (open = false)}
>Hover or focus me</button>
{#if open}
	<!-- Floating UI needs an absolutely positioned element to place; this is not styling. -->
	<div id="tip" role="tooltip" bind:this={tip} style="position: absolute; top: 0; left: 0">Saves your changes</div>
{/if}
