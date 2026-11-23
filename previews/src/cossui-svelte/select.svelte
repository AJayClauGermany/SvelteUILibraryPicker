<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/select
-->
<script lang="ts">
	import './styles.css'
	import { Select, SelectItem, SelectPopup, SelectTrigger } from './ui/select/index.ts'

	const fruits = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Cherry', value: 'cherry' },
	]

	let fruit = $state('apple')
	const fruitLabel = $derived(fruits.find((f) => f.value === fruit)?.label)
</script>

<Select bind:value={fruit} items={fruits}>
	<SelectTrigger aria-label="Choose a fruit">
		<span class="flex-1 truncate">{fruitLabel}</span>
	</SelectTrigger>
	<SelectPopup>
		{#each fruits as item (item.value)}
			<SelectItem value={item.value}>{item.label}</SelectItem>
		{/each}
	</SelectPopup>
</Select>
