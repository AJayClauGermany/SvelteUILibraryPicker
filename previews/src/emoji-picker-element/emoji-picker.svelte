<!--
  emoji-picker-element styles itself inside its Shadow DOM (no CSS to import); its light/dark
  look is picked with the documented `light` / `dark` class on the element, set from the site's
  mode. dataSource points at the locally installed emoji-picker-element-data JSON (a Vite ?url
  import) instead of the default jsDelivr CDN, so nothing is fetched from another host. No styles of ours.
  Docs: https://github.com/nolanlawson/emoji-picker-element#readme
-->
<script lang="ts">
	import 'emoji-picker-element'
	import type { EmojiClickEvent } from 'emoji-picker-element/shared'
	import dataSource from 'emoji-picker-element-data/en/emojibase/data.json?url'
	import { theme } from '../../theme.svelte.ts'

	let picked = $state('')
</script>

<p>Picked: {picked || 'nothing yet'}</p>
<emoji-picker
	class={theme.current}
	data-source={dataSource}
	onemoji-click={(event: EmojiClickEvent) => (picked = event.detail.unicode ?? event.detail.name ?? '')}
></emoji-picker>
