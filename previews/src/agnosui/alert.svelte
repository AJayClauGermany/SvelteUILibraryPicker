<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/alert/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Alert } from '@agnos-ui/svelte-bootstrap/components/alert'
</script>

<Alert type="success">Your changes were saved.</Alert>
<Alert type="warning" dismissible={false}>Check your input before continuing.</Alert>
