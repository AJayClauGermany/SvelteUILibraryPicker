<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/tree-view
-->
<script lang="ts">
	import './styles.css'
	import * as TreeView from './components/ui/tree-view/index.js'
</script>

<TreeView.Root>
	<TreeView.Folder name="src">
		<TreeView.Folder name="lib">
			<TreeView.File name="utils.ts" />
		</TreeView.Folder>
		<TreeView.File name="app.html" />
		<TreeView.File name="main.ts" />
	</TreeView.Folder>
	<TreeView.File name="package.json" />
</TreeView.Root>
