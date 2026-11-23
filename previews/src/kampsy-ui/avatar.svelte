<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/avatar
-->
<script lang="ts">
	import './styles.css'
	import { Avatar, AvatarGroup } from 'kampsy-ui'

	const team = [{ letter: 'AL' }, { letter: 'GH' }, { letter: 'KT' }, { letter: 'MR' }, { letter: 'JS' }]
</script>

<Avatar letter="AL" />
<Avatar letter="GH" size={48} />
<AvatarGroup members={team} limit={3} />
