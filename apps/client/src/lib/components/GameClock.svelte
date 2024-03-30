<script lang="ts">
	import { armies } from '$lib/dev/armies';
	import type { Player } from '@repo/types';
	import Button from './Button.svelte';
	import CircelIconButton from './Buttons/CircelIconButton.svelte';
	import TextButton from './Buttons/TextButton.svelte';
	export let player: Player;
</script>

<div class="clock-container">
	<div class="clock-data">
		<div class="clock-data">
			<span class="player">{player.name}</span>
			<span class="army">{armies.find((army) => army.id === player.army)?.name || ''}</span>
		</div>
	</div>
	<span class="timer">120:white</span>
	<div class="clock-btns">
		<CircelIconButton icon="pause" />
		<TextButton text="Switch player" />
	</div>
</div>

<style lang="scss">
	.clock-container {
		display: flex;
		flex-direction: column;
		gap: 40px;
		background-color: black;
		padding: 24px 64px 40px 64px;
		border: solid 6px #008b78;
		border-radius: 20px;

		.clock-data {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;

			.player {
				color: white;
				font-size: 24px;
			}
			.army {
				color: white;
				font-size: 24px;
			}
		}

		.timer {
			color: white;
			font-size: 64px;
		}

		.clock-btns {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
		}
	}
</style>
