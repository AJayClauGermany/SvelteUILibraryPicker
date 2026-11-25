<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/modal
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = $state(true)
</script>

<Button color="primary" onclick={() => (show = true)}>Open dialog</Button>

<Modal bind:show title="Delete file?">
	<ModalBody>This removes the file for everyone on the team.</ModalBody>
	<ModalFooter>
		<Button onclick={() => (show = false)}>Cancel</Button>
		<Button color="danger" onclick={() => (show = false)}>Delete</Button>
	</ModalFooter>
</Modal>
