<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  The thumb sits at the start because positioning is left to your CSS (via the
  --percentage variable); click or drag along the row to change the value.
  Docs: https://next.melt-ui.com/components/slider
-->
<script lang="ts">
	import { Slider } from 'melt/builders'

	const slider = new Slider({ value: 30 })
</script>

<div {...slider.root}>
	<span {...slider.thumb}>{slider.value}</span>
</div>
