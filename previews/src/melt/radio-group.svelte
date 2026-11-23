<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/radio-group
-->
<script lang="ts">
	import { RadioGroup } from 'melt/builders'

	const sizes = ['Small', 'Medium', 'Large']

	const group = new RadioGroup({ value: 'Medium' })
</script>

<label {...group.label}>Size</label>
<div {...group.root}>
	{#each sizes as size (size)}
		{@const item = group.getItem(size)}
		<div {...item.attrs}>{item.checked ? '(x)' : '( )'} {size}</div>
	{/each}
</div>
<input {...group.hiddenInput} />
<p>Selected: {group.value}</p>
