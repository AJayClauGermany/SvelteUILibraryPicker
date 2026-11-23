<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/button-group
-->
<script lang="ts">
	import './styles.css'
	import * as ButtonGroup from './ui/button-group/index.js'
	import { Button } from './ui/button/index.js'
</script>

<ButtonGroup.Root>
	<Button variant="outline">Day</Button>
	<Button variant="outline">Week</Button>
	<Button variant="outline">Month</Button>
</ButtonGroup.Root>
