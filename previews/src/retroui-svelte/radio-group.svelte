<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/radio-group
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.js'
	import * as RadioGroup from './ui/radio-group/index.js'
</script>

<RadioGroup.Root value="monthly">
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="monthly" id="monthly" />
		<Label for="monthly">Monthly</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="yearly" id="yearly" />
		<Label for="yearly">Yearly</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="never" id="never" disabled />
		<Label for="never">Never</Label>
	</div>
</RadioGroup.Root>
