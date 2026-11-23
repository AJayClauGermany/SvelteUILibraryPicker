<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/number-field
-->
<script lang="ts">
	import './styles.css'
	import {
		NumberField,
		NumberFieldDecrement,
		NumberFieldGroup,
		NumberFieldIncrement,
		NumberFieldInput,
		NumberFieldScrubArea,
	} from './ui/number-field/index.ts'

	let value = $state(2)
</script>

<NumberField bind:value min={0} max={10}>
	<NumberFieldScrubArea label="Guests" />
	<NumberFieldGroup>
		<NumberFieldDecrement />
		<NumberFieldInput />
		<NumberFieldIncrement />
	</NumberFieldGroup>
</NumberField>
