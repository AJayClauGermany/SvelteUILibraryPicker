<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/label
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.js'
	import { Label } from './ui/label/index.js'
</script>

<div class="flex gap-2">
	<Checkbox id="newsletter" />
	<Label for="newsletter">Send me the monthly newsletter</Label>
</div>
