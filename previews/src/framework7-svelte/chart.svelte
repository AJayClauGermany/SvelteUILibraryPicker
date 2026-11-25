<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/area-chart.html
-->
<script lang="ts">
	import { AreaChart, Block } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<AreaChart
			axis
			legend
			tooltip
			axisLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
			datasets={[
				{ label: 'Orders', color: '#2196f3', values: [12, 18, 15, 22, 27] },
				{ label: 'Returns', color: '#ff9800', values: [3, 5, 4, 6, 4] },
			]}
		/>
	</Block>
</F7App>
