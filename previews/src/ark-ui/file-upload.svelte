<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/file-upload
-->
<script lang="ts">
	import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root maxFiles={3}>
	<FileUpload.Label>Attachments (up to 3)</FileUpload.Label>
	<FileUpload.Dropzone>Drop files here</FileUpload.Dropzone>
	<FileUpload.Trigger>Choose files</FileUpload.Trigger>
	<FileUpload.ClearTrigger>Clear all</FileUpload.ClearTrigger>
	<FileUpload.ItemGroup>
		<FileUpload.Context>
			{#snippet render(fileUpload)}
				{#each fileUpload().acceptedFiles as file (file.name)}
					<FileUpload.Item {file}>
						<FileUpload.ItemName />
						<FileUpload.ItemSizeText />
						<FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
					</FileUpload.Item>
				{/each}
			{/snippet}
		</FileUpload.Context>
	</FileUpload.ItemGroup>
	<FileUpload.HiddenInput />
</FileUpload.Root>
