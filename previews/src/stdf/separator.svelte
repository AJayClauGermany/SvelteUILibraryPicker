<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=divider&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Divider } from 'stdf'
</script>

<p>Above</p>
<Divider />
<p>Between</p>
<Divider text="or" />
<p>Below</p>
