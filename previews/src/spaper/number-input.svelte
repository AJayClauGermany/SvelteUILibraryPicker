<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/NumberInput
-->
<script lang="ts">
	import './styles.css'
	import { NumberInput } from 'spaper'

	let guests = $state(2)
</script>

<NumberInput label="Guests" bind:value={guests} min={1} max={8} />
