<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/file-input
-->
<script lang="ts">
	import './styles.css'
	import { Fileupload, Helper, Label } from 'flowbite-svelte'

	let files = $state<FileList>()
</script>

<Label for="upload" class="mb-2">Upload file</Label>
<Fileupload id="upload" bind:files clearable />
<Helper class="mt-2">{files?.length ? `${files.length} file(s) selected` : 'No file chosen yet.'}</Helper>
