<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/modal
-->
<script lang="ts">
	import './styles.css'
	import { Button, Modal } from 'kampsy-ui'

	let active = $state(false)
</script>

<Button onclick={() => (active = true)}>Open modal</Button>
<Modal.Root bind:active>
	<Modal.Content>
		<Modal.Body>
			<Modal.Header>
				<Modal.Title>Rename project</Modal.Title>
				<Modal.Subtitle>The new name shows up everywhere the project is listed.</Modal.Subtitle>
			</Modal.Header>
			<p>Changes apply right away.</p>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onclick={() => (active = false)}>Cancel</Button>
			<Button onclick={() => (active = false)}>Save</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
