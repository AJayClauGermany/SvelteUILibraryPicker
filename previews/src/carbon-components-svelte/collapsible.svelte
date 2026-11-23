<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Disclosure
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Disclosure } from 'carbon-components-svelte'

	let open = $state(true)
</script>

<Disclosure summary="Shipping details" bind:open>
	<p>Orders leave the warehouse within two business days.</p>
</Disclosure>
