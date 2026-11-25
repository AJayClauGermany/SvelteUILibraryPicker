<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The dialog is called Modal; uiHelpers() holds its open state, as in the docs.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/modal/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Modal, uiHelpers } from 'svelte-5-ui-lib'

	const modal = uiHelpers()
</script>

<Button onclick={modal.open}>Open dialog</Button>

<Modal title="Example dialog" modalStatus={modal.isOpen} closeModal={modal.close}>
	<p>A short message inside the dialog.</p>
	{#snippet footer()}
		<Button onclick={modal.close}>Close</Button>
	{/snippet}
</Modal>
