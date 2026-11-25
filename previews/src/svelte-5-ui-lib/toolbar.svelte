<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Toolbar has no docs page of its own; it appears in the textarea examples, so it is shown in a Textarea header here.
  In dark mode this field stays white: see the note on the guide's base styles in ./styles.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/textarea/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Textarea, Toolbar, ToolbarButton, ToolbarGroup } from 'svelte-5-ui-lib'

	// Simple inline icons (the docs use a separate icon package).
	const icons = {
		Bold: 'M7 4h6a4 4 0 0 1 2.7 7A4.5 4.5 0 0 1 14 20H7zm3 3v3h3a1.5 1.5 0 0 0 0-3zm0 6v4h4a2 2 0 0 0 0-4z',
		Italic: 'M10 4h8v3h-2.6l-3 10H15v3H7v-3h2.6l3-10H10z',
		Link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 1.4 1.4 1-1a2 2 0 1 1 2.9 2.9l-3 3a2 2 0 0 1-2.9 0zm4-4a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1-1.4-1.4-1 1A2 2 0 1 1 6.7 14.4l3-3a2 2 0 0 1 2.9 0z',
	}
</script>

<Textarea rows={3} placeholder="Write a comment">
	{#snippet header()}
		<Toolbar embedded>
			<ToolbarGroup>
				{#each Object.entries(icons) as [name, d] (name)}
					<ToolbarButton {name}>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path {d} /></svg>
					</ToolbarButton>
				{/each}
			</ToolbarGroup>
		</Toolbar>
	{/snippet}
</Textarea>
