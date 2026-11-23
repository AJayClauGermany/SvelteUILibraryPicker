<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.ts'
	import { Label } from './ui/label/index.ts'

	let checked = $state(true)
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-3">
		<Checkbox id="news" bind:checked />
		<Label for="news">Send me the newsletter</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="locked" disabled />
		<Label for="locked">Disabled option</Label>
	</div>
</div>
