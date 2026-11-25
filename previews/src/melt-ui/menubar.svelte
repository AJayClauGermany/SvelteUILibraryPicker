<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/menubar
-->
<script lang="ts">
	import { createMenubar } from '@melt-ui/svelte'

	const {
		elements: { menubar },
		builders: { createMenu },
	} = createMenubar()

	const {
		elements: { trigger: fileTrigger, menu: fileMenu, item: fileItem },
	} = createMenu()

	const {
		elements: { trigger: editTrigger, menu: editMenu, item: editItem },
	} = createMenu()
</script>

<div {...$menubar} use:menubar>
	<button {...$fileTrigger} use:fileTrigger>File</button>
	<div {...$fileMenu} use:fileMenu>
		<div {...$fileItem} use:fileItem>New file</div>
		<div {...$fileItem} use:fileItem>Open…</div>
	</div>

	<button {...$editTrigger} use:editTrigger>Edit</button>
	<div {...$editMenu} use:editMenu>
		<div {...$editItem} use:editItem>Undo</div>
		<div {...$editItem} use:editItem>Redo</div>
	</div>
</div>
