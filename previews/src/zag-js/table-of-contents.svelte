<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/toc
-->
<script lang="ts">
	import * as toc from '@zag-js/toc'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const items = [
		{ value: 'overview', depth: 2 },
		{ value: 'setup', depth: 2 },
		{ value: 'requirements', depth: 3 },
		{ value: 'faq', depth: 2 },
	]

	const id = $props.id()
	const service = useMachine(toc.machine, { id, items })
	const api = $derived(toc.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<nav {...api.getNavProps()}>
		<div {...api.getTitleProps()}>On this page</div>
		<ul {...api.getListProps()}>
			{#each api.items as item (item.value)}
				<li {...api.getItemProps({ item })}>
					<a href="#{item.value}" {...api.getLinkProps({ item })}>{item.value}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

{#each items as item (item.value)}
	<svelte:element this={`h${item.depth}`} id={item.value}>{item.value}</svelte:element>
	<p>Some text for the {item.value} section.</p>
{/each}
