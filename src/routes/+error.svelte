<div class="content">
	<p class="title headline-large">Ops... La pagina che stai cercando non esiste!</p>
	<a href="/" class="title-medium">Torna alla home!</a>
</div>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;

		align-items: center;
		justify-content: center;
	}

	.title {
		color: var(--color-on-surface);
	}

	a {
		cursor: pointer;
		text-decoration: none;
		padding: 24px;
		border-radius: 24px;
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

</style>
