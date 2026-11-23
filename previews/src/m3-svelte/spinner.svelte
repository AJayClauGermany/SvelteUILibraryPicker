<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  LoadingIndicator is the indeterminate M3 Expressive shape-morphing indicator; `container` adds a backdrop.
  Docs: https://kendell.dev/m3-svelte/#loading-demo
-->
<script lang="ts">
	import './styles.css'
	import { LoadingIndicator } from 'm3-svelte'
</script>

<LoadingIndicator aria-label="Loading" />
<LoadingIndicator container aria-label="Loading" />
