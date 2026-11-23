<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/form-input--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Input, Label } from '@sveltestrap/sveltestrap'

	let fruit = $state('apple')
</script>

<Label for="fruit">Fruit</Label>
<Input id="fruit" type="select" bind:value={fruit}>
	<option value="apple">Apple</option>
	<option value="banana">Banana</option>
	<option value="cherry">Cherry</option>
</Input>
