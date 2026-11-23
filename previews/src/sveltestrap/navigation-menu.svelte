<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-navbar--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import {
		Collapse,
		Nav,
		Navbar,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink,
	} from '@sveltestrap/sveltestrap'

	let open = $state(false)
</script>

<Navbar color="light" light expand="sm">
	<NavbarBrand href="#">Acme</NavbarBrand>
	<NavbarToggler onclick={() => (open = !open)} />
	<Collapse isOpen={open} navbar expand="sm">
		<Nav navbar>
			<NavItem><NavLink href="#" active>Home</NavLink></NavItem>
			<NavItem><NavLink href="#">Pricing</NavLink></NavItem>
			<NavItem><NavLink href="#">About</NavLink></NavItem>
		</Nav>
	</Collapse>
</Navbar>
