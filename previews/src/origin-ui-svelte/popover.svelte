<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/popovers
-->
<script lang="ts">
	import './styles.css'
	import * as Popover from './ui/popover/index.js'
	import { buttonVariants } from './ui/button.svelte'
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Share</Popover.Trigger>
	<Popover.Content showArrow>
		<p>Anyone with the link can view this page.</p>
	</Popover.Content>
</Popover.Root>
