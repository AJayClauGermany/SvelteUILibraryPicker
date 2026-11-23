<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/password-input
-->
<script lang="ts">
	import { PasswordInput } from '@ark-ui/svelte/password-input'
</script>

<PasswordInput.Root>
	<PasswordInput.Label>Password</PasswordInput.Label>
	<PasswordInput.Control>
		<PasswordInput.Input />
		<PasswordInput.VisibilityTrigger>
			<PasswordInput.Indicator>
				Hide
				{#snippet fallback()}Show{/snippet}
			</PasswordInput.Indicator>
		</PasswordInput.VisibilityTrigger>
	</PasswordInput.Control>
</PasswordInput.Root>
