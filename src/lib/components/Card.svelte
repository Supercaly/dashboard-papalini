<script lang="ts">
	import { theme } from '$lib/theme.svelte';

	interface Props {
		panelUrl: string;
	}
	let { panelUrl }: Props = $props();
</script>

<div class="container {theme.value}">
	<div class="content">
		<iframe
			class="grafana-frame"
			title="Grafana frame"
			frameborder="0"
			src={panelUrl + '&theme=' + theme.value}
		></iframe>
		<!-- src="http://localhost:3000/d-solo/fef0ktu3gcnwgc/new-dashboard?orgId=1&timezone=browser&theme=light&panelId={panelId}" -->
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		height: 100%;

		border-radius: 24px;

	}

	.light {
		background: var(--color-card-color-container);
	}

	.dark {
		background: var(--color-card-dark-color-container);
	}

	.content {
		flex: 1;
		margin: 15px;
	}

	.grafana-frame {
		width: 100%;
		height: 100%;
	}
</style>
