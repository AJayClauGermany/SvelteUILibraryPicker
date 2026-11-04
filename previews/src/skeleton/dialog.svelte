<!--
  Skeleton documents its Dialog as the one component that ships "headless" (no default
  styles), and dresses it with Skeleton's own Tailwind classes (`btn`, `card`, presets and
  surface colours). This preview does the same with the minimum needed to show a dialog.
  ./styles.css loads the cerberus theme; the script sets the install guide's data-theme.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/dialog
-->
<script lang="ts">
	import './styles.css'
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Open dialog</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 bg-surface-50-950/50" />
		<Dialog.Positioner class="fixed inset-0 flex items-center justify-center p-4">
			<Dialog.Content class="card bg-surface-100-900 w-full max-w-md p-4 space-y-4 shadow-xl">
				<Dialog.Title class="text-lg font-bold">Example dialog</Dialog.Title>
				<Dialog.Description>A short message inside the dialog.</Dialog.Description>
				<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
