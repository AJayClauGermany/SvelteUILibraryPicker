<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/spinner
-->
<script lang="ts">
	import './styles.css'
	import { Spinner } from './ui/spinner/index.ts'
</script>

<Spinner />
