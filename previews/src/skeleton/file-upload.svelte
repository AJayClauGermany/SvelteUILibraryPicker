<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/file-upload
-->
<script lang="ts">
	import './styles.css'
	import { FileUpload } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<FileUpload maxFiles={3}>
	<FileUpload.Label>Attachments</FileUpload.Label>
	<FileUpload.Dropzone>
		<span>Drop files here, or</span>
		<FileUpload.Trigger>Choose files</FileUpload.Trigger>
		<FileUpload.HiddenInput />
	</FileUpload.Dropzone>
	<FileUpload.ItemGroup>
		<FileUpload.Context>
			{#snippet children(upload)}
				{#each upload().acceptedFiles as file (file.name)}
					<FileUpload.Item {file}>
						<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
						<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
						<FileUpload.ItemDeleteTrigger />
					</FileUpload.Item>
				{/each}
			{/snippet}
		</FileUpload.Context>
	</FileUpload.ItemGroup>
</FileUpload>
