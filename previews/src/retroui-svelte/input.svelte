<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.js'
</script>

<div class="flex max-w-sm flex-col gap-4">
	<Input placeholder="Your name" />
	<Input type="email" placeholder="Email" aria-invalid />
	<Input placeholder="Disabled" disabled />
</div>
