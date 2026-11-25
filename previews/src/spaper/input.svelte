<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from 'spaper'

	let email = $state('')
</script>

<Input label="Display name" placeholder="Your name" />
<Input label="Email" type="email" bind:value={email} valid={value => value.includes('@')} />
