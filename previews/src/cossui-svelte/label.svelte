<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/label
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.ts'
	import { Label } from './ui/label/index.ts'
</script>

<div class="flex flex-col items-start gap-2">
	<Label for="username">Username</Label>
	<Input id="username" placeholder="jane" />
</div>
