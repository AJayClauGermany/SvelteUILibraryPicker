<!--
  ECharts draws with its own default palette and its built-in light and dark themes (the `theme`
  prop, read from the site's mode here). The chart fills its parent, so the parent gets a height.
  Docs: https://github.com/bherbruck/svelte-echarts#readme
-->
<script lang="ts">
	import { Chart } from 'svelte-echarts'
	import { init, use } from 'echarts/core'
	import { LineChart } from 'echarts/charts'
	import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
	import { CanvasRenderer } from 'echarts/renderers'
	import type { EChartsOption } from 'echarts'
	import { theme } from '../../theme.svelte.ts'

	use([LineChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer])

	const options: EChartsOption = {
		legend: {},
		tooltip: { trigger: 'axis' },
		xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
		yAxis: { type: 'value' },
		series: [
			{ name: 'Visits', type: 'line', data: [120, 180, 150, 210, 190] },
			{ name: 'Sign-ups', type: 'line', data: [20, 34, 28, 45, 40] },
		],
	}
</script>

<div style="height: 260px">
	{#key theme.current}
		<Chart {init} {options} theme={theme.current} />
	{/key}
</div>
