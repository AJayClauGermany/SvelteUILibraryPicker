<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Docs: https://kendell.dev/m3-svelte/#button-demo
-->
<script lang="ts">
	import './styles.css'
	import { Button } from 'm3-svelte'
</script>

<Button>Filled</Button>
<Button variant="tonal">Tonal</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
