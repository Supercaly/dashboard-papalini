<script lang="ts">
	import Card from './Card.svelte';

	interface Panel {
		id: string;
        name: string;
        temperature: string;
        humidity: string;
        ufcSmall: string;
        tvocSmall: string;
        co2: string;
        ufc: string;
        pm: string;
        tvoc: string;
	}

	interface Props {
		room: Panel;
	}

	const { room }: Props = $props();
</script>

<div class="card">
	<p class="title display-small">{room.name}</p>
	<div class="content">
		<div class="card-container">
			<Card panelUrl={room.temperature}/>
		</div>
		<div class="card-container">
			<Card panelUrl={room.humidity}/>
		</div>
		<div class="card-container">
			<Card panelUrl={room.ufcSmall}/>
		</div>
		<div class="card-container">
			<Card panelUrl={room.tvocSmall}/>
		</div>
		<div class="card-container big">
			<Card panelUrl={room.co2}/>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;

		display: flex;
		flex-direction: column;
		gap: 20px;

		.title {
			color: var(--color-on-surface);
		}

		.content {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 20px;

			.big {
				grid-column-start: 3;
				grid-column-end: 6;
				grid-row-start: 1;
				grid-row-end: 3;
			}
		}
	}
</style>
