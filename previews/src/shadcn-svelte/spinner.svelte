<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/spinner
-->
<script lang="ts">
	import './styles.css'
	import { Spinner } from './ui/spinner/index.js'
	import { Button } from './ui/button/index.js'
</script>

<div class="flex items-center gap-4">
	<Spinner />
	<Button disabled>
		<Spinner />
		Saving
	</Button>
</div>
