<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/AspectRatio
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { AspectRatio, Column, Grid, Row, Tile } from 'carbon-components-svelte'
</script>

<Grid>
	<Row>
		<Column>
			<AspectRatio ratio="1x1">
				<Tile fullHeight>1x1</Tile>
			</AspectRatio>
		</Column>
		<Column>
			<AspectRatio ratio="16x9">
				<Tile fullHeight>16x9</Tile>
			</AspectRatio>
		</Column>
	</Row>
</Grid>
