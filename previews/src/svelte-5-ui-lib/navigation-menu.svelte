<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The navbar is called Navbar here; uiHelpers() drives the hamburger menu, as in the docs.
  Below its smallest `breakPoint` (md) the links fold into the hamburger button.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/navbar/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { NavBrand, Navbar, NavLi, NavUl, uiHelpers } from 'svelte-5-ui-lib'

	const nav = uiHelpers()
</script>

<Navbar toggleNav={nav.toggle} closeNav={nav.close} navStatus={nav.isOpen} breakPoint="md">
	{#snippet brand()}
		<NavBrand siteName="Acme" />
	{/snippet}
	<NavUl activeUrl="#home">
		<NavLi href="#home">Home</NavLi>
		<NavLi href="#about">About</NavLi>
		<NavLi href="#contact">Contact</NavLi>
	</NavUl>
</Navbar>
