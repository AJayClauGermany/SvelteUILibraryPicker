<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/toolbar
-->
<script lang="ts">
	import { Toolbar } from 'bits-ui'

	let styles = $state<string[]>([])
</script>

<Toolbar.Root aria-label="Formatting">
	<Toolbar.Group type="multiple" bind:value={styles} aria-label="Text style">
		<Toolbar.GroupItem value="bold">Bold</Toolbar.GroupItem>
		<Toolbar.GroupItem value="italic">Italic</Toolbar.GroupItem>
	</Toolbar.Group>
	<Toolbar.Link href="https://bits-ui.com" target="_blank" rel="noreferrer">Help</Toolbar.Link>
	<Toolbar.Button onclick={() => (styles = [])}>Clear</Toolbar.Button>
</Toolbar.Root>
<p>Active: {styles.join(', ') || 'none'}</p>
