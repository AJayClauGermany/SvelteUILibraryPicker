<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. Its datefield-rac base
  components wrap Bits UI's TimeField (a segmented field, no dropdown).
  Docs: https://originui-svelte.pages.dev/inputs/input-37
-->
<script lang="ts">
	import './styles.css'
	import { Time } from '@internationalized/date'
	import { TimeField, TimeInput } from './ui/datefield-rac/index.js'
</script>

<TimeField value={new Time(9, 30)}>
	<TimeInput />
</TimeField>
