<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/select
-->
<script lang="ts">
	import { Select } from 'bits-ui'

	const themes = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'system', label: 'System' },
	]

	let value = $state('')
	const label = $derived(themes.find((theme) => theme.value === value)?.label ?? 'Pick a theme')
</script>

<Select.Root type="single" bind:value items={themes}>
	<Select.Trigger>{label}</Select.Trigger>
	<Select.Portal>
		<Select.Content sideOffset={4}>
			{#each themes as theme (theme.value)}
				<Select.Item value={theme.value} label={theme.label}>
					{#snippet children({ selected })}
						{theme.label}{selected ? ' (selected)' : ''}
					{/snippet}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Portal>
</Select.Root>
