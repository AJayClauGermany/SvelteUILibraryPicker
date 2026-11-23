<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/select
-->
<script lang="ts">
	import { Select } from 'melt/builders'

	const colors = ['Red', 'Green', 'Blue', 'Yellow']

	const select = new Select<string>()
</script>

<label {...select.label}>Color</label>
<button {...select.trigger}>{select.value ?? 'Pick a color'}</button>

<div {...select.content}>
	{#each colors as color (color)}
		<div {...select.getOption(color)}>{color}</div>
	{/each}
</div>
