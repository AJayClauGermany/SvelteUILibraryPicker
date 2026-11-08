/**
 * Standalone preview app, served at /preview/?library=<id>&component=<id>[&theme=light|dark].
 *
 * It is deliberately separate from the SvelteKit site so that NO site CSS (theme,
 * resets, fonts) leaks in and libraries never share a page with each other. Only the
 * selected preview module — and the CSS it imports — is loaded.
 *
 * Light/dark: an explicit `theme` param wins; otherwise an embedded preview follows the
 * site (the SveltePress theme puts `dark` on the site's <html>, readable here because
 * /preview/ is same-origin), and a standalone one follows the OS. The site also posts
 * `{ type: 'ulp:theme', theme }` when its mode changes, so frames switch without reloading.
 */
import type { Component } from 'svelte'
import { mount } from 'svelte'
import { applyTheme, type PreviewTheme } from './theme.svelte.ts'

const modules = import.meta.glob<{ default: Component }>('./src/*/*.svelte')

const target = document.getElementById('app')!
const params = new URLSearchParams(window.location.search)
const library = params.get('library') ?? ''
const component = params.get('component') ?? ''
const loader = modules[`./src/${library}/${component}.svelte`]

function initialTheme(): PreviewTheme {
	const requested = params.get('theme')
	if (requested === 'dark' || requested === 'light') return requested
	try {
		if (window.parent !== window) return window.parent.document.documentElement.classList.contains('dark') ? 'dark' : 'light'
	}
	catch {
		// Cross-origin parent: fall through to the OS preference.
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

applyTheme(library, initialTheme())

window.addEventListener('message', (e: MessageEvent) => {
	if (e.origin !== window.location.origin || e.data?.type !== 'ulp:theme') return
	if (e.data.theme === 'dark' || e.data.theme === 'light') applyTheme(library, e.data.theme)
})

if (loader) {
	document.title = `${library} · ${component} preview`
	loader().then(mod => mount(mod.default, { target }))
}
else {
	target.textContent = `No preview for "${library}/${component}".`
}
