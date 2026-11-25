<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Without styles the separator element has no size, so it takes no visible space.
  Docs: https://melt-ui.com/docs/builders/separator
-->
<script lang="ts">
	import { createSeparator } from '@melt-ui/svelte'

	const {
		elements: { root },
	} = createSeparator({ orientation: 'horizontal' })
</script>

<p>Above the separator</p>
<div {...$root} use:root></div>
<p>Below the separator</p>
