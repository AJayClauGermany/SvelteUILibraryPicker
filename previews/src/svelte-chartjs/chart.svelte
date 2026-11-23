<!--
  svelte-chartjs draws with Chart.js, so the look is Chart.js' own defaults (including its
  built-in default colour palette); `chart.js/auto` registers every chart part, as the README shows.
  Docs: https://saurav.tech/svelte-chartjs/
-->
<script lang="ts">
	import 'chart.js/auto'
	import { Bar } from 'svelte-chartjs'

	const data = {
		labels: ['Apples', 'Pears', 'Plums', 'Figs'],
		datasets: [
			{ label: 'Sold', data: [42, 28, 35, 12] },
			{ label: 'Returned', data: [3, 5, 2, 1] }
		]
	}
</script>

<Bar {data} />
