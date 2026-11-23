<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import * as Accordion from './ui/accordion/index.js'
</script>

<Accordion.Root type="single" value="shipping" class="space-y-4">
	<Accordion.Item value="shipping">
		<Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
		<Accordion.Content>Orders usually arrive within three to five working days.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="returns">
		<Accordion.Trigger>Can I return an item?</Accordion.Trigger>
		<Accordion.Content>Yes, within 30 days of delivery.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="support">
		<Accordion.Trigger>How do I contact support?</Accordion.Trigger>
		<Accordion.Content>Send us a message from your account page.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
