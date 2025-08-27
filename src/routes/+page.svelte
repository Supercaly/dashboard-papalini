<script>
	import SummaryCard from '$lib/components/SummaryCard.svelte';
	import panels from '$lib/config/panels.json';
</script>

<div class="content">
	<!-- <div class="card">
		<Card panelId=21/>
	</div> -->
	{#each panels as room}
		<SummaryCard room={room} />
		
	{/each}
</div>

<style lang="scss">
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.card {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		flex-direction: row;
		gap: 20px;

		background: var(--color-surface-container);
		border-radius: 24px;
		padding: 24px;
	}
</style>
