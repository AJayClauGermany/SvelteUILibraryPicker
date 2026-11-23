<!--
  Carbon Charts with its required styles.css and its default "white" theme; in dark mode the
  preview passes the documented `theme` option "g100" instead. No styles of ours.
  Docs: https://charts.carbondesignsystem.com/
-->
<script lang="ts">
	import '@carbon/charts-svelte/styles.css'
	import { BarChartSimple, ChartTheme, ScaleTypes } from '@carbon/charts-svelte'
	import { theme } from '../../theme.svelte.ts'

	const data = [
		{ group: 'Apples', value: 42 },
		{ group: 'Pears', value: 28 },
		{ group: 'Plums', value: 35 },
		{ group: 'Figs', value: 12 }
	]

	const options = $derived({
		title: 'Fruit sold',
		height: '300px',
		theme: theme.current === 'dark' ? ChartTheme.G100 : ChartTheme.WHITE,
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: ScaleTypes.LABELS }
		}
	})
</script>

<BarChartSimple {data} {options} />
