<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from './ui/progress/index.ts'
</script>

<Progress value={60} />
