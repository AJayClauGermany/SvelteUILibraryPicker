<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Modal
-->
<script lang="ts">
	import './styles.css'
	import { Button, Modal } from 'spaper'

	let active = $state(false)
</script>

<Button onclick={() => (active = true)}>Open modal</Button>
<Modal bind:active title="Leave the board?" subTitle="You can rejoin with a new invite.">
	<p>Your cards stay on the board after you leave.</p>
</Modal>
