<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/FileUploader
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { FileUploader } from 'carbon-components-svelte'

	let files = $state([new File(['quarterly numbers'], 'report.pdf')])
</script>

<FileUploader
	bind:files
	multiple
	labelTitle="Upload files"
	labelDescription="Max file size is 1 MB."
	buttonLabel="Add files"
	status="edit"
/>
