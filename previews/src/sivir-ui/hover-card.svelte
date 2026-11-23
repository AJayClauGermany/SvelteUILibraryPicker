<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/hover-card
-->
<script lang="ts">
	import './styles.css'
	import * as HoverCard from '@sivir-ui/svelte/components/hover-card'
</script>

<HoverCard.Root>
	<HoverCard.Trigger href="#release-notes">Release notes</HoverCard.Trigger>
	<HoverCard.Content>
		<HoverCard.Title>Release notes</HoverCard.Title>
		<HoverCard.Description>Version 2 adds keyboard shortcuts and a compact layout.</HoverCard.Description>
	</HoverCard.Content>
</HoverCard.Root>
