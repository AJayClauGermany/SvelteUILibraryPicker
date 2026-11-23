<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/input-otp
-->
<script lang="ts">
	import './styles.css'
	import * as InputOTP from './ui/input-otp/index.js'
</script>

<InputOTP.Root maxlength={6}>
	{#snippet children({ cells })}
		<InputOTP.Group>
			{#each cells.slice(0, 3) as cell, i (i)}
				<InputOTP.Slot {cell} />
			{/each}
		</InputOTP.Group>
		<InputOTP.Separator />
		<InputOTP.Group>
			{#each cells.slice(3) as cell, i (i)}
				<InputOTP.Slot {cell} />
			{/each}
		</InputOTP.Group>
	{/snippet}
</InputOTP.Root>
