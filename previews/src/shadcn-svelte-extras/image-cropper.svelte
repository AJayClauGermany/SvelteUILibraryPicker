<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/image-cropper
-->
<script lang="ts">
	import './styles.css'
	import * as ImageCropper from './components/ui/image-cropper/index.js'
</script>

<ImageCropper.Root>
	<ImageCropper.UploadTrigger>
		<ImageCropper.Preview />
	</ImageCropper.UploadTrigger>
	<ImageCropper.Dialog>
		<ImageCropper.Cropper />
		<ImageCropper.Controls>
			<ImageCropper.Cancel />
			<ImageCropper.Crop />
		</ImageCropper.Controls>
	</ImageCropper.Dialog>
</ImageCropper.Root>
