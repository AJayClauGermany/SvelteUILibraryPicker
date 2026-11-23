<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/clipboard
-->
<script lang="ts">
	import './styles.css'
	import { Clipboard, Input } from 'flowbite-svelte'

	let value = $state('npm install flowbite-svelte')
	let success = $state(false)
</script>

<Input bind:value readonly />
<Clipboard bind:value bind:success>
	{success ? 'Copied' : 'Copy'}
</Clipboard>
