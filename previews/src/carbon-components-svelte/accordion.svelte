<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Accordion
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Accordion, AccordionItem } from 'carbon-components-svelte'
</script>

<Accordion>
	<AccordionItem title="First section" open>Content for the first section.</AccordionItem>
	<AccordionItem title="Second section">Content for the second section.</AccordionItem>
	<AccordionItem title="Third section">Content for the third section.</AccordionItem>
</Accordion>
