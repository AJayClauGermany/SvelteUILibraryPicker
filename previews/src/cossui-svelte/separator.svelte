<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/separator
-->
<script lang="ts">
	import './styles.css'
	import { Separator } from './ui/separator/index.ts'
</script>

<div class="max-w-72">
	<p class="text-sm">Account settings</p>
	<Separator class="my-4" />
	<div class="flex items-center gap-4 text-sm">
		<span>Profile</span>
		<Separator orientation="vertical" />
		<span>Billing</span>
		<Separator orientation="vertical" />
		<span>Security</span>
	</div>
</div>
