<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from './ui/progress/index.js'
</script>

<Progress value={40} class="w-[60%]" />
