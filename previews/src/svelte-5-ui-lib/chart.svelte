<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Chart wraps ApexCharts (a dependency of the package) and shows ApexCharts' own defaults for these options.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/plugins/chart/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Chart } from 'svelte-5-ui-lib'

	const options = {
		chart: { type: 'bar' as const, height: 200, toolbar: { show: false } },
		series: [{ name: 'Visits', data: [30, 42, 35, 50, 61] }],
		xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
	}
</script>

<Chart {options} />
