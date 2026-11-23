<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/combobox
-->
<script lang="ts">
	import './styles.css'
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down'
	import { tick } from 'svelte'
	import * as Command from './ui/command/index.js'
	import * as Popover from './ui/popover/index.js'
	import { Button } from './ui/button/index.js'

	const cities = ['Amsterdam', 'Berlin', 'Lisbon', 'Oslo', 'Vienna']
	let open = $state(false)
	let value = $state('')
	let trigger = $state<HTMLButtonElement>(null!)

	function choose(city: string) {
		value = city
		open = false
		tick().then(() => trigger.focus())
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={trigger}>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				class="w-[200px] justify-between font-normal"
				role="combobox"
				aria-expanded={open}
			>
				{value || 'Select a city'}
				<ChevronDownIcon class="text-muted-foreground" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-[200px] p-0">
		<Command.Root>
			<Command.Input placeholder="Search cities..." />
			<Command.List>
				<Command.Empty>No city found.</Command.Empty>
				<Command.Group>
					{#each cities as city (city)}
						<Command.Item value={city} data-checked={value === city} onSelect={() => choose(city)}>
							{city}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
