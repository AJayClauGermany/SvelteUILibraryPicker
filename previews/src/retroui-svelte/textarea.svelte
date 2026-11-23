<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Textarea } from './ui/textarea/index.js'
</script>

<div class="space-y-4">
	<Textarea placeholder="Write a short note" />
	<Textarea placeholder="Disabled" disabled />
</div>
