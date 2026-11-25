<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Skeleton } from 'spaper'
</script>

<Skeleton shape="circle" size={48} />
<Skeleton count={3} />
