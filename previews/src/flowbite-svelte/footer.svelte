<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The link row uses the layout classes from the docs' default example.
  Docs: https://flowbite-svelte.com/docs/components/footer
-->
<script lang="ts">
	import './styles.css'
	import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-svelte'
</script>

<Footer>
	<FooterCopyright href="/" by="Example" year={2026} />
	<FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm sm:mt-0">
		<FooterLink href="/">About</FooterLink>
		<FooterLink href="/">Privacy</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
