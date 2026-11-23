<!--
  Skeleton's alert dialog is Tailwind classes (`dialog` + a preset) on the native <dialog>
  element with role="alertdialog", which IS its default. ./styles.css loads the cerberus
  theme; the buttons use Skeleton's `btn` classes and the footer layout is Tailwind.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/dialogs#alert-dialog
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let dialog: HTMLDialogElement | undefined = $state()
</script>

<button type="button" class="btn preset-filled" onclick={() => dialog?.showModal()}>Delete file</button>

<dialog
	bind:this={dialog}
	class="dialog animate-dialog preset-filled-surface-100-900"
	role="alertdialog"
	aria-labelledby="alert-title"
	aria-describedby="alert-text"
>
	<header>
		<h2 id="alert-title" class="h4">Delete this file?</h2>
	</header>
	<article>
		<p id="alert-text">This cannot be undone.</p>
	</article>
	<footer class="flex justify-end gap-2">
		<button type="button" class="btn preset-tonal" onclick={() => dialog?.close()}>Cancel</button>
		<button type="button" class="btn preset-filled-error-500" onclick={() => dialog?.close()}>Delete</button>
	</footer>
</dialog>
