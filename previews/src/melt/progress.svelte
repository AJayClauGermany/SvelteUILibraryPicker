<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. Here the root is spread on a native
  <progress>, so what you see is the browser's default bar. Intentionally unstyled.
  Docs: https://next.melt-ui.com/components/progress
-->
<script lang="ts">
	import { Progress } from 'melt/builders'

	const progress = new Progress({ value: 40 })
</script>

<progress {...progress.root}></progress>
<p>{progress.value}%</p>
<button onclick={() => (progress.value = Math.min(progress.max, progress.value + 10))}>
	Add 10%
</button>
