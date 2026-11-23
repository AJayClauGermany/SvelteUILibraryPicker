<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/tree
-->
<script lang="ts">
	import './styles.css'
	import { hotkeysCoreFeature, syncDataLoaderFeature } from '@headless-tree/core'
	import { Tree, TreeItem, TreeLabel, useTree } from './ui/tree/index.ts'

	type Node = { name: string, children?: string[] }

	const nodes: Record<string, Node> = {
		root: { name: 'Project', children: ['src', 'static', 'readme'] },
		src: { name: 'src', children: ['lib', 'app'] },
		lib: { name: 'lib', children: ['utils'] },
		utils: { name: 'utils.ts' },
		app: { name: 'app.html' },
		static: { name: 'static', children: ['favicon'] },
		favicon: { name: 'favicon.png' },
		readme: { name: 'README.md' },
	}

	const tree = useTree<Node>({
		rootItemId: 'root',
		dataLoader: {
			getItem: (id) => nodes[id],
			getChildren: (id) => nodes[id].children ?? [],
		},
		features: [syncDataLoaderFeature, hotkeysCoreFeature],
		getItemName: (item) => item.getItemData().name,
		isItemFolder: (item) => (item.getItemData().children?.length ?? 0) > 0,
		initialState: { expandedItems: ['src', 'lib'] },
	})
</script>

<Tree {tree}>
	{#each tree.current.getItems() as item (item.getId())}
		<TreeItem {item}>
			<TreeLabel>{item.getItemData().name}</TreeLabel>
		</TreeItem>
	{/each}
</Tree>
