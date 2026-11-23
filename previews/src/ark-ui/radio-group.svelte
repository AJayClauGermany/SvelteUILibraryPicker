<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/radio-group
-->
<script lang="ts">
	import { RadioGroup } from '@ark-ui/svelte/radio-group'

	const sizes = ['Small', 'Medium', 'Large']
	let value = $state<string | null>('Medium')
</script>

<RadioGroup.Root bind:value>
	<RadioGroup.Label>Size</RadioGroup.Label>
	{#each sizes as size (size)}
		<RadioGroup.Item value={size}>
			<RadioGroup.ItemControl />
			<RadioGroup.ItemText>{size}</RadioGroup.ItemText>
			<RadioGroup.ItemHiddenInput />
		</RadioGroup.Item>
	{/each}
</RadioGroup.Root>
<p>Selected: {value}</p>
