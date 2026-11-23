<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/radio-group
-->
<script lang="ts">
	import { Label, RadioGroup } from 'bits-ui'

	const sizes = ['Small', 'Medium', 'Large']

	let value = $state('Medium')
</script>

<RadioGroup.Root bind:value>
	{#each sizes as size (size)}
		<div>
			<RadioGroup.Item id="size-{size}" value={size}>
				{#snippet children({ checked })}
					{checked ? '(x)' : '( )'}
				{/snippet}
			</RadioGroup.Item>
			<Label.Root for="size-{size}">{size}</Label.Root>
		</div>
	{/each}
</RadioGroup.Root>
