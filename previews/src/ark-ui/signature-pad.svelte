<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the drawing area has no size or border, so there is little to see.
  Docs: https://ark-ui.com/svelte/docs/components/signature-pad
-->
<script lang="ts">
	import { SignaturePad } from '@ark-ui/svelte/signature-pad'
</script>

<SignaturePad.Root>
	<SignaturePad.Label>Sign here</SignaturePad.Label>
	<SignaturePad.Control>
		<SignaturePad.Segment />
		<SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
		<SignaturePad.Guide />
	</SignaturePad.Control>
</SignaturePad.Root>
