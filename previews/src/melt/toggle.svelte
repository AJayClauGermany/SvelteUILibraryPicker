<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/toggle
-->
<script lang="ts">
	import { Toggle } from 'melt/builders'

	const toggle = new Toggle()
</script>

<button {...toggle.trigger}>Bold</button>
<input {...toggle.hiddenInput} />
<p>Pressed: {toggle.value}</p>
