<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/chart
-->
<script lang="ts">
	import './styles.css'
	import { BarChart } from 'layerchart'
	import * as Chart from './ui/chart/index.js'

	const data = [
		{ day: 'Mon', visits: 120, signups: 30 },
		{ day: 'Tue', visits: 210, signups: 55 },
		{ day: 'Wed', visits: 180, signups: 42 },
		{ day: 'Thu', visits: 260, signups: 70 },
		{ day: 'Fri', visits: 150, signups: 38 }
	]

	const config = {
		visits: { label: 'Visits', color: 'var(--chart-2)' },
		signups: { label: 'Sign-ups', color: 'var(--chart-4)' }
	} satisfies Chart.ChartConfig
</script>

<Chart.Container {config} class="min-h-[200px] w-full">
	<BarChart
		{data}
		x="day"
		axis="x"
		seriesLayout="group"
		legend
		series={[
			{ key: 'visits', label: config.visits.label, color: config.visits.color },
			{ key: 'signups', label: config.signups.label, color: config.signups.color }
		]}
	>
		{#snippet tooltip()}
			<Chart.Tooltip />
		{/snippet}
	</BarChart>
</Chart.Container>
