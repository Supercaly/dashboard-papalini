<script>
	import SummaryCard from '$lib/components/SummaryCard.svelte';
	import panels from '$lib/config/panels.json';
</script>

<div class="content">
	{#each panels.rooms as room}
		<SummaryCard {room} />
	{/each}
</div>

<style lang="scss">
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
