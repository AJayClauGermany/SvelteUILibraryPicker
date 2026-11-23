<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.ts'
	import { Switch } from './ui/switch/index.ts'

	let checked = $state(true)
</script>

<Label>
	<Switch bind:checked />
	Wi-Fi
</Label>
<Label>
	<Switch />
	Bluetooth
</Label>
<Label>
	<Switch disabled />
	Airplane mode (unavailable)
</Label>
