<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The root only carries the progressbar role and values; the text inside is ours to write.
  Docs: https://melt-ui.com/docs/builders/progress
-->
<script lang="ts">
	import { createProgress } from '@melt-ui/svelte'

	const {
		elements: { root },
		states: { value },
	} = createProgress({ defaultValue: 40, max: 100 })
</script>

<div {...$root} use:root aria-label="Upload">{$value}% uploaded</div>
<button onclick={() => value.update(v => Math.min(100, (v ?? 0) + 10))}>Add 10%</button>
