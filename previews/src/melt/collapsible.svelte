<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/collapsible
-->
<script lang="ts">
	import { Collapsible } from 'melt/builders'

	const collapsible = new Collapsible()
</script>

<button {...collapsible.trigger}>
	{collapsible.open ? 'Hide' : 'Show'} details
</button>
{#if collapsible.open}
	<div {...collapsible.content}>Extra details that can be shown or hidden.</div>
{/if}
