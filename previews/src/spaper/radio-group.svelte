<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Single Radio components bound to one shared group value (there is no group wrapper).
  Docs: https://oli8.github.io/spaper/components/Radio
-->
<script lang="ts">
	import './styles.css'
	import { Radio } from 'spaper'

	let delivery = $state('standard')
</script>

<Radio name="delivery" label="Standard" value="standard" bind:group={delivery} />
<Radio name="delivery" label="Express" value="express" bind:group={delivery} />
<Radio name="delivery" label="Pick up in store" value="pickup" bind:group={delivery} />
