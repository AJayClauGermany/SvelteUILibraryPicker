<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/modal
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Modal } from '@winkintel/bootstrap-svelte'

	let open = $state(false)
</script>

<Button colorVariant="primary" onclick={() => (open = true)}>Delete file</Button>

<Modal.Root isShown={open} onHide={() => (open = false)}>
	<Modal.Dialog>
		<Modal.Content>
			<Modal.Header>
				<Modal.Title>Delete report.pdf?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>The file will be moved to the trash.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button colorVariant="secondary" onclick={() => (open = false)}>Cancel</Button>
				<Button colorVariant="danger" onclick={() => (open = false)}>Delete</Button>
			</Modal.Footer>
		</Modal.Content>
	</Modal.Dialog>
</Modal.Root>
