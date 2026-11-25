<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. It has a Bits UI-based Select
  and a styled native select; both are shown.
  Docs: https://originui-svelte.pages.dev/selects
-->
<script lang="ts">
	import './styles.css'
	import * as Select from './ui/select/index.js'
	import SelectNative from './ui/select-native.svelte'

	const sizes = [
		{ value: 's', label: 'Small' },
		{ value: 'm', label: 'Medium' },
		{ value: 'l', label: 'Large' },
	]
	let size = $state('')
	const selected = $derived(sizes.find(s => s.value === size)?.label)
</script>

<div class="flex flex-col gap-2">
	<Select.Root type="single" items={sizes} bind:value={size}>
		<Select.Trigger>{selected ?? 'Pick a size'}</Select.Trigger>
		<Select.Content>
			{#each sizes as s (s.value)}
				<Select.Item value={s.value} label={s.label} />
			{/each}
		</Select.Content>
	</Select.Root>

	<SelectNative>
		<option value="s">Small</option>
		<option value="m">Medium</option>
		<option value="l">Large</option>
	</SelectNative>
</div>
