<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/confirm-delete-dialog
-->
<script lang="ts">
	import './styles.css'
	import Button from './components/button.svelte'
	import { ConfirmDeleteDialog, confirmDelete } from './components/ui/confirm-delete-dialog/index.js'
</script>

<ConfirmDeleteDialog />

<Button
	variant="destructive"
	onclick={() =>
		confirmDelete({
			title: 'Delete project',
			description: 'This removes the project and all of its files.',
			onConfirm: async () => {}
		})}
>
	Delete project
</Button>
