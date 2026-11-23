<!--
  svelte-toast ships its own styles (themed through CSS variables); this is its default look.
  It has no documented dark theme. No styles of ours.
  Docs: https://zerodevx.github.io/svelte-toast/
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { SvelteToast, toast } from '@zerodevx/svelte-toast'

	onMount(() => {
		toast.push('Draft saved')
	})
</script>

<SvelteToast />
<button onclick={() => toast.push('Profile updated')}>Show a toast</button>
