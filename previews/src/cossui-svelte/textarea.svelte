<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.ts'
	import { Textarea } from './ui/textarea/index.ts'

	let value = $state('')
</script>

<Label for="feedback">Feedback</Label>
<Textarea id="feedback" placeholder="What could we do better?" bind:value />
<Textarea placeholder="Disabled" disabled />
