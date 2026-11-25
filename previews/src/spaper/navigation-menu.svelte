<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  `ul.inline` is the link list markup PapierCSS's navbar styles expect.
  Docs: https://oli8.github.io/spaper/components/Navbar
-->
<script lang="ts">
	import './styles.css'
	import { Navbar } from 'spaper'
</script>

<Navbar border>
	{#snippet brand()}
		<h3><a href="#top">Sketchbook</a></h3>
	{/snippet}
	<ul class="inline">
		<li><a href="#top">Gallery</a></li>
		<li><a href="#top">Pricing</a></li>
		<li><a href="#top">Contact</a></li>
	</ul>
</Navbar>
