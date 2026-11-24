<!--
  Floating UI is a positioning engine only: it ships no styles and no markup, so this popover is
  intentionally unstyled. computePosition() from @floating-ui/dom places it; that IS its default.
  Docs: https://floating-ui.com/docs/computePosition
-->
<script lang="ts">
	import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom'

	let trigger: HTMLButtonElement
	let panel = $state<HTMLDivElement>()
	let open = $state(false)

	$effect(() => {
		if (!open || !panel) return
		const el = panel
		// Recompute on scroll and resize while open; autoUpdate returns its own cleanup.
		return autoUpdate(trigger, el, () => {
			computePosition(trigger, el, { placement: 'bottom-start', middleware: [offset(6), flip(), shift({ padding: 4 })] })
				.then(({ x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` }))
		})
	})
</script>

<button bind:this={trigger} aria-expanded={open} aria-controls="panel" onclick={() => (open = !open)}>
	Open popover
</button>
{#if open}
	<!-- Floating UI needs an absolutely positioned element to place; this is not styling. -->
	<div id="panel" role="dialog" aria-label="Details" bind:this={panel} style="position: absolute; top: 0; left: 0">
		<p>Some extra details next to the button.</p>
		<button onclick={() => (open = false)}>Close</button>
	</div>
{/if}
