<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/meter
-->
<script lang="ts">
	import { Meter } from 'bits-ui'

	const used = 64
</script>

<span id="storage-label">Storage used</span>
<Meter.Root value={used} aria-labelledby="storage-label" aria-valuetext="{used}%">
	{used}% of 100
</Meter.Root>
