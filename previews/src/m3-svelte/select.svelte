<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Select wraps a native <select>; SelectOutlined is the outlined variant.
  Docs: https://kendell.dev/m3-svelte/#select-demo
-->
<script lang="ts">
	import './styles.css'
	import { Select, SelectOutlined } from 'm3-svelte'

	const options = [
		{ text: 'Apple', value: 'apple' },
		{ text: 'Banana', value: 'banana' },
		{ text: 'Cherry', value: 'cherry' },
	]
	let fruit = $state('apple')
	let other = $state('cherry')
</script>

<Select label="Fruit" {options} bind:value={fruit} />
<p>Picked: {fruit}</p>
<SelectOutlined label="Another fruit" {options} bind:value={other} />
<p>Picked: {other}</p>
