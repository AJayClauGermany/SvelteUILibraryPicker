<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=pagination&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from 'stdf'
</script>

<Pagination total={120} current={3} />
