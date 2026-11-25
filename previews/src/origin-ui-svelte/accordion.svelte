<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/accordions
-->
<script lang="ts">
	import './styles.css'
	import * as Accordion from './ui/accordion/index.js'
</script>

<Accordion.Root type="single" value="shipping">
	<Accordion.Item value="shipping">
		<Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
		<Accordion.Content>Most orders arrive within three to five working days.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="returns">
		<Accordion.Trigger>Can I return an item?</Accordion.Trigger>
		<Accordion.Content>Yes, within 30 days of delivery.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="support">
		<Accordion.Trigger>How do I reach support?</Accordion.Trigger>
		<Accordion.Content>Send a message from your account page.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
