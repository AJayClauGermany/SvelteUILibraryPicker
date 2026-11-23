<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/label
-->
<script lang="ts">
	import './styles.css'
	import { Input } from './ui/input/index.ts'
	import { Label } from './ui/label/index.ts'
</script>

<div class="grid gap-2">
	<Label for="email">Email address</Label>
	<Input id="email" type="email" placeholder="you@example.com" />
</div>
