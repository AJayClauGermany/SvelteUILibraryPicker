<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/navigation-menu
-->
<script lang="ts">
	import * as navigationMenu from '@zag-js/navigation-menu'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(navigationMenu.machine, { id })
	const api = $derived(navigationMenu.connect(service, normalizeProps))
</script>

<nav {...api.getRootProps()}>
	<ul {...api.getListProps()}>
		<li {...api.getItemProps({ value: 'learn' })}>
			<button {...api.getTriggerProps({ value: 'learn' })}>Learn</button>
			<div {...api.getContentProps({ value: 'learn' })}>
				<a {...api.getLinkProps({ value: 'learn' })} href="#guides">Guides</a>
				<a {...api.getLinkProps({ value: 'learn' })} href="#tutorials">Tutorials</a>
			</div>
		</li>
		<li {...api.getItemProps({ value: 'blog' })}>
			<a {...api.getLinkProps({ value: 'blog' })} href="#blog">Blog</a>
		</li>
	</ul>
</nav>
