<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Each radio is a button with role="radio"; the marks inside are plain text.
  Docs: https://melt-ui.com/docs/builders/radio-group
-->
<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte'

	const sizes = ['Small', 'Medium', 'Large']

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
	} = createRadioGroup({ defaultValue: 'Medium' })
</script>

<div {...$root} use:root aria-label="Size">
	{#each sizes as size (size)}
		<div>
			<button {...$item(size)} use:item id="size-{size}">{$isChecked(size) ? '◉' : '○'}</button>
			<label for="size-{size}">{size}</label>
		</div>
	{/each}
	<input {...$hiddenInput} use:hiddenInput name="size" />
</div>
