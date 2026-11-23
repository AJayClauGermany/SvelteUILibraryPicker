<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Select
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Select, SelectItem } from 'carbon-components-svelte'
</script>

<Select labelText="Country" selected="ca">
	<SelectItem value="ca" text="Canada" />
	<SelectItem value="fr" text="France" />
	<SelectItem value="jp" text="Japan" />
</Select>
