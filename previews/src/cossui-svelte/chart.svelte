<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/chart
-->
<script lang="ts">
	import './styles.css'
	import { BarChart } from 'layerchart'
	import { Chart, ChartTooltip, type ChartConfig } from './ui/chart/index.ts'

	const data = [
		{ month: 'Jan', visits: 186 },
		{ month: 'Feb', visits: 305 },
		{ month: 'Mar', visits: 237 },
		{ month: 'Apr', visits: 173 },
		{ month: 'May', visits: 209 },
	]

	const config = {
		visits: { label: 'Visits', color: 'var(--chart-1)' },
	} satisfies ChartConfig
</script>

<Chart {config} class="h-72 w-full">
	<BarChart {data} x="month" series={[{ key: 'visits', color: config.visits.color }]}>
		{#snippet tooltip()}
			<ChartTooltip />
		{/snippet}
	</BarChart>
</Chart>
