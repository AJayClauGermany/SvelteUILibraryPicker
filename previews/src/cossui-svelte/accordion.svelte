<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from './ui/accordion/index.ts'
</script>

<Accordion class="w-full" value="shipping">
	<AccordionItem value="shipping">
		<AccordionTrigger>How long does shipping take?</AccordionTrigger>
		<AccordionPanel>Most orders arrive within three to five working days.</AccordionPanel>
	</AccordionItem>
	<AccordionItem value="returns">
		<AccordionTrigger>Can I return an item?</AccordionTrigger>
		<AccordionPanel>Yes, within 30 days of delivery.</AccordionPanel>
	</AccordionItem>
	<AccordionItem value="support">
		<AccordionTrigger>How do I contact support?</AccordionTrigger>
		<AccordionPanel>Send us a message from your account page.</AccordionPanel>
	</AccordionItem>
</Accordion>
