<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/radio-group
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.js'
	import * as RadioGroup from './ui/radio-group/index.js'
</script>

<RadioGroup.Root value="standard">
	<div class="flex items-center gap-3">
		<RadioGroup.Item value="standard" id="standard" />
		<Label for="standard">Standard delivery</Label>
	</div>
	<div class="flex items-center gap-3">
		<RadioGroup.Item value="express" id="express" />
		<Label for="express">Express delivery</Label>
	</div>
	<div class="flex items-center gap-3">
		<RadioGroup.Item value="pickup" id="pickup" disabled />
		<Label for="pickup">Store pickup</Label>
	</div>
</RadioGroup.Root>
