<!--
  svelte-exmarkdown ships no styles: it turns Markdown into plain HTML elements, so the browser's
  default rendering IS its default look. No plugins (GFM is opt-in), no styles of ours.
  Docs: https://ssssota.github.io/svelte-exmarkdown
-->
<script lang="ts">
	import Markdown from 'svelte-exmarkdown'

	const md = `## Packing list

Bring a **warm jacket** and *comfortable* shoes.

- Water bottle
- Snacks for the trail
- A small \`first aid\` kit

> Check the weather before leaving.`
</script>

<Markdown {md} />
