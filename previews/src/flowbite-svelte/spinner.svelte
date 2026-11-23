<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/spinner
-->
<script lang="ts">
	import './styles.css'
	import { Spinner } from 'flowbite-svelte'
</script>

<p>Default, with a size and a color:</p>
<Spinner aria-label="Loading" />
<Spinner size="12" color="green" aria-label="Loading" />

<p>Other types:</p>
<Spinner type="dots" aria-label="Loading" />
<Spinner type="bars" aria-label="Loading" />
<Spinner type="pulse" aria-label="Loading" />
