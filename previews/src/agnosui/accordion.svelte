<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/accordion/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Accordion, AccordionItem } from '@agnos-ui/svelte-bootstrap/components/accordion'
</script>

<Accordion>
	<AccordionItem header="Shipping" visible>Orders leave the warehouse within two days.</AccordionItem>
	<AccordionItem header="Returns">Send items back within 30 days for a refund.</AccordionItem>
	<AccordionItem header="Warranty" disabled>Not available for this product.</AccordionItem>
</Accordion>
