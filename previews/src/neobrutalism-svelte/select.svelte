<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/select
-->
<script lang="ts">
	import './styles.css'
	import * as Select from './ui/select/index.ts'

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
	]

	let value = $state('')
	const selected = $derived(fruits.find((f) => f.value === value)?.label ?? 'Pick a fruit')
</script>

<Select.Root type="single" bind:value>
	<Select.Trigger class="w-[180px]">{selected}</Select.Trigger>
	<Select.Content>
		{#each fruits as fruit (fruit.value)}
			<Select.Item value={fruit.value} label={fruit.label} />
		{/each}
	</Select.Content>
</Select.Root>
