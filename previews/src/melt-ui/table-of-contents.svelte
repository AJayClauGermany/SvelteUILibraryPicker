<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The builder reads the headings inside #toc-article and builds the list from them.
  Docs: https://melt-ui.com/docs/builders/table-of-contents
-->
<script lang="ts">
	import { createTableOfContents } from '@melt-ui/svelte'

	const {
		elements: { item },
		states: { headingsTree },
	} = createTableOfContents({
		selector: '#toc-article',
		exclude: ['h1', 'h3', 'h4', 'h5', 'h6'],
		activeType: 'highest',
	})
</script>

<nav aria-label="On this page">
	<ul>
		{#each $headingsTree as heading (heading.id)}
			<li><a href="#{heading.id}" {...$item(heading.id)} use:item>{heading.title}</a></li>
		{/each}
	</ul>
</nav>

<article id="toc-article">
	<h2 id="intro">Introduction</h2>
	<p>What this page is about.</p>
	<h2 id="setup">Setup</h2>
	<p>How to get started.</p>
	<h2 id="next">Next steps</h2>
	<p>Where to go from here.</p>
</article>
