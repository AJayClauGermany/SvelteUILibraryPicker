<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core f7.autocomplete API (dropdown mode) on a ListInput. Type a letter.
  Docs: https://framework7.io/svelte/autocomplete.html
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { f7, f7ready, List, ListInput } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'

	const cities = ['Amsterdam', 'Athens', 'Berlin', 'Bern', 'Lisbon', 'London', 'Madrid', 'Paris', 'Prague', 'Rome', 'Vienna']

	onMount(() => {
		let autocomplete: { destroy: () => void } | undefined
		f7ready(() => {
			autocomplete = f7.autocomplete.create({
				inputEl: '#preview-city',
				openIn: 'dropdown',
				source(query, render) {
					render(query ? cities.filter(city => city.toLowerCase().includes(query.toLowerCase())) : [])
				},
			})
		})
		return () => autocomplete?.destroy()
	})
</script>

<F7App>
	<List>
		<ListInput label="City" type="text" inputId="preview-city" placeholder="Start typing a city" />
	</List>
</F7App>
