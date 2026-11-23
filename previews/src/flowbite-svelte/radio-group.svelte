<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Flowbite Svelte has no group component; each Radio binds the same variable to `group`.
  Docs: https://flowbite-svelte.com/docs/forms/radio
-->
<script lang="ts">
	import './styles.css'
	import { Radio } from 'flowbite-svelte'

	let plan = $state('monthly')
</script>

<Radio name="plan" value="monthly" bind:group={plan}>Monthly</Radio>
<Radio name="plan" value="yearly" bind:group={plan}>Yearly</Radio>
<Radio name="plan" value="lifetime" bind:group={plan} disabled>Lifetime (unavailable)</Radio>
<p>Selected: {plan}</p>
