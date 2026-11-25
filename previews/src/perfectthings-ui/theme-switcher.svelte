<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#ThemeSwitcher
-->
<script lang="ts">
	import { setCurrentTheme, ThemeSwitcher } from '@perfectthings/ui'
	import { theme } from '../../theme.svelte.ts'

	// Start from the site's mode; ThemeSwitcher then puts theme-light / theme-dark on <html>.
	setCurrentTheme(theme.current)
</script>

<ThemeSwitcher />
