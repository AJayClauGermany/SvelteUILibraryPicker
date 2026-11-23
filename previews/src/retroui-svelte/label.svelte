<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/label
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.js'
	import { Input } from './ui/input/index.js'
	import { Label } from './ui/label/index.js'
</script>

<div class="flex max-w-sm flex-col gap-4">
	<div class="flex flex-col gap-1.5">
		<Label for="city">City</Label>
		<Input id="city" placeholder="Lisbon" />
	</div>
	<div class="flex items-center gap-2">
		<Checkbox id="news" />
		<Label for="news">Send me the newsletter</Label>
	</div>
</div>
