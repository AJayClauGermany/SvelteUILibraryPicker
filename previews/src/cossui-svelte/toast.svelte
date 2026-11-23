<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/toast
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { ToastProvider, toastManager } from './ui/toast/index.ts'
</script>

<ToastProvider>
	<Button
		variant="outline"
		onclick={() => toastManager.add({ title: 'Changes saved', description: 'Your profile is up to date.' })}
	>
		Show toast
	</Button>
</ToastProvider>
