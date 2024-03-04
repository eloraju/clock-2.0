<script lang="ts">
	import { armies } from '$lib/dev/armies';
	export let name: string;
	export let value: string;
	export let playerId: number | string;

	if (typeof playerId === 'number') {
		playerId = `Player ${playerId}`;
	}
</script>

<div class="container">
	<label for="army_selector" class="block mb-2 text-sm font-medium text-gray-900">{playerId}</label>
	<select id="army_selector" {name} bind:value>
		{#each armies as army}
			<option value={army.id}>{army.name}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	select {
		// A reset of styles, including removing the default dropdown arrow
		appearance: none;
		// Additional resets for further consistency
		background-color: transparent;
		border: none;
		padding: 0 1em 0 0;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;
		border-radius: 2px;
		border: 1px solid #9a9a9a;
		background: #fff;
		padding: 8px;
	}
</style>
