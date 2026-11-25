<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/slider/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Slider } from '@agnos-ui/svelte-bootstrap/components/slider'

	let values = $state([40])
</script>

<Slider bind:values min={0} max={100} />
