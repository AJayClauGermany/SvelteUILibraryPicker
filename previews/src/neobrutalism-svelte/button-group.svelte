<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/button-group
-->
<script lang="ts">
	import './styles.css'
	import * as ButtonGroup from './ui/button-group/index.ts'
	import { Button } from './ui/button/index.ts'
</script>

<ButtonGroup.Root>
	<Button variant="outline">Day</Button>
	<Button variant="outline">Week</Button>
	<Button variant="outline">Month</Button>
</ButtonGroup.Root>
