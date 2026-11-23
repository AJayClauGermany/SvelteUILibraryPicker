<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/preview-card
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from './ui/preview-card/index.ts'
</script>

<PreviewCard>
	<PreviewCardTrigger href="#svelte" class={buttonVariants({ variant: 'ghost' })}>svelte.dev</PreviewCardTrigger>
	<PreviewCardPopup>
		<p>Svelte compiles components into small, fast JavaScript.</p>
	</PreviewCardPopup>
</PreviewCard>
