<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { page } from '$app/state';
	import panels from '$lib/config/panels.json';

	const panel = panels.find((e) => e.id == page.params.room)!!;
	
	$inspect(page.params.room);
</script>

<div class="content">
	<div class="top-card">
		<Card panelUrl={panel.temperature} />
		<Card panelUrl={panel.humidity} />
		<Card panelUrl={panel.ufcSmall} />
	</div>
	<div class="bottom-card">
		<div class="card-container">
			<Card panelUrl={panel.ufc} />
		</div>
		<div class="card-container">
			<Card panelUrl={panel.co2} />
		</div>
		<div class="card-container">
			<Card panelUrl={panel.pm} />
		</div>
		<div class="card-container">
			<Card panelUrl={panel.tvoc} />
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.top-card {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		flex-direction: row;
		gap: 20px;

		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;
	}

	.bottom-card {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 20px;

		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;

		.card-container {
			grid-column: span 3;
			grid-row: span 3;

			aspect-ratio: 16/10;
		}
	}
</style>
