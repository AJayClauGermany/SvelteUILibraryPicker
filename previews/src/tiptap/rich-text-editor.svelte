<!--
  Tiptap is headless: it ships the editing engine and no styles or toolbar. This preview is an
  unstyled editable area with two plain buttons on purpose; that IS its default look.
  Docs: https://tiptap.dev/docs/editor/getting-started/install/svelte
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Editor } from '@tiptap/core'
	import { StarterKit } from '@tiptap/starter-kit'

	let element = $state<HTMLDivElement>()
	let editorState = $state<{ editor: Editor | null }>({ editor: null })

	onMount(() => {
		const editor = new Editor({
			element,
			extensions: [StarterKit],
			content: '<p>Write a <strong>short</strong> note about your <em>week</em> here.</p>',
			// A new object on each transaction so the buttons below re-render.
			onTransaction: ({ editor }) => (editorState = { editor }),
		})
		editorState = { editor }
		return () => editor.destroy()
	})
</script>

{#if editorState.editor}
	{@const editor = editorState.editor}
	<button
		aria-pressed={editor.isActive('bold')}
		onclick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
	<button
		aria-pressed={editor.isActive('italic')}
		onclick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
{/if}
<div bind:this={element}></div>
