<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Textarea } from './ui/textarea/index.js'
</script>

<div class="grid max-w-sm gap-4">
	<Textarea placeholder="Write a short note" />
	<Textarea placeholder="Disabled" disabled />
</div>
