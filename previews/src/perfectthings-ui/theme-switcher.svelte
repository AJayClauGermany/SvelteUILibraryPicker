<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#ThemeSwitcher
-->
<script lang="ts">
	import { setCurrentTheme, ThemeSwitcher } from '@perfectthings/ui'
	import { theme } from '../../theme.svelte.ts'

	// Follow the site's mode: setCurrentTheme() updates the library's stored theme, so the
	// switcher's selection and the theme-light / theme-dark class on <html> stay in step with it.
	$effect(() => setCurrentTheme(theme.current))
</script>

<ThemeSwitcher />
