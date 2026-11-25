<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. AgnosUI has no button, so the trigger uses Bootstrap's btn classes, as
  its docs do; inline-start is the drawer's documented position class. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/drawer/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Drawer } from '@agnos-ui/svelte-bootstrap/components/drawer'

	let visible = $state(false)
</script>

<button class="btn btn-primary" type="button" onclick={() => (visible = true)}>Open menu</button>

<Drawer bind:visible header="Menu" className="inline-start">
	<p>Panel content slides in from the start edge.</p>
</Drawer>
