<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from './ui/progress/index.js'
</script>

<div class="max-w-sm">
	<Progress value={60} />
</div>
