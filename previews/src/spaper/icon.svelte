<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Icons come from spaper/icons (a re-export of @sketchyicons/svelte).
  Docs: https://oli8.github.io/spaper/components/Icon
-->
<script lang="ts">
	import './styles.css'
	import { Icon } from 'spaper'
	import { Coffee, Mail, Sun } from 'spaper/icons'
</script>

<Icon name={Coffee} />
<Icon name={Mail} type="secondary" />
<Icon name={Sun} type="warning" fill="warning" />
