<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Textarea } from './ui/textarea/index.ts'

	let note = $state('')
</script>

<Textarea bind:value={note} placeholder="Leave a note for the team." />
