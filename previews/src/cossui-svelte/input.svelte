<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.ts'
</script>

<Input placeholder="Your name" />
<Input size="sm" placeholder="Small" />
<Input size="lg" placeholder="Large" />
<Input placeholder="Disabled" disabled />
