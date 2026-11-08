/**
 * Whether the site is in dark mode, read from the `dark` class the SveltePress theme puts on
 * <html>. The theme's own `isDark` store is not reliable before the first toggle (a stored
 * "dark" choice sets the class in an inline script but leaves the store false), and the class
 * is what embedded previews read, so it is the single source of truth here.
 */
export const siteTheme = $state({ dark: false })

if (typeof document !== 'undefined') {
	const html = document.documentElement
	const update = () => (siteTheme.dark = html.classList.contains('dark'))
	update()
	new MutationObserver(update).observe(html, { attributes: true, attributeFilter: ['class'] })
}
