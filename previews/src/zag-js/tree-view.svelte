<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/tree-view
-->
<script lang="ts">
	import * as tree from '@zag-js/tree-view'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	interface Node {
		id: string
		name: string
		children?: Node[]
	}

	const collection = tree.collection<Node>({
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
						{ id: 'src/main.ts', name: 'main.ts' },
					],
				},
				{ id: 'readme', name: 'README.md' },
			],
		},
	})

	const id = $props.id()
	const service = useMachine(tree.machine, { id, collection, defaultExpandedValue: ['src'] })
	const api = $derived(tree.connect(service, normalizeProps))
</script>

{#snippet treeNode(node: Node, indexPath: number[])}
	{#if node.children}
		<div {...api.getBranchProps({ indexPath, node })}>
			<div {...api.getBranchControlProps({ indexPath, node })}>
				<span {...api.getBranchIndicatorProps({ indexPath, node })}>▸</span>
				<span {...api.getBranchTextProps({ indexPath, node })}>{node.name}</span>
			</div>
			<div {...api.getBranchContentProps({ indexPath, node })}>
				{#each node.children as child, index (child.id)}
					{@render treeNode(child, [...indexPath, index])}
				{/each}
			</div>
		</div>
	{:else}
		<div {...api.getItemProps({ indexPath, node })}>{node.name}</div>
	{/if}
{/snippet}

<div {...api.getRootProps()}>
	<h3 {...api.getLabelProps()}>Project files</h3>
	<div {...api.getTreeProps()}>
		{#each collection.rootNode.children ?? [] as node, index (node.id)}
			{@render treeNode(node, [index])}
		{/each}
	</div>
</div>
