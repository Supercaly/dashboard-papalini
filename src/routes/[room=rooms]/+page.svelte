<script lang="ts">
	import { page } from '$app/state';
	import Card from '$lib/components/Card.svelte';
	import DatePicker from '$lib/components/DatePicker.svelte';

	const { data } = $props();
	const panel = $derived(data.rooms.find((e) => e.id == page.params.room)!!);

	let plotDate = $state(new Date());

	$inspect(panel);
	$inspect(`rooms: room=${page.params.room}`);
	$inspect(`room: date=${plotDate.toISOString()}`);
</script>

<div class="content">
	<div class="datepicker">
		<DatePicker bind:date={plotDate} />
	</div>
	<div class="top-card">
		<div class="elements">
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.temperature} />
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.humidity} />
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.ufcSmall} />
		</div>
	</div>
	<div class="bottom-card">
		<div class="card-container">
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.ufc} />
		</div>
		<div class="card-container">
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.co2} />
		</div>
		<div class="card-container">
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.pm} />
		</div>
		<div class="card-container">
			<Card currentDate={plotDate} baseUrl={data.baseUrl} panelID={panel.tvoc} />
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

	.datepicker {
		display: flex;
		flex-direction: column;
		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;
	}

	.top-card {
		display: flex;
		flex-direction: column;

		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;
		gap: 10px;

		.elements {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			flex-direction: row;
			gap: 20px;
		}
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
