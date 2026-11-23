<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/kbd
-->
<script lang="ts">
	import './styles.css'
	import * as Kbd from './ui/kbd/index.js'
</script>

<p class="text-sm">
	Press
	<Kbd.Group>
		<Kbd.Root>Ctrl</Kbd.Root>
		<span>+</span>
		<Kbd.Root>K</Kbd.Root>
	</Kbd.Group>
	to search.
</p>
