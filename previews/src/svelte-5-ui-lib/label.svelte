<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/label/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Input, Label } from 'svelte-5-ui-lib'
</script>

<Label for="email">Email address</Label>
<Input id="email" placeholder="name@example.com" />
