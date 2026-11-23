<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/select
-->
<script lang="ts">
	import './styles.css'
	import * as Select from './ui/select/index.js'

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	]

	let value = $state('')
	const label = $derived(fruits.find((f) => f.value === value)?.label ?? 'Pick a fruit')
</script>

<Select.Root type="single" bind:value>
	<Select.Trigger class="w-[180px]">{label}</Select.Trigger>
	<Select.Content>
		{#each fruits as fruit (fruit.value)}
			<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
