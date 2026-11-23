<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/starrating
-->
<script lang="ts">
	import './styles.css'
	import { StarRating } from './ui/starrating/index.ts'

	let score = $state(3.5)
</script>

<StarRating label="Your rating" bind:value={score} allowHalf />
