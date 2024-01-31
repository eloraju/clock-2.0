<script lang="ts">
	import logo from '$lib/images/logo.png';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import ArmyPicker from '$lib/components/ArmyPicker.svelte';
	import DurationPicker from '$lib/components/DurationPicker.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { Game, Player } from '@repo/types';
	import { goto } from '$app/navigation';

	let startingPlayer = 1;
	let duration = 1.5 * 60 * 60; // 1.5h

	let players: Player[] = [
		{ name: '', army: '' },
		{ name: '', army: '' }
	];

	async function createGame() {
		const res = await fetch('/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				players,
				startingPlayer,
				duration
			} as Partial<Game>)
		});

		if (res.ok) {
			const response = await res.json();
			console.log(JSON.stringify(response));
			const newGameId = response.id;
			goto(`/game/${newGameId}`);
		}
	}
</script>

<div class="main">
	<img src={logo} alt="THE LOGO!" />

	<div class="data-container">
		<h1>1. Type in player names</h1>
		<div class="data">
			{#each players as player, index}
				<div class="name-starter">
					<TextInput
						bind:value={player.name}
						label={`Player ${index + 1}`}
						required
						name={`player_${index}`}
					/>
					<RadioButton {startingPlayer} playerId={index} />
				</div>
			{/each}
		</div>
	</div>

	<div class="data-container">
		<h1>2. Select armies</h1>
		<div class="data">
			{#each players as player, index}
				<ArmyPicker name={`army_${index}`} playerId={index} bind:value={player.army} />
			{/each}
		</div>
	</div>

	<div class="data-container">
		<h1>3. Adjust game length</h1>
		<DurationPicker bind:duration />
	</div>
	<div class="start-wrapper">
		<button class="start-btn" type="button" on:click={createGame}>START GAME</button>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		width: 580px;
		border: 2px solid black;
		border-radius: 20px;
		border: 2px solid var(--green-radient, #00d2b6);
		padding: 24px 64px;
		background: #040d12;
		gap: 40px;
		margin-top: 64px;
	}

	h1 {
		color: white;
		font-size: 18px;
		font-weight: 700;
	}

	.data-container {
		display: flex;
		flex-direction: column;
		gap: 16px;

		.data {
			display: flex;
			flex-direction: row;
			gap: 16px;
			justify-content: space-between;

			.name-starter {
				display: flex;
				flex-direction: column;
				gap: 16px;
			}
		}
	}

	.start-wrapper {
		display: flex;
		justify-content: center;
	}

	.start-btn {
		background: linear-gradient(180deg, #548baf 0%, #325f7d 100%);
		border-radius: 99px;
		padding: 18px 24px;
		display: flex;
		align-items: center;
		border: none;
		font-family: 'Roboto Mono';
		font-size: 18px;
		color: white;
		font-weight: 700;
		cursor: pointer;
	}

	img {
		width: 100%;
	}
</style>
