<script>
	import Icon from './Icon.svelte';
	import { theme } from '$lib/theme.svelte';

	let state = $state(theme.value === 'light' ? false : true);
	let isLight = $derived(!state ? 'checked' : '');
	let isDark = $derived(state ? 'checked' : '');
</script>

<div class="content">
	<div class="icon-container {isLight}">
		<Icon name="sun"></Icon>
	</div>
	<label class="switch">
		<input
			type="checkbox"
			bind:checked={state}
			onchange={() => {
				if (theme.value === 'light') {
					theme.value = 'dark';
				} else {
					theme.value = 'light';
				}
			}}
		/>
		<span class="slider round"></span>
	</label>
	<div class="icon-container {isDark}">
		<Icon name="moon"></Icon>
	</div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
		padding-left: 20px;
		color: var(--color-on-surface-variant);

		.icon-container {
			width: 32px;//48px;
			height: 42px;//48px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.checked {
			color: var(--color-primary);
		}
	}
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 20px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-primary-tint);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 0px;
		bottom: 0px;
		background-color: var(--color-primary);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	/* input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	} */

	input:checked + .slider:before {
		transform: translateX(28px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 24px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
