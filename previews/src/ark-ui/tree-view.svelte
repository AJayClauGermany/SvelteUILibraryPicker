<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/tree-view
-->
<script lang="ts">
	import { TreeView, createTreeCollection } from '@ark-ui/svelte/tree-view'

	interface Node {
		id: string
		name: string
		children?: Node[]
	}

	const collection = createTreeCollection<Node>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		rootNode: {
			id: 'root',
			name: '',
			children: [
				{
					id: 'src',
					name: 'src',
					children: [
						{ id: 'src/app.ts', name: 'app.ts' },
						{ id: 'src/routes', name: 'routes', children: [{ id: 'src/routes/page.svelte', name: 'page.svelte' }] },
					],
				},
				{ id: 'package.json', name: 'package.json' },
				{ id: 'readme.md', name: 'README.md' },
			],
		},
	})
</script>

<TreeView.Root {collection} defaultExpandedValue={['src']}>
	<TreeView.Label>Project files</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children ?? [] as node, index (node.id)}
			{@render renderNode(node, [index])}
		{/each}
	</TreeView.Tree>
</TreeView.Root>

{#snippet renderNode(node: Node, indexPath: number[])}
	<TreeView.NodeProvider {node} {indexPath}>
		{#if node.children}
			<TreeView.Branch>
				<TreeView.BranchControl>
					<TreeView.BranchIndicator>▸</TreeView.BranchIndicator>
					<TreeView.BranchText>{node.name}</TreeView.BranchText>
				</TreeView.BranchControl>
				<TreeView.BranchContent>
					{#each node.children as child, i (child.id)}
						{@render renderNode(child, [...indexPath, i])}
					{/each}
				</TreeView.BranchContent>
			</TreeView.Branch>
		{:else}
			<TreeView.Item>
				<TreeView.ItemText>{node.name}</TreeView.ItemText>
			</TreeView.Item>
		{/if}
	</TreeView.NodeProvider>
{/snippet}
