<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/tree
-->
<script lang="ts">
	import { Tree, type TreeItem } from 'melt/builders'

	const items: TreeItem[] = [
		{
			id: 'src',
			children: [
				{ id: 'app.ts' },
				{ id: 'lib', children: [{ id: 'utils.ts' }, { id: 'api.ts' }] },
			],
		},
		{ id: 'package.json' },
	]

	const tree = new Tree({ items, expanded: ['src'] })

	type Node = (typeof tree.children)[number]
</script>

{#snippet branch(nodes: Node[])}
	{#each nodes as node (node.id)}
		<li {...node.attrs}>
			{node.canExpand ? (node.expanded ? '▾' : '▸') : ''}
			{node.id}{node.selected ? ' (selected)' : ''}
			{#if node.children && node.expanded}
				<ul {...tree.group}>{@render branch(node.children)}</ul>
			{/if}
		</li>
	{/each}
{/snippet}

<ul {...tree.root}>{@render branch(tree.children)}</ul>
