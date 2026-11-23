<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import * as Accordion from './ui/accordion/index.js'
</script>

<Accordion.Root type="single" value="shipping">
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
