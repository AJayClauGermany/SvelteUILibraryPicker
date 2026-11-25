<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The slider is called Range.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/range/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Label, Range } from 'svelte-5-ui-lib'

	let volume = $state(40)
</script>

<Label for="volume">Volume: {volume}</Label>
<Range id="volume" min="0" max="100" bind:value={volume} />
