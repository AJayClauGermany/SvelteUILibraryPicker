<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/password
-->
<script lang="ts">
	import './styles.css'
	import * as Password from './components/ui/password/index.js'
</script>

<Password.Root>
	<Password.Input value="correct-horse">
		<Password.Copy />
		<Password.ToggleVisibility />
	</Password.Input>
	<Password.Strength />
</Password.Root>
