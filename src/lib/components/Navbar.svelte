<script lang="ts">
	import Icon from './Icon.svelte';
	import { page } from '$app/state';
	import AppLogo from '$lib/assets/extra/logo.svg?component';
	import Notch from '$lib/assets/extra/notch.svg?component';
	import panels from '$lib/config/panels.json';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import { theme } from '$lib/theme.svelte';
</script>

<div class="navbar">
	<div class="logo">
		<div class="logo-icon"><AppLogo /></div>
		<p class="logo-text display-medium">Dashboard</p>
	</div>
	<div class="menu">
		<p class="menu-title title-medium">Menu</p>
		<ul class="item-container">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a class="nav-item" href="/">
					<div class="nav-notch"><Notch /></div>
					<div class="nav-icon"><Icon name="home" /></div>
					<p class="nav-text title-medium">Home</p>
				</a>
			</li>
			{#each panels as room}
				<li aria-current={page.url.pathname === '/' + room.id ? 'page' : undefined}>
					<a class="nav-item" href="/{room.id}" target="_self">
						<div class="nav-notch"><Notch /></div>
						<div class="nav-icon"><Icon name={room.icon} /></div>
						<p class="nav-text title-medium">{room.name}</p>
					</a>
				</li>
			{/each}
			<li>
				<ThemeSwitch />
			</li>
		</ul>
	</div>
	<span></span>
	<div class="partner">
		<p class="title title-medium">Partner</p>
		<div class="logos">
			<div class="logo-papalini">
				<img src="/logo/papalini_{theme.value}.png" alt="logo papalini" />
			</div>
			<div class="logo-uniurb">
				<img src="/logo/uniurb_{theme.value}.png" alt="logo uniurb" />
			</div>
			<div class="logo-merano">
				<img src="/logo/merano_{theme.value}.png" alt="logo merano" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navbar {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;

		min-width: 250px;
		max-width: 300px;

		border-radius: 24px;
		background: var(--color-surface-container);

		.logo {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 16px;

			padding: 20px 20px 0px 20px;

			.logo-icon {
				width: 48px;
				height: 48px;
				color: var(--color-primary);
			}

			.logo-text {
				color: var(--color-on-surface);
			}
		}

		.menu-title {
			padding: 8px 32px;
			text-transform: uppercase;
			color: var(--color-on-surface-variant);
		}

		ul {
			display: flex;
			flex-direction: column;
			list-style-type: none;
			margin: 0;
			padding: 0;

			li {
				text-decoration: none;

				&[aria-current='page'] {
					.nav-notch {
						opacity: 100;
					}

					.nav-icon {
						color: var(--color-primary);
					}

					.nav-text {
						color: var(--color-on-surface);
					}
				}

				.nav-item {
					text-decoration: none;
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 10px;

					&:hover {
						background: var(--color-surface-tint);
					}
				}
				.nav-notch {
					width: 10px;
					height: 42px;//48px;
					color: var(--color-primary);
					opacity: 0;
				}

				.nav-icon {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 32px;//48px;
					height: 24px;//48px;
					color: var(--color-on-surface-variant);
				}

				.nav-text {
					color: var(--color-on-surface-variant);
				}

				button {
					background: none;
					border: none;
					cursor: pointer;
					width: 100%;
					padding: 0;
				}
			}
		}
	}

	span {
		flex: auto;
	}

	.partner {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 20px;

		.title {
			text-transform: uppercase;
			color: var(--color-on-surface-variant);
		}

		.logos {
			display: flex;
			flex-direction: row;
			gap: 6px;//12px;
			flex-wrap: wrap;
			justify-content: center;

			padding: 16px;//24px 20px;
			background: var(--color-surface);
			border-radius: 24px;
		}
	}
</style>
