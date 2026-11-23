<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/typography
-->
<script lang="ts">
	import './styles.css'
	import * as Typography from '@sivir-ui/svelte/components/typography'
</script>

<article class="flex w-full max-w-xl flex-col gap-2">
	<Typography.Metadata>Field notes / March 12</Typography.Metadata>
	<Typography.H2>Planting the spring garden</Typography.H2>
	<Typography.Text variant="lead">Start with hardy greens, then add tomatoes once nights stay warm.</Typography.Text>
	<Typography.Text variant="body">
		Seed dates are kept in <Typography.InlineCode>plan.csv</Typography.InlineCode> next to the map.
	</Typography.Text>
	<Typography.Text>Soil tests come back in about a week.</Typography.Text>
</article>
