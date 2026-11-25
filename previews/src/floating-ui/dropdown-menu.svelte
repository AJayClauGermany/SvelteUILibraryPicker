<!--
  Floating UI is a positioning engine only: it ships no styles and no markup, so this dropdown is
  intentionally unstyled. computePosition() from @floating-ui/dom places it; that IS its default.
  Open/close and the items are plain markup of ours: menu interactions are not part of @floating-ui/dom.
  Docs: https://floating-ui.com/docs/computePosition
-->
<script lang="ts">
	import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom'

	let trigger: HTMLButtonElement
	let menu = $state<HTMLDivElement>()
	let open = $state(false)
	let last = $state('nothing yet')

	$effect(() => {
		if (!open || !menu) return
		const el = menu
		return autoUpdate(trigger, el, () => {
			computePosition(trigger, el, { placement: 'bottom-start', middleware: [offset(4), flip(), shift({ padding: 4 })] })
				.then(({ x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` }))
		})
	})

	function choose(action: string) {
		last = action
		open = false
	}
</script>

<p>Last action: {last}</p>
<button bind:this={trigger} aria-expanded={open} aria-controls="actions" onclick={() => (open = !open)}>
	Actions
</button>
{#if open}
	<!-- Floating UI needs an absolutely positioned element to place; this is not styling. -->
	<div id="actions" bind:this={menu} style="position: absolute; top: 0; left: 0">
		<button onclick={() => choose('Rename')}>Rename</button><br />
		<button onclick={() => choose('Duplicate')}>Duplicate</button><br />
		<button onclick={() => choose('Delete')}>Delete</button>
	</div>
{/if}
