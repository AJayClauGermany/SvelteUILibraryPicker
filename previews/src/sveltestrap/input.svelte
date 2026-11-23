<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/form-input--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Input, Label } from '@sveltestrap/sveltestrap'

	let email = $state('')
</script>

<Label for="email">Email</Label>
<Input id="email" type="email" placeholder="name@example.com" bind:value={email} />
