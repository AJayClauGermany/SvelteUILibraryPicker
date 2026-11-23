<!--
  Melt UI (next-gen) is headless: it drives the native popover attribute and ships no
  styles, so what you see is the browser's default popover. Intentionally unstyled.
  Docs: https://next.melt-ui.com/components/tooltip
-->
<script lang="ts">
	import { Tooltip } from 'melt/builders'

	const tooltip = new Tooltip({ openDelay: 300 })
</script>

<button {...tooltip.trigger}>Hover me</button>

<div {...tooltip.content}>
	<div {...tooltip.arrow}></div>
	<p>A short hint.</p>
</div>
