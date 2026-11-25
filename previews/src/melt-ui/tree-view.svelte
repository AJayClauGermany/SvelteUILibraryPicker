<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/tree
-->
<script lang="ts">
	import { createTreeView } from '@melt-ui/svelte'

	const folders = [
		{ id: 'src', title: 'src', files: ['app.ts', 'main.ts'] },
		{ id: 'docs', title: 'docs', files: ['guide.md'] },
	]

	const {
		elements: { tree, item, group },
		helpers: { isExpanded },
	} = createTreeView({ defaultExpanded: ['src'] })
</script>

<ul {...$tree} use:tree aria-label="Files">
	{#each folders as folder (folder.id)}
		<li>
			<button {...$item({ id: folder.id, hasChildren: true })} use:item>
				{$isExpanded(folder.id) ? '▾' : '▸'} {folder.title}
			</button>
			<ul {...$group({ id: folder.id })} use:group>
				{#each folder.files as file (file)}
					<li>
						<button {...$item({ id: `${folder.id}/${file}` })} use:item>{file}</button>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>
