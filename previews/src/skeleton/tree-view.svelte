<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/tree-view
-->
<script lang="ts">
	import './styles.css'
	import { TreeView, createTreeViewCollection } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	interface FileNode {
		id: string
		name: string
		children?: FileNode[]
	}

	const collection = createTreeViewCollection<FileNode>({
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
						{ id: 'src/app.html', name: 'app.html' },
						{ id: 'src/main.ts', name: 'main.ts' },
					],
				},
				{ id: 'readme', name: 'README.md' },
			],
		},
	})
</script>

<TreeView {collection} defaultExpandedValue={['src']}>
	<TreeView.Label>Project</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children ?? [] as node, index (node.id)}
			{@render treeNode(node, [index])}
		{/each}
	</TreeView.Tree>
</TreeView>

{#snippet treeNode(node: FileNode, indexPath: number[])}
	<TreeView.NodeProvider value={{ node, indexPath }}>
		{#if node.children}
			<TreeView.Branch>
				<TreeView.BranchControl>
					<TreeView.BranchIndicator />
					<TreeView.BranchText>{node.name}</TreeView.BranchText>
				</TreeView.BranchControl>
				<TreeView.BranchContent>
					<TreeView.BranchIndentGuide />
					{#each node.children as child, childIndex (child.id)}
						{@render treeNode(child, [...indexPath, childIndex])}
					{/each}
				</TreeView.BranchContent>
			</TreeView.Branch>
		{:else}
			<TreeView.Item>{node.name}</TreeView.Item>
		{/if}
	</TreeView.NodeProvider>
{/snippet}
