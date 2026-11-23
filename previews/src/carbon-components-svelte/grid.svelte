<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Grid
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Column, Grid, Row, Tile } from 'carbon-components-svelte'
</script>

<Grid>
	<Row>
		<Column><Tile>Column</Tile></Column>
		<Column><Tile>Column</Tile></Column>
		<Column><Tile>Column</Tile></Column>
	</Row>
	<br />
	<Row>
		<Column sm={1} md={2} lg={4}><Tile>lg 4</Tile></Column>
		<Column sm={3} md={6} lg={12}><Tile>lg 12</Tile></Column>
	</Row>
</Grid>
