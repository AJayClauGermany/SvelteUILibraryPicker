<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Single Radio inputs grouped with `bind:group`, as the docs do.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/radio/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Radio } from 'svelte-5-ui-lib'

	let plan = $state('monthly')
</script>

<Radio name="plan" value="monthly" bind:group={plan}>Monthly</Radio>
<Radio name="plan" value="yearly" bind:group={plan}>Yearly</Radio>
<Radio name="plan" value="lifetime" bind:group={plan} disabled>Lifetime</Radio>
