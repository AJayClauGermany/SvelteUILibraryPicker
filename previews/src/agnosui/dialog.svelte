<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. AgnosUI has no button, so the buttons use Bootstrap's btn classes, as
  its docs do. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/modal/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Modal } from '@agnos-ui/svelte-bootstrap/components/modal'

	let visible = $state(false)
</script>

<button class="btn btn-primary" type="button" onclick={() => (visible = true)}>Delete file</button>

<Modal bind:visible title="Delete report.pdf?">
	The file will be moved to the trash.
	{#snippet footer()}
		<button class="btn btn-secondary" type="button" onclick={() => (visible = false)}>Cancel</button>
		<button class="btn btn-danger" type="button" onclick={() => (visible = false)}>Delete</button>
	{/snippet}
</Modal>
