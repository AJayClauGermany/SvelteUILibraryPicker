<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. Its base Collapsible re-exports
  Bits UI's parts without classes, so only the trigger (a base Button) is styled.
  Docs: https://originui-svelte.pages.dev/accordions/accordion-19
-->
<script lang="ts">
	import './styles.css'
	import * as Collapsible from './ui/collapsible/index.js'
	import { buttonVariants } from './ui/button.svelte'
</script>

<Collapsible.Root open>
	<Collapsible.Trigger class={buttonVariants({ variant: 'outline' })}>Release notes</Collapsible.Trigger>
	<Collapsible.Content>
		<p>Version 2.1 adds offline mode and fixes the sync indicator.</p>
	</Collapsible.Content>
</Collapsible.Root>
