<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'spaper'

	let toppings = $state(['cheese'])
</script>

<Checkbox label="Cheese" value="cheese" bind:group={toppings} />
<Checkbox label="Olives" value="olives" bind:group={toppings} />
<Checkbox label="Peppers" value="peppers" bind:group={toppings} disabled />
