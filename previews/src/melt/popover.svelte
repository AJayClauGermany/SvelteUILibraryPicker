<!--
  Melt UI (next-gen) is headless: it drives the native popover attribute and ships no
  styles, so what you see is the browser's default popover. Intentionally unstyled.
  Docs: https://next.melt-ui.com/components/popover
-->
<script lang="ts">
	import { Popover } from 'melt/builders'

	const popover = new Popover()
</script>

<button {...popover.trigger}>Open popover</button>

<div {...popover.content}>
	<p>Some extra information in a popover.</p>
	<button onclick={() => (popover.open = false)}>Close</button>
</div>
