<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/radio-group
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.ts'
	import { Radio, RadioGroup } from './ui/radio-group/index.ts'

	let plan = $state('monthly')
</script>

<RadioGroup aria-label="Billing" bind:value={plan}>
	<Label><Radio value="monthly" /> Monthly</Label>
	<Label><Radio value="yearly" /> Yearly</Label>
	<Label><Radio value="lifetime" disabled /> Lifetime</Label>
</RadioGroup>
