<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Avatar
-->
<script lang="ts">
	import './styles.css'
	import { Avatar, AvatarGroup } from 'spaper'
</script>

<Avatar label="Ada Lovelace" />
<Avatar label="Grace Hopper" type="secondary" size="large" />

<AvatarGroup>
	<Avatar label="Alan Turing" />
	<Avatar label="Katherine Johnson" type="success" />
	<Avatar label="Edsger Dijkstra" type="warning" />
</AvatarGroup>
