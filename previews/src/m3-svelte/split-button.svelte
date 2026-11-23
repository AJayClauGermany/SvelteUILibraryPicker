<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  The arrow opens the `menu` snippet; here it holds the library's Menu and MenuItem.
  Docs: https://kendell.dev/m3-svelte/#split-button-demo
-->
<script lang="ts">
	import './styles.css'
	import { Menu, MenuItem, SplitButton } from 'm3-svelte'

	let last = $state('none')
</script>

<SplitButton variant="filled" onclick={() => (last = 'Save')}>
	Save
	{#snippet menu()}
		<Menu>
			<MenuItem onclick={() => (last = 'Save as copy')}>Save as copy</MenuItem>
			<MenuItem onclick={() => (last = 'Save as template')}>Save as template</MenuItem>
		</Menu>
	{/snippet}
</SplitButton>
<p>Last action: {last}</p>
