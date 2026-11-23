<!--
  Svelte Select ships its own styles (themed through CSS custom properties); this is its default
  look. Searchable is its default mode, so typing filters the list. No styles of ours.
  Docs: https://github.com/rob-balfre/svelte-select#readme
-->
<script lang="ts">
	import Select from 'svelte-select'

	const items = [
		{ value: 'ams', label: 'Amsterdam' },
		{ value: 'ber', label: 'Berlin' },
		{ value: 'lis', label: 'Lisbon' },
		{ value: 'osl', label: 'Oslo' },
	]
</script>

<Select {items} placeholder="Type a city" />
