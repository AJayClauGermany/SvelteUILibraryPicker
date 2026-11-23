<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/form-input--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Input, Label } from '@sveltestrap/sveltestrap'

	let volume = $state(40)
</script>

<Label for="volume">Volume: {volume}</Label>
<Input id="volume" type="range" min={0} max={100} bind:value={volume} />
