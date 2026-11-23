<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/file-drop-zone
-->
<script lang="ts">
	import './styles.css'
	import * as FileDropZone from './components/ui/file-drop-zone/index.js'

	let names = $state<string[]>([])

	async function onUpload(files: File[]) {
		names = [...names, ...files.map((file) => file.name)]
	}
</script>

<FileDropZone.Root {onUpload} accept="image/*" maxFiles={4} fileCount={names.length}>
	<FileDropZone.Trigger />
</FileDropZone.Root>
{#each names as name (name)}
	<p>{name}</p>
{/each}
