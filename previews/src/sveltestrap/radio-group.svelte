<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/form-input--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Input } from '@sveltestrap/sveltestrap'

	let plan = $state('basic')
</script>

<Input type="radio" name="plan" value="basic" label="Basic" bind:group={plan} />
<Input type="radio" name="plan" value="pro" label="Pro" bind:group={plan} />
<Input type="radio" name="plan" value="team" label="Team" bind:group={plan} />
