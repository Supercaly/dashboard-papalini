<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import { picker_start_date } from '$lib/config/env';

	const locale = {
		weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
		months: [
			'Gennaio',
			'Febbraio',
			'Marzo',
			'Aprile',
			'Maggio',
			'Giugno',
			'Luglio',
			'Agosto',
			'Settembre',
			'Ottobre',
			'Novembre',
			'Dicembre'
		]
	};

	export let date: Date = new Date();
</script>

<div class="picker">
	<DateInput
		bind:value={date}
		format="dd/MM/yyyy"
		min={picker_start_date}
		max={new Date()}
		browseWithoutSelecting={true}
		{locale}
		closeOnSelection={true}
	/>
</div>

<style lang="scss">
	.picker {
		--date-picker-foreground: var(--color-on-background);
		--date-picker-background: var(--color-background);
		--date-picker-highlight-border: var(--color-primary);
		--date-picker-highlight-shadow: var(--color-primary);
		--date-picker-selected-color: var(--color-on-primary);
		--date-picker-selected-background: var(--color-primary);
	}
</style>
