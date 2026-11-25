<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  In dark mode this field stays white: see the note on the guide's base styles in ./styles.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/select/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Label, Select } from 'svelte-5-ui-lib'

	const countries = [
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' },
		{ value: 'jp', name: 'Japan' },
	]
	let country = $state('')
</script>

<Label for="country">Country</Label>
<Select id="country" items={countries} bind:value={country} />
