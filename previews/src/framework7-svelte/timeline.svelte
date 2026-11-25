<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core Timeline, i.e. markup with the library's timeline classes.
  Docs: https://framework7.io/svelte/timeline.html
-->
<script lang="ts">
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<div class="timeline">
		<div class="timeline-item">
			<div class="timeline-item-date">3 <small>MAR</small></div>
			<div class="timeline-item-divider"></div>
			<div class="timeline-item-content">
				<div class="timeline-item-inner">Project kickoff</div>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-item-date">17 <small>MAR</small></div>
			<div class="timeline-item-divider"></div>
			<div class="timeline-item-content">
				<div class="timeline-item-inner">First prototype shared with the team</div>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-item-date">2 <small>APR</small></div>
			<div class="timeline-item-divider"></div>
			<div class="timeline-item-content">
				<div class="timeline-item-inner">Public beta</div>
			</div>
		</div>
	</div>
</F7App>
