<!--
  Melt UI (next-gen) is headless: it drives a native <dialog> element and ships no
  styles, so what you see is the browser's default dialog. Intentionally unstyled.
  Docs: https://next.melt-ui.com/components/dialog
-->
<script lang="ts">
	import { Dialog } from 'melt/builders'

	const dialog = new Dialog()
</script>

<button {...dialog.trigger}>Open dialog</button>

<dialog {...dialog.content}>
	<h2>Example dialog</h2>
	<p>A short message inside the dialog.</p>
	<button onclick={() => (dialog.open = false)}>Close</button>
</dialog>
