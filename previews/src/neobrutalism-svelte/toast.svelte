<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  The Toaster gets theme from the preview's light/dark mode, since the generated one reads mode-watcher.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/sonner
-->
<script lang="ts">
	import './styles.css'
	import { toast } from 'svelte-sonner'
	import { Toaster } from './ui/sonner/index.ts'
	import { Button } from './ui/button/index.ts'
	import { theme } from '../../theme.svelte.ts'
</script>

<Toaster theme={theme.current} />

<div class="flex flex-wrap gap-2">
	<Button
		variant="outline"
		onclick={() => toast('Report exported', { description: 'The file is in your downloads.' })}
	>
		Show toast
	</Button>
	<Button variant="outline" onclick={() => toast.success('Settings saved')}>Success</Button>
</div>
