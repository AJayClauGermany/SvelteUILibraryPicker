<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/toast/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Toast } from '@agnos-ui/svelte-bootstrap/components/toast'
</script>

<Toast header="Drafts" autoHide={false}>Your draft was saved.</Toast>
