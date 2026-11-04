<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-accordion--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Accordion, AccordionItem } from '@sveltestrap/sveltestrap'
</script>

<Accordion>
	<AccordionItem header="First section" active>Content for the first section.</AccordionItem>
	<AccordionItem header="Second section">Content for the second section.</AccordionItem>
	<AccordionItem header="Third section">Content for the third section.</AccordionItem>
</Accordion>
