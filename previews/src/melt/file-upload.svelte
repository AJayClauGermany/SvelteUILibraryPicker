<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/file-upload
-->
<script lang="ts">
	import { FileUpload } from 'melt/builders'

	const upload = new FileUpload({ multiple: true })
</script>

<input {...upload.input} />
<div {...upload.dropzone}>
	{upload.isDragging ? 'Drop files here' : 'Drag files here or click to choose'}
</div>

<ul>
	{#each upload.selected as file (file)}
		<li>
			{file.name}
			<button onclick={() => upload.remove(file)}>Remove</button>
		</li>
	{/each}
</ul>
