<!--
  SVAR DataGrid styles itself through a theme wrapper; we use its default Willow theme and its
  WillowDark theme in dark mode (both exported by the package). No styles of ours.
  Docs: https://docs.svar.dev/svelte/grid/getting_started/
-->
<script lang="ts">
	import { Grid, Willow, WillowDark } from '@svar-ui/svelte-grid'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const data = [
		{ id: 1, city: 'Lisbon', country: 'Portugal', population: 545000 },
		{ id: 2, city: 'Oslo', country: 'Norway', population: 717000 },
		{ id: 3, city: 'Kyoto', country: 'Japan', population: 1464000 },
	]
	const columns = [
		{ id: 'city', header: 'City', flexgrow: 1, sort: true },
		{ id: 'country', header: 'Country', width: 120, sort: true },
		{ id: 'population', header: 'Population', width: 120, sort: true },
	]
</script>

<Theme>
	<Grid {data} {columns} />
</Theme>
