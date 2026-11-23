<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  ListItem sets its height from the lines it shows; onclick turns it into a <button>.
  Docs: https://kendell.dev/m3-svelte/#list-demo
-->
<script lang="ts">
	import './styles.css'
	import { Divider, ListItem } from 'm3-svelte'

	let opened = $state('nothing')
</script>

<ListItem headline="Single line" />
<Divider />
<ListItem headline="Two lines" supporting="With supporting text" />
<Divider />
<ListItem overline="Overline" headline="Three lines" supporting="Overline, headline and supporting text" />
<Divider />
<ListItem headline="Clickable item" supporting="Opened: {opened}" onclick={() => (opened = 'clickable item')} />
