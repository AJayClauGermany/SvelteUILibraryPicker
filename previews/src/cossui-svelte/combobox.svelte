<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/combobox
-->
<script lang="ts">
	import './styles.css'
	import {
		Combobox,
		ComboboxCollection,
		ComboboxEmpty,
		ComboboxInput,
		ComboboxItem,
		ComboboxList,
		ComboboxPopup,
	} from './ui/combobox/index.ts'

	const items = [
		{ value: 'lisbon', label: 'Lisbon' },
		{ value: 'oslo', label: 'Oslo' },
		{ value: 'prague', label: 'Prague' },
		{ value: 'vienna', label: 'Vienna' },
	]

	let value = $state<string | undefined>()
</script>

<Combobox {items} bind:value>
	<ComboboxInput placeholder="Pick a city..." />
	<ComboboxPopup>
		<ComboboxEmpty>No city matches.</ComboboxEmpty>
		<ComboboxList>
			<ComboboxCollection>
				{#snippet children(item: { value: string; label: string })}
					<ComboboxItem value={item.value} label={item.label}>{item.label}</ComboboxItem>
				{/snippet}
			</ComboboxCollection>
		</ComboboxList>
	</ComboboxPopup>
</Combobox>
