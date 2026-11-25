<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  In dark mode this field stays white: see the note on the guide's base styles in ./styles.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/textarea/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Label, Textarea } from 'svelte-5-ui-lib'
</script>

<Label for="message">Your message</Label>
<Textarea id="message" rows={4} placeholder="Write something..." />
