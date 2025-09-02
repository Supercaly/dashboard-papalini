<script lang="ts">
	import { theme } from '$lib/theme.svelte';

	interface Props {
		baseUrl: string;
		panelID: string;
		currentDate?: Date;
	}
	const { baseUrl, panelID, currentDate = new Date() }: Props = $props();
	const panelUrl = $derived.by(() => {
		const fromDate = new Date(currentDate);
		fromDate.setHours(0, 0, 0, 0);
		const toDate = new Date(currentDate);
		toDate.setHours(23, 59, 59, 999);

		const query = [
			'orgId=1',
			'timezone=browser',
			`theme=${theme.value}`,
			`from=${fromDate.toISOString()}`,
			`to=${toDate.toISOString()}`,
			`panelId=${panelID}`
		].join('&');
		return `${baseUrl}?${query}`;
	});
	
	$inspect(`card: panel url=${panelUrl}`);
	$inspect(`card: current date=${currentDate.toISOString()}`);
</script>

<div class="container {theme.value}">
	<div class="content">
		<iframe
			class="grafana-frame"
			title="Grafana frame"
			frameborder="0"
			src={panelUrl}
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
