<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/form
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { Form } from './ui/form/index.ts'
	import { Input } from './ui/input/index.ts'
	import { Label } from './ui/label/index.ts'

	let sent = $state('')

	function submit(event: SubmitEvent) {
		event.preventDefault()
		const data = new FormData(event.currentTarget as HTMLFormElement)
		sent = String(data.get('email') ?? '')
	}
</script>

<Form class="flex w-full flex-col gap-4" onsubmit={submit}>
	<Label for="email">Email</Label>
	<Input id="email" name="email" type="email" placeholder="you@example.com" required />
	<Button type="submit">Subscribe</Button>
	{#if sent}<p>Subscribed {sent}</p>{/if}
</Form>
