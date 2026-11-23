<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The popover opens from the element placed right before it; `trigger="click"` swaps the
  default hover trigger for a click.
  Docs: https://flowbite-svelte.com/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import { Button, Popover } from 'flowbite-svelte'
</script>

<Button>Show details</Button>
<Popover title="Details" trigger="click" placement="bottom">A short note shown in a popover.</Popover>
