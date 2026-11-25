<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Toasts render in place here; `color` tints the icon box.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/toast/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Toast } from 'svelte-5-ui-lib'
</script>

{#snippet dot()}
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="8" cy="8" r="5" /></svg>
{/snippet}

<Toast>Your message was sent.</Toast>
<Toast color="green" icon={dot}>Settings saved.</Toast>
<Toast color="red" icon={dot} dismissable={false}>Upload failed.</Toast>
