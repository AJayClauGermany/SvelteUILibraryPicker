<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Checkbox
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Checkbox } from 'carbon-components-svelte'
</script>

<Checkbox labelText="Accept the terms" />
<Checkbox labelText="Remember me" checked />
