<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The popover attaches to the element its `triggeredBy` selector names and opens on hover.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/popover/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Popover } from 'svelte-5-ui-lib'
</script>

<Button id="details">Show details</Button>
<Popover triggeredBy="#details" titleSlot="Details" position="bottom-start">A short note shown in a popover.</Popover>
