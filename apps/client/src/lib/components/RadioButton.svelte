<script lang="ts">
	export let playerId: number;
	export let startingPlayer: number;
</script>

<label>
	<input type="radio" bind:group={startingPlayer} name="currentPlayer" value={playerId} />
	Starting player
</label>

<style lang="scss">
	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		color: white;
		font-weight: 400;
		font-size: 16px;
	}

	input[type='radio'] {
		appearance: none;
		background: white;
		width: 24px;
		height: 24px;
		border: 2px lightgray solid;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-2px);

		&::before {
			content: '';
			width: 16px;
			height: 16px;
			border-radius: 50%;
			transform: scale(0);
			transition: 120ms transform ease-in-out;
			box-shadow: inset 1em 1em #006f60;
		}

		&:checked::before {
			transform: scale(1);
		}
	}
</style>
