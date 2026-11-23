<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/combobox
-->
<script lang="ts">
	import './styles.css'
	import * as Combobox from '@sivir-ui/svelte/components/combobox'

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'mango', label: 'Mango' }
	]

	let value = $state<string | undefined>()
</script>

<div class="w-[240px]">
	<Combobox.Root bind:value>
		<Combobox.Trigger placeholder="Pick a fruit" class="w-full" />
		<Combobox.Content>
			<Combobox.Results>
				{#each fruits as fruit (fruit.value)}
					<Combobox.Item value={fruit.value} label={fruit.label} />
				{/each}
			</Combobox.Results>
		</Combobox.Content>
	</Combobox.Root>
</div>
