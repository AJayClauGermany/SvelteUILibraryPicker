<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Toast
-->
<script lang="ts">
	import './styles.css'
	import { Button, Toast } from 'spaper'
</script>

<Button onclick={() => Toast.open('Settings saved')}>Show toast</Button>
<Button type="success" onclick={() => Toast.success({ title: 'Done', message: 'Photo uploaded' })}>Success</Button>
<Button type="danger" onclick={() => Toast.danger('Could not reach the server')}>Error</Button>
