<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/radio-group
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.ts'
	import * as RadioGroup from './ui/radio-group/index.ts'

	let value = $state('standard')
</script>

<RadioGroup.Root bind:value>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="standard" id="standard" />
		<Label for="standard">Standard shipping</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="express" id="express" />
		<Label for="express">Express shipping</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="pickup" id="pickup" disabled />
		<Label for="pickup">Store pickup</Label>
	</div>
</RadioGroup.Root>
