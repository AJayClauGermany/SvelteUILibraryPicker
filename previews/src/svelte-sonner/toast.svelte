<!--
  svelte-sonner ships its own styles inside the Toaster, with light and dark themes picked
  through its `theme` prop (the preview passes the site's mode). No styles of ours.
  Docs: https://svelte-sonner.vercel.app
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Toaster, toast } from 'svelte-sonner'
	import { theme } from '../../theme.svelte.ts'

	onMount(() => {
		toast('Draft saved', { description: 'You can keep editing.' })
	})
</script>

<Toaster theme={theme.current} />
<button onclick={() => toast.success('Profile updated')}>Show a toast</button>
