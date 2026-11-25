<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Melt UI calls this builder Link Preview. Hover the link to open it.
  Docs: https://melt-ui.com/docs/builders/link-preview
-->
<script lang="ts">
	import { createLinkPreview } from '@melt-ui/svelte'

	const {
		elements: { trigger, content },
	} = createLinkPreview()
</script>

<a {...$trigger} use:trigger href="#profile">@example</a>

<div {...$content} use:content>
	<p>Example account</p>
	<p>A short bio shown when you hover the link.</p>
</div>
