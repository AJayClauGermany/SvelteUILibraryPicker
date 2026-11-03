/**
 * Standalone preview app, served at /preview/?library=<id>&component=<id>.
 *
 * It is deliberately separate from the SvelteKit site so that NO site CSS (theme,
 * resets, fonts) leaks in and libraries never share a page with each other. Only the
 * selected preview module — and the CSS it imports — is loaded.
 */
import type { Component } from 'svelte'
import { mount } from 'svelte'

const modules = import.meta.glob<{ default: Component }>('./src/*/*.svelte')

const target = document.getElementById('app')!
const params = new URLSearchParams(window.location.search)
const library = params.get('library') ?? ''
const component = params.get('component') ?? ''
const loader = modules[`./src/${library}/${component}.svelte`]

if (loader) {
	document.title = `${library} · ${component} preview`
	loader().then(mod => mount(mod.default, { target }))
}
else {
	target.textContent = `No preview for "${library}/${component}".`
}
