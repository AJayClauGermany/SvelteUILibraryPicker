<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/toc
-->
<script lang="ts">
	import { Toc } from '@ark-ui/svelte/toc'

	const items = [
		{ value: 'overview', depth: 2 },
		{ value: 'setup', depth: 2 },
		{ value: 'options', depth: 3 },
		{ value: 'faq', depth: 2 },
	]
	const titles: Record<string, string> = {
		overview: 'Overview',
		setup: 'Setup',
		options: 'Options',
		faq: 'FAQ',
	}
</script>

<Toc.Root {items}>
	<Toc.Nav>
		<Toc.Title>On this page</Toc.Title>
		<Toc.Indicator />
		<Toc.List>
			{#each items as item (item.value)}
				<Toc.Item {item}>
					<Toc.Link href="#{item.value}">{titles[item.value]}</Toc.Link>
				</Toc.Item>
			{/each}
		</Toc.List>
	</Toc.Nav>
	<Toc.Content>
		{#each items as item (item.value)}
			{#if item.depth === 2}
				<h2 id={item.value}>{titles[item.value]}</h2>
			{:else}
				<h3 id={item.value}>{titles[item.value]}</h3>
			{/if}
			<p>Some text for the {titles[item.value].toLowerCase()} section.</p>
		{/each}
	</Toc.Content>
</Toc.Root>
