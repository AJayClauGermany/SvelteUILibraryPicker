<!--
  svelte-tiptap is headless: Svelte components around Tiptap with no styles or menu markup. This
  preview is an unstyled editable area plus a BubbleMenu (two plain buttons) that appears when you
  select text; that IS its default look.
  Docs: https://github.com/sibiraj-s/svelte-tiptap#readme
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import type { Readable } from 'svelte/store'
	import { createEditor, EditorContent, BubbleMenu, type Editor } from 'svelte-tiptap'
	import { StarterKit } from '@tiptap/starter-kit'

	let editor = $state<Readable<Editor>>()

	onMount(() => {
		editor = createEditor({
			extensions: [StarterKit],
			content: '<p>Select a few words in this <strong>shopping</strong> list to open the menu.</p><ul><li><p>Apples</p></li><li><p>Bread</p></li></ul>',
		})
	})
</script>

{#if $editor}
	<EditorContent editor={$editor} />
	<BubbleMenu editor={$editor}>
		<button
			aria-pressed={$editor.isActive('bold')}
			onclick={() => $editor.chain().focus().toggleBold().run()}>Bold</button>
		<button
			aria-pressed={$editor.isActive('italic')}
			onclick={() => $editor.chain().focus().toggleItalic().run()}>Italic</button>
	</BubbleMenu>
{/if}
