<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  GradientButton is a second button component.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/button/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, GradientButton } from 'svelte-5-ui-lib'
</script>

<Button>Primary</Button>
<Button color="alternative">Alternative</Button>
<Button outline>Outline</Button>
<GradientButton color="blue">Gradient</GradientButton>
