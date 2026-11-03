<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Button
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Button } from 'carbon-components-svelte'
</script>

<Button>Primary</Button>
<Button kind="secondary">Secondary</Button>
<Button kind="tertiary">Tertiary</Button>
