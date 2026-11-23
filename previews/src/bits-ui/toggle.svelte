<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/toggle
-->
<script lang="ts">
	import { Toggle } from 'bits-ui'

	let pressed = $state(false)
</script>

<Toggle.Root bind:pressed aria-label="Toggle bold">
	Bold ({pressed ? 'on' : 'off'})
</Toggle.Root>
