<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/separator
-->
<script lang="ts">
	import './styles.css'
	import { Separator } from './ui/separator/index.ts'
</script>

<div>
	<p class="text-sm font-medium">Account settings</p>
	<p class="text-muted-foreground text-sm">Profile, billing and notifications.</p>
</div>
<Separator class="my-4" />
<div class="flex h-5 items-center space-x-4 text-sm">
	<span>Profile</span>
	<Separator orientation="vertical" />
	<span>Billing</span>
	<Separator orientation="vertical" />
	<span>Alerts</span>
</div>
