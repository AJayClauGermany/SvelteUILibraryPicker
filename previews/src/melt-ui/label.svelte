<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/label
-->
<script lang="ts">
	import { createLabel } from '@melt-ui/svelte'

	const {
		elements: { root },
	} = createLabel()
</script>

<label {...$root} use:root for="email">Email address</label>
<input id="email" type="email" placeholder="you@example.com" />
