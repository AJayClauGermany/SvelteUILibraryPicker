<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Type a tag and press Enter to add it.
  Docs: https://flowbite-svelte.com/docs/extend/tags
-->
<script lang="ts">
	import './styles.css'
	import { Tags } from 'flowbite-svelte'

	let tags = $state(['svelte', 'tailwind'])
</script>

<Tags bind:value={tags} placeholder="Add a tag" />
