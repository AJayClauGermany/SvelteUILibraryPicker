<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/select
-->
<script lang="ts">
	import './styles.css'
	import * as Select from './ui/select/index.js'

	const sizes = [
		{ value: 's', label: 'Small' },
		{ value: 'm', label: 'Medium' },
		{ value: 'l', label: 'Large' }
	]
</script>

<Select.Root type="single" items={sizes}>
	<Select.Trigger class="w-[180px]">
		<Select.Value placeholder="Pick a size" />
	</Select.Trigger>
	<Select.Content>
		{#each sizes as size (size.value)}
			<Select.Item value={size.value} label={size.label} />
		{/each}
	</Select.Content>
</Select.Root>
