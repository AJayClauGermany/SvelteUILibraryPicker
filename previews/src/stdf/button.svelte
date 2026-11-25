<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=button&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button } from 'stdf'
</script>

<Button>Primary</Button>
<Button fill="line">Line</Button>
<Button fill="colorLight" state="success">Success</Button>
