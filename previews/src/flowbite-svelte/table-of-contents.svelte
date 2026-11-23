<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The scroll-tracking table of contents is called ScrollSpy in Flowbite Svelte.
  Docs: https://flowbite-svelte.com/docs/extend/scroll-spy
-->
<script lang="ts">
	import './styles.css'
	import { Heading, P, ScrollSpy } from 'flowbite-svelte'

	const items = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'setup', label: 'Setup' },
		{ id: 'usage', label: 'Usage' },
	]
</script>

<ScrollSpy {items} />

{#each items as item (item.id)}
	<section id={item.id}>
		<Heading tag="h3">{item.label}</Heading>
		{#each [1, 2, 3] as n (n)}
			<P>Paragraph {n} of the {item.label.toLowerCase()} section. Scroll the page or pick a link above to move between sections.</P>
		{/each}
	</section>
{/each}
