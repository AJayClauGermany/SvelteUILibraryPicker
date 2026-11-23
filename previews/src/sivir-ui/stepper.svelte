<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/task-steps
-->
<script lang="ts">
	import './styles.css'
	import { type TaskStep, TaskSteps } from '@sivir-ui/svelte/components/task-steps'

	const steps: TaskStep[] = [
		{ id: 'fetch', label: 'Fetching sources', meta: '1.2s' },
		{ id: 'check', label: 'Checking types', meta: '3.4s' },
		{ id: 'build', label: 'Building pages' },
		{ id: 'upload', label: 'Uploading files' }
	]
</script>

<div class="w-full max-w-sm">
	<TaskSteps {steps} current={2} label="Release progress" />
</div>
