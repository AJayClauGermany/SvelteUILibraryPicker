<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from './ui/collapsible/index.ts'

	let open = $state(true)
</script>

<Collapsible bind:open>
	<CollapsibleTrigger>Which file types can I upload?</CollapsibleTrigger>
	<CollapsiblePanel>Images, PDFs and plain text files up to 10 MB.</CollapsiblePanel>
</Collapsible>
