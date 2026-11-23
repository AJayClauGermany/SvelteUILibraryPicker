<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import * as Accordion from './ui/accordion/index.ts'
</script>

<Accordion.Root type="single" value="shipping">
	<Accordion.Item value="shipping">
		<Accordion.Trigger>When will my order ship?</Accordion.Trigger>
		<Accordion.Content>Most orders leave the warehouse within two days.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="returns">
		<Accordion.Trigger>Can I return an item?</Accordion.Trigger>
		<Accordion.Content>Yes, within 30 days if it is unused.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="support">
		<Accordion.Trigger>How do I reach support?</Accordion.Trigger>
		<Accordion.Content>Send us an email and we reply within a day.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
