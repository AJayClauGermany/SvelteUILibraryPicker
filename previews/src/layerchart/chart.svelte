<!--
  LayerChart without a UI framework: its core.css (the cascade layer order its getting-started
  guide asks non-Tailwind apps to import) and no colour variables, so marks use currentColor.
  Docs: https://layerchart.com
-->
<script lang="ts">
	import 'layerchart/core.css'
	import { BarChart } from 'layerchart'

	const data = [
		{ fruit: 'Apples', sold: 42 },
		{ fruit: 'Pears', sold: 28 },
		{ fruit: 'Plums', sold: 35 },
		{ fruit: 'Figs', sold: 12 }
	]
</script>

<!-- The chart fills its parent, so the parent needs a height for anything to render. -->
<div style="height: 240px">
	<BarChart {data} x="fruit" y="sold" />
</div>
