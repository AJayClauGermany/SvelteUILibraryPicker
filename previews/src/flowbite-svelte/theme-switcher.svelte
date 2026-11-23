<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  DarkMode is a button that toggles the `dark` class on <html>.
  Docs: https://flowbite-svelte.com/docs/components/darkmode
-->
<script lang="ts">
	import './styles.css'
	import { DarkMode } from 'flowbite-svelte'
</script>

<DarkMode />
