<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/date-picker
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { DatePicker } from 'yesvelte'
</script>

<!-- A range is DatePicker's `range` mode; it needs an array value (empty: nothing picked yet). -->
<DatePicker range value={[]} placeholder="Pick a date range" />
