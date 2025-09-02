<script lang="ts">
	import '../app.scss';
	import Navbar from '../lib/components/Navbar.svelte';
	import { theme } from '$lib/theme.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	
	// $inspect(data);
	$inspect(`+layout: Current theme set to '${theme.value}'`);
</script>

<svelte:head>
	<link rel="stylesheet" href="/theme/{theme.value}.css" />
</svelte:head>

<div class="app">
	<aside>
		<Navbar rooms={data.rooms}/>
	</aside>
	<main>{@render children()}</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		height: 100vh;
	}

	main {
		flex: 1;
		overflow-y: auto;
		padding: 24px 24px 24px 12px;
	}

	aside {
		height: 100vh;
		padding: 24px 12px 24px 24px;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
