<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/emoji-picker
-->
<script lang="ts">
	import './styles.css'
	import * as EmojiPicker from './components/ui/emoji-picker/index.js'

	let picked = $state('')
</script>

<p>Picked: {picked || 'nothing yet'}</p>
<EmojiPicker.Root onSelect={e => (picked = e.emoji)}>
	<EmojiPicker.Viewport>
		<EmojiPicker.Search placeholder="Find an emoji" />
		<EmojiPicker.List />
		<EmojiPicker.Footer>
			{#snippet children({ active })}
				{active ? `${active.emoji} ${active.data.name}` : 'Hover an emoji'}
			{/snippet}
		</EmojiPicker.Footer>
	</EmojiPicker.Viewport>
</EmojiPicker.Root>
