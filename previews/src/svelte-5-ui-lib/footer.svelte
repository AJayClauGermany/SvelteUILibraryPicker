<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/footer/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Footer, FooterCopyright, FooterLi, FooterUl } from 'svelte-5-ui-lib'
</script>

<Footer>
	<FooterCopyright href="/" by="Example" year={2026} />
	<FooterUl>
		<FooterLi href="#about">About</FooterLi>
		<FooterLi href="#privacy">Privacy</FooterLi>
		<FooterLi href="#contact">Contact</FooterLi>
	</FooterUl>
</Footer>
