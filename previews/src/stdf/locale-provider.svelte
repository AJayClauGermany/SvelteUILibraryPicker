<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Built-in text defaults to Simplified Chinese; ConfigProvider switches this calendar to English.
  Docs: https://stdf.dev/guide/internation?lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Calendar, ConfigProvider } from 'stdf'
	import { en_US } from 'stdf/lang'
</script>

<ConfigProvider locale={en_US}>
	<Calendar popup={null} />
</ConfigProvider>
