<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/button
-->
<script lang="ts">
	import './styles.css'
	import { Button } from 'kampsy-ui'
</script>

<Button>Upload</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="error">Delete</Button>
<Button disabled>Disabled</Button>
