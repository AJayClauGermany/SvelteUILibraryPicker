<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. Its datefield-rac base
  components wrap Bits UI's DateField.
  Docs: https://originui-svelte.pages.dev/inputs/input-36
-->
<script lang="ts">
	import './styles.css'
	import { CalendarDate } from '@internationalized/date'
	import { DateField, DateInput } from './ui/datefield-rac/index.js'
</script>

<DateField value={new CalendarDate(2026, 3, 14)}>
	<DateInput />
</DateField>
