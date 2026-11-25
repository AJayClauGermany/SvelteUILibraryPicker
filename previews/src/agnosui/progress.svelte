<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/progressbar/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Progressbar } from '@agnos-ui/svelte-bootstrap/components/progressbar'
</script>

<Progressbar value={40} ariaLabel="Upload progress" />
<Progressbar value={75} type="success" ariaLabel="Download progress" />
