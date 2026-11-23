<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The tooltip attaches to the element placed right before it and opens on hover.
  Docs: https://flowbite-svelte.com/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { Button, Tooltip } from 'flowbite-svelte'
</script>

<Button>Hover me</Button>
<Tooltip>A short tooltip</Tooltip>

<Button>Light tooltip</Button>
<Tooltip type="light" placement="bottom">Light style</Tooltip>
