<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/field#textarea
-->
<script lang="ts">
	import { Field } from '@ark-ui/svelte/field'
</script>

<Field.Root>
	<Field.Label>Feedback</Field.Label>
	<Field.Textarea placeholder="Type a few lines…" autoresize />
	<Field.HelperText>Auto-resizes to fit its content.</Field.HelperText>
</Field.Root>
