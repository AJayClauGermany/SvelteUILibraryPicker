<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/navbar
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Container, Nav, Navbar } from '@winkintel/bootstrap-svelte'
</script>

<Navbar.Root expandOnBreakpoint="sm" class="bg-body-tertiary">
	<Container isFluid={true}>
		<Navbar.Brand href="#!">Acme</Navbar.Brand>
		<Navbar.Toggler ariaLabel="Toggle navigation">
			<Navbar.TogglerIcon />
		</Navbar.Toggler>
		<Navbar.Collapse id="main-nav">
			<Navbar.Nav>
				<Nav.Item><Nav.Link href="#!" isActive={true}>Home</Nav.Link></Nav.Item>
				<Nav.Item><Nav.Link href="#!">Pricing</Nav.Link></Nav.Item>
				<Nav.Item><Nav.Link href="#!">About</Nav.Link></Nav.Item>
			</Navbar.Nav>
		</Navbar.Collapse>
	</Container>
</Navbar.Root>
