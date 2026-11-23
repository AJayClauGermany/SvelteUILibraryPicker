<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/label
-->
<script lang="ts">
	import { Label } from 'bits-ui'
</script>

<Label.Root for="email">Email address</Label.Root>
<input id="email" type="email" placeholder="you@example.com" />
