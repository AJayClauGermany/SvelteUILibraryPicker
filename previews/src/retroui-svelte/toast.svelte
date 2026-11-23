<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Its Sonner reads the mode from mode-watcher, so the preview hands the page's mode to it.
  Docs: https://retroui-svelte.netlify.app/docs/components/sonner
-->
<script lang="ts">
	import './styles.css'
	import { untrack } from 'svelte'
	import { setMode } from 'mode-watcher'
	import { toast } from 'svelte-sonner'
	import { theme } from '../../theme.svelte.ts'
	import { Button } from './ui/button/index.js'
	import { Toaster } from './ui/sonner/index.js'

	$effect(() => {
		const mode = theme.current
		untrack(() => setMode(mode))
	})
</script>

<Toaster />
<Button onclick={() => toast('Saved', { description: 'Your changes are stored.' })}>Show toast</Button>
