<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Built-in validation: leave a field empty or type an invalid email, then move on.
  Docs: https://framework7.io/svelte/inputs.html#input-properties
-->
<script lang="ts">
	import { Block, Button, List, ListInput } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List form>
		<ListInput label="Name" type="text" placeholder="Your name" required validateOnBlur />
		<ListInput
			label="Email"
			type="email"
			placeholder="you@example.com"
			info="We never share your address."
			required
			validateOnBlur
		/>
	</List>
	<Block>
		<Button fill type="submit">Sign up</Button>
	</Block>
</F7App>
