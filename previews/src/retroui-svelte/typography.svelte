<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/text
-->
<script lang="ts">
	import './styles.css'
	import { Text } from './ui/text/index.js'
</script>

<div class="space-y-3">
	<Text as="h1">Heading one</Text>
	<Text as="h2">Heading two</Text>
	<Text as="h3">Heading three</Text>
	<Text as="h4">Heading four</Text>
	<Text>Body text uses the paragraph style, which is the default.</Text>
</div>
