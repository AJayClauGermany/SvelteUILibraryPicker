<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.ts'

	let city = $state('')
</script>

<div class="flex flex-col gap-4">
	<Input bind:value={city} placeholder="City" />
	<Input type="email" value="ada@example.com" />
	<Input placeholder="Disabled" disabled />
</div>
