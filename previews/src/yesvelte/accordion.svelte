<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/accordion
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Accordion, AccordionBody, AccordionHeader, Accordions } from 'yesvelte'
</script>

<Accordions>
	<Accordion open>
		<AccordionHeader>Shipping</AccordionHeader>
		<AccordionBody>Orders leave the warehouse within two working days.</AccordionBody>
	</Accordion>
	<Accordion>
		<AccordionHeader>Returns</AccordionHeader>
		<AccordionBody>Send items back within 30 days for a full refund.</AccordionBody>
	</Accordion>
	<Accordion>
		<AccordionHeader>Warranty</AccordionHeader>
		<AccordionBody>Every device is covered for two years.</AccordionBody>
	</Accordion>
</Accordions>
