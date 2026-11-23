<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { Card, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from './ui/card/index.ts'
</script>

<Card class="w-full max-w-xs">
	<CardHeader>
		<CardTitle>Team plan</CardTitle>
		<CardDescription>For groups of up to ten people.</CardDescription>
	</CardHeader>
	<CardPanel>Shared projects, roles and a monthly usage report.</CardPanel>
	<CardFooter>
		<Button>Upgrade</Button>
	</CardFooter>
</Card>
