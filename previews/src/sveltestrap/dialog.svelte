<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-modal--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@sveltestrap/sveltestrap'

	let open = $state(true)
	const toggle = () => (open = !open)
</script>

<Button color="primary" onclick={() => (open = true)}>Open dialog</Button>

<Modal isOpen={open} {toggle}>
	<ModalHeader {toggle}>Delete file?</ModalHeader>
	<ModalBody>This cannot be undone.</ModalBody>
	<ModalFooter>
		<Button color="secondary" onclick={toggle}>Cancel</Button>
		<Button color="danger" onclick={toggle}>Delete</Button>
	</ModalFooter>
</Modal>
