<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.js'
</script>

<div class="grid max-w-sm gap-4">
	<Input placeholder="Search" />
	<Input type="email" value="ada@example.com" />
	<Input placeholder="Disabled" disabled />
</div>
