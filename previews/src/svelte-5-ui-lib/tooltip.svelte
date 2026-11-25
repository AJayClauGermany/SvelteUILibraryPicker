<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The tooltip attaches to the element its `triggeredBy` selector names and opens on hover.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/tooltip/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Tooltip } from 'svelte-5-ui-lib'
</script>

<Button id="hover-me">Hover me</Button>
<Tooltip triggeredBy="#hover-me">A short tooltip</Tooltip>

<Button id="primary-tip">Primary tooltip</Button>
<Tooltip triggeredBy="#primary-tip" color="primary" position="bottom">Primary colour</Tooltip>
