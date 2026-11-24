<!--
  Headless: TelInput renders a bare <input type="tel"> with no styles, so the browser's own look is
  the default. The package leaves the country picker to the app, so the native <select> with three
  countries is plain markup of ours; flags.css is skipped since no flags are shown. All data is local.
  Docs: https://svelte-tel-input.vercel.app/
-->
<script lang="ts">
	import { TelInput } from 'svelte-tel-input'
	import type { CountryCode, ValidationError } from 'svelte-tel-input/types'

	const choices: [CountryCode, string][] = [
		['US', 'United States +1'],
		['GB', 'United Kingdom +44'],
		['DE', 'Germany +49'],
	]

	let country = $state<CountryCode | null>('US')
	let value = $state('+12015550123')
	let validationError = $state<ValidationError>(null)
</script>

<p>
	<label for="country">Country</label>
	<select id="country" bind:value={country}>
		{#each choices as [code, label] (code)}
			<option value={code}>{label}</option>
		{/each}
	</select>
</p>

<p>
	<label for="phone">Phone</label>
	<TelInput id="phone" bind:country bind:value bind:validationError />
</p>

<p>Stored (E.164): {value || 'nothing yet'}</p>
<p>Problem: {validationError ?? 'none'}</p>
