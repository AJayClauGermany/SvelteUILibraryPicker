<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/accordion/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Accordion, AccordionItem } from 'svelte-5-ui-lib'
</script>

<Accordion>
	<AccordionItem open>
		{#snippet header()}What is included?{/snippet}
		<p>Every plan comes with email support.</p>
	</AccordionItem>
	<AccordionItem>
		{#snippet header()}Can I cancel later?{/snippet}
		<p>Yes, at any time from your account page.</p>
	</AccordionItem>
	<AccordionItem>
		{#snippet header()}Is there a free trial?{/snippet}
		<p>The first two weeks are free.</p>
	</AccordionItem>
</Accordion>
