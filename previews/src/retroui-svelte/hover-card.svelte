<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/hover-card
-->
<script lang="ts">
	import './styles.css'
	import * as HoverCard from './ui/hover-card/index.js'
</script>

<div>
	Built with
	<HoverCard.Root>
		<HoverCard.Trigger href="#svelte" class="underline-offset-4 hover:underline">Svelte</HoverCard.Trigger>
		<HoverCard.Content>
			<h4 class="text-sm font-semibold">Svelte</h4>
			<p class="text-sm">A compiler for building user interfaces.</p>
		</HoverCard.Content>
	</HoverCard.Root>
	and a lot of coffee.
</div>
