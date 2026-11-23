<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/separator
-->
<script lang="ts">
	import './styles.css'
	import { Separator } from './ui/separator/index.js'
</script>

<div class="flex max-w-sm flex-col gap-4 text-sm">
	<div>Account settings</div>
	<Separator />
	<div class="flex h-5 items-center gap-4">
		<div>Profile</div>
		<Separator orientation="vertical" />
		<div>Billing</div>
		<Separator orientation="vertical" />
		<div>Security</div>
	</div>
</div>
