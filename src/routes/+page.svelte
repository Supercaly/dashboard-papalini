<script>
	import SummaryCard from '$lib/components/SummaryCard.svelte';

	const { data } = $props();
	$inspect("aaa");
	$inspect(data);
</script>

<div class="content">
	{#each data.rooms as room}
		<SummaryCard baseUrl={data.baseUrl} room={room} />
	{:else}
		<div class="error">
			<p class="title headline-large">Non ci sono elementi da mostrare</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.error {
		width: 100%;
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;

		align-items: center;
		justify-content: center;

		.title {
			color: var(--color-on-surface);
		}
	}
</style>
