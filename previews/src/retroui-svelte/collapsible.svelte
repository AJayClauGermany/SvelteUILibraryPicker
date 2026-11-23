<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.js'
	import * as Collapsible from './ui/collapsible/index.js'
</script>

<Collapsible.Root class="w-[350px] space-y-2">
	<Collapsible.Trigger class={buttonVariants({ variant: 'outline' })}>
		Show shipping details
	</Collapsible.Trigger>
	<Collapsible.Content class="space-y-2">
		<div class="border px-4 py-3 text-sm">Ships within two working days</div>
		<div class="border px-4 py-3 text-sm">Free returns for 30 days</div>
	</Collapsible.Content>
</Collapsible.Root>
