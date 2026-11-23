<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/separator
-->
<script lang="ts">
	import './styles.css'
	import { Separator } from './ui/separator/index.js'
</script>

<div>
	<p>Weekly digest</p>
	<Separator class="my-4" />
	<div class="flex h-5 items-center space-x-4">
		<span>Inbox</span>
		<Separator orientation="vertical" />
		<span>Drafts</span>
		<Separator orientation="vertical" />
		<span>Sent</span>
	</div>
</div>
