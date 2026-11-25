<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/tree/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Tree, type TreeItem } from '@agnos-ui/svelte-bootstrap/components/tree'

	const nodes: TreeItem[] = [
		{
			label: 'src',
			isExpanded: true,
			children: [{ label: 'lib', children: [{ label: 'utils.ts' }] }, { label: 'main.ts' }],
		},
		{ label: 'package.json' },
	]
</script>

<Tree {nodes} />
