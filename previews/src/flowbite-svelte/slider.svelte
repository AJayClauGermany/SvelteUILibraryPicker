<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/range
-->
<script lang="ts">
	import './styles.css'
	import { Label, Range } from 'flowbite-svelte'

	let volume = $state(40)
</script>

<Label for="volume" class="mb-2">Volume: {volume}</Label>
<Range id="volume" min={0} max={100} bind:value={volume} />
