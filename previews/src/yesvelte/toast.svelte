<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/toast
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { El, Toast, ToastBody, ToastHeader } from 'yesvelte'
</script>

<Toast show>
	<ToastHeader>
		<El tag="strong" me="auto">Upload complete</El>
		<El tag="small">just now</El>
	</ToastHeader>
	<ToastBody>Three files were added to your library.</ToastBody>
</Toast>
