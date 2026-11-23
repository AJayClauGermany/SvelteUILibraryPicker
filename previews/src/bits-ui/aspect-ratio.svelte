<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/aspect-ratio
-->
<script lang="ts">
	import { AspectRatio } from 'bits-ui'
</script>

<AspectRatio.Root ratio={16 / 9}>
	This box keeps a 16:9 ratio as its width changes.
</AspectRatio.Root>
