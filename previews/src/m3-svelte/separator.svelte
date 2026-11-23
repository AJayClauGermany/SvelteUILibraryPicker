<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Divider is a plain <hr>; the docs show it between ListItems. `inset` indents it.
  Docs: https://kendell.dev/m3-svelte/#list-demo
-->
<script lang="ts">
	import './styles.css'
	import { Divider, ListItem } from 'm3-svelte'
</script>

<ListItem headline="Inbox" />
<Divider />
<ListItem headline="Drafts" />
<Divider inset />
<ListItem headline="Archive" />
