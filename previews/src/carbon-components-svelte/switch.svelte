<!--
  Carbon ships its own CSS; we load the default "white" theme exactly as its
  getting-started instructions describe. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Toggle
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Toggle } from 'carbon-components-svelte'
</script>

<Toggle labelText="Notifications" />
