<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from 'kampsy-ui'
</script>

<Progress value={60} />
<Progress type="success" value={100} />
<Progress type="warning" value={35} />
<Progress type="error" value={10} />
