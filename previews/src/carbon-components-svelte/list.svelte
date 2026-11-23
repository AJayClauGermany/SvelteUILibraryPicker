<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ContainedList
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ContainedList, ContainedListItem } from 'carbon-components-svelte'
</script>

<ContainedList labelText="Recent files">
	<ContainedListItem>report.pdf</ContainedListItem>
	<ContainedListItem>budget.xlsx</ContainedListItem>
	<ContainedListItem interactive>notes.md (clickable)</ContainedListItem>
	<ContainedListItem disabled>archive.zip</ContainedListItem>
</ContainedList>
