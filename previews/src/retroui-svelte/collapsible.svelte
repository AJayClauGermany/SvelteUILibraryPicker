<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import * as Collapsible from './ui/collapsible/index.js'
</script>

<Collapsible.Root>
	<Collapsible.Trigger>Show shipping details</Collapsible.Trigger>
	<Collapsible.Content>
		Orders leave the warehouse within two working days.
	</Collapsible.Content>
</Collapsible.Root>
