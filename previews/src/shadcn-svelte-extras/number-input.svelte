<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/number-field
-->
<script lang="ts">
	import './styles.css'
	import * as NumberField from './components/ui/number-field/index.js'
</script>

<NumberField.Root min={0} max={10}>
	<NumberField.Group>
		<NumberField.Decrement />
		<NumberField.Input />
		<NumberField.Increment />
	</NumberField.Group>
</NumberField.Root>
