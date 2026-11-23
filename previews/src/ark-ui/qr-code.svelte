<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/qr-code
-->
<script lang="ts">
	import { QrCode } from '@ark-ui/svelte/qr-code'
</script>

<QrCode.Root defaultValue="https://svelte.dev">
	<QrCode.Frame>
		<QrCode.Pattern />
	</QrCode.Frame>
</QrCode.Root>
