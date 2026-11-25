<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/file-upload
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { FileUpload } from 'yesvelte'
</script>

<FileUpload />
