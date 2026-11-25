<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. AgnosUI has no button, so the trigger uses Bootstrap's btn classes, as
  its docs do. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/collapse/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Collapse } from '@agnos-ui/svelte-bootstrap/components/collapse'

	let visible = $state(false)
	const id = $props.id()
</script>

<button class="btn btn-primary" type="button" aria-controls={id} aria-expanded={visible} onclick={() => (visible = !visible)}>
	Show details
</button>

<Collapse bind:visible {id}>
	<p>Extra details appear here while the panel is open.</p>
</Collapse>
