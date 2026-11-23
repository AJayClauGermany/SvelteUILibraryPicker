<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/toast
-->
<script lang="ts">
	import './styles.css'
	import { Button, Toaster, toast } from 'kampsy-ui'
</script>

<Toaster />
<Button onclick={() => toast('Project saved')}>Show toast</Button>
<Button variant="secondary" onclick={() => toast.success('Domain added')}>Success</Button>
<Button variant="error" onclick={() => toast.error('Could not reach the server')}>Error</Button>
