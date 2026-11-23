<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The navbar is called Navbar in Flowbite. Its `breakpoint` prop is lowered to `sm` so the
  links show in this narrow frame instead of folding into the hamburger button.
  Docs: https://flowbite-svelte.com/docs/components/navbar
-->
<script lang="ts">
	import './styles.css'
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte'
</script>

<Navbar breakpoint="sm">
	<NavBrand href="#home">Acme</NavBrand>
	<NavHamburger />
	<NavUl activeUrl="#home">
		<NavLi href="#home">Home</NavLi>
		<NavLi href="#about">About</NavLi>
		<NavLi href="#pricing">Pricing</NavLi>
		<NavLi href="#contact">Contact</NavLi>
	</NavUl>
</Navbar>
