<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  The Toaster's theme prop follows the preview's light/dark mode (the docs' alternative to mode-watcher).
  Docs: https://shadcn-svelte.com/docs/components/sonner
-->
<script lang="ts">
	import './styles.css'
	import { toast } from 'svelte-sonner'
	import { Toaster } from './ui/sonner/index.js'
	import { Button } from './ui/button/index.js'
	import { theme } from '../../theme.svelte.ts'
</script>

<Toaster theme={theme.current} />

<div class="flex flex-wrap gap-2">
	<Button
		variant="outline"
		onclick={() => toast('Draft saved', { description: 'You can keep editing at any time.' })}
	>
		Show toast
	</Button>
	<Button variant="outline" onclick={() => toast.success('Changes published')}>Success</Button>
</div>
