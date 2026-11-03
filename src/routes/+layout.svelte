<script lang="ts">
	// SveltePress wraps this root layout in its theme's GlobalLayout automatically.
	// Live previews do NOT go through SvelteKit (see /previews) so this CSS never reaches them.
	import '#lib/styles/site.css'

	const { children } = $props()
</script>

{@render children?.()}
