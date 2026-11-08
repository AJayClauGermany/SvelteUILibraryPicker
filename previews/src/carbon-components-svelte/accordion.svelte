<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Accordion
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Accordion, AccordionItem } from 'carbon-components-svelte'
</script>

<Accordion>
	<AccordionItem title="First section" open>Content for the first section.</AccordionItem>
	<AccordionItem title="Second section">Content for the second section.</AccordionItem>
	<AccordionItem title="Third section">Content for the third section.</AccordionItem>
</Accordion>
