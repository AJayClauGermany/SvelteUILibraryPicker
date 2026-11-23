<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/progress
-->
<script lang="ts">
	import { Progress } from 'bits-ui'

	const uploaded = 40
</script>

<span id="upload-label">Uploading</span>
<Progress.Root value={uploaded} max={100} aria-labelledby="upload-label">
	{uploaded}% complete
</Progress.Root>
