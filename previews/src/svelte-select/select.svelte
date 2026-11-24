<!--
  Svelte Select ships its own styles (themed through CSS custom properties); this is its default
  look. It has no documented dark theme. No styles of ours.
  Docs: https://github.com/rob-balfre/svelte-select#readme
-->
<script lang="ts">
	import Select from 'svelte-select'

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
	]
</script>

<Select {items} searchable={false} showChevron placeholder="Pick a fruit" />
