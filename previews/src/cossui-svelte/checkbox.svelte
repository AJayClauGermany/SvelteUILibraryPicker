<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.ts'
	import { Label } from './ui/label/index.ts'

	let checked = $state(true)
</script>

<Label>
	<Checkbox bind:checked />
	Email me about updates
</Label>
<Label>
	<Checkbox />
	Send a weekly summary
</Label>
<Label>
	<Checkbox indeterminate />
	Some notifications
</Label>
<Label>
	<Checkbox disabled />
	SMS alerts (unavailable)
</Label>
