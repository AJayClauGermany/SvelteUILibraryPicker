<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/offcanvas
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Offcanvas } from '@winkintel/bootstrap-svelte'

	let open = $state(false)
</script>

<Button colorVariant="primary" onclick={() => (open = true)}>Open menu</Button>

<Offcanvas.Root isShown={open} onHide={() => (open = false)}>
	<Offcanvas.Header>
		<Offcanvas.Title>Menu</Offcanvas.Title>
	</Offcanvas.Header>
	<Offcanvas.Body>
		<p>Panel content slides in from the start edge.</p>
		<Button colorVariant="secondary" onclick={() => (open = false)}>Close</Button>
	</Offcanvas.Body>
</Offcanvas.Root>
