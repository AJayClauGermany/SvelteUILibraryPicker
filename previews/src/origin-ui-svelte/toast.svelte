<!--
  Origin UI - Svelte's toast examples call svelte-sonner's toast() from a base Button, with
  svelte-sonner's own Toaster styles (its docs site passes the colour mode as `theme`, as here).
  Docs: https://originui-svelte.pages.dev/notifications/notification-21
-->
<script lang="ts">
	import './styles.css'
	import { Toaster, toast } from 'svelte-sonner'
	import Button from './ui/button.svelte'
	import { theme } from '../../theme.svelte.ts'
</script>

<Toaster theme={theme.current} />

<Button
	variant="outline"
	onclick={() => toast('Draft saved', { description: 'You can keep editing at any time.' })}
>
	Show toast
</Button>
