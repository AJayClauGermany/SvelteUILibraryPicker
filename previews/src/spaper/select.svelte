<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Select
-->
<script lang="ts">
	import './styles.css'
	import { Select } from 'spaper'

	let size = $state('m')
</script>

<Select label="Size" bind:value={size}>
	<option value="s">Small</option>
	<option value="m">Medium</option>
	<option value="l">Large</option>
</Select>
