<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/otp-field
-->
<script lang="ts">
	import './styles.css'
	import { OTPField, OTPFieldInput, OTPFieldSeparator } from './ui/otp-field/index.ts'

	let value = $state('')
</script>

<OTPField aria-label="Sign-in code" maxlength={6} bind:value>
	{#snippet children({ cells })}
		{#each cells.slice(0, 3) as cell, i (i)}
			<OTPFieldInput aria-label={`Digit ${i + 1} of 6`} {cell} />
		{/each}
		<OTPFieldSeparator />
		{#each cells.slice(3) as cell, i (i)}
			<OTPFieldInput aria-label={`Digit ${i + 4} of 6`} {cell} />
		{/each}
	{/snippet}
</OTPField>
