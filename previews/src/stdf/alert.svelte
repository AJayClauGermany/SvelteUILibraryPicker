<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=noticeBar&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { NoticeBar } from 'stdf'
</script>

<NoticeBar textList={['The store closes early on Friday for maintenance.']} />
