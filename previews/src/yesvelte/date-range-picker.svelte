<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/date-picker
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { DatePicker } from 'yesvelte'
</script>

<!-- A range is DatePicker's `range` mode, which needs an array value; with an empty one the field
     shows dashes, so this starts with a picked range (YYYY-MM-DD, the format it writes back). -->
<DatePicker range value={['2026-03-02', '2026-03-06']} />
