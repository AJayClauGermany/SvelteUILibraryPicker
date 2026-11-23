<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/button-group
-->
<script lang="ts">
	import './styles.css'
	import { Button, ButtonGroup } from 'flowbite-svelte'
</script>

<ButtonGroup>
	<Button>Day</Button>
	<Button>Week</Button>
	<Button>Month</Button>
</ButtonGroup>
