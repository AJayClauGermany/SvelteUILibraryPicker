<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/loader
-->
<script lang="ts">
	import './styles.css'
	import { Loader } from './ui/loader/index.js'
</script>

<div class="flex flex-col gap-4">
	<Loader />
	<Loader variant="secondary" />
	<Loader variant="outline" />
	<Loader size="lg" />
</div>
