<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.ts'
	import { Switch } from './ui/switch/index.ts'
</script>

<div class="flex items-center space-x-2">
	<Switch id="notifications" checked />
	<Label for="notifications">Email notifications</Label>
</div>
