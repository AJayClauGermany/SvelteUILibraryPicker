<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Table
-->
<script lang="ts">
	import './styles.css'
	import { Table } from 'spaper'

	const plants = [
		{ name: 'Basil', light: 'Full sun', water: 'Often' },
		{ name: 'Fern', light: 'Shade', water: 'Keep moist' },
		{ name: 'Cactus', light: 'Full sun', water: 'Rarely' },
	]
</script>

<Table
	data={plants}
	columns={[
		{ field: 'name', label: 'Plant' },
		{ field: 'light', label: 'Light' },
		{ field: 'water', label: 'Water' },
	]}
	striped
	sortable
/>
