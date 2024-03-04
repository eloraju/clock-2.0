<script lang="ts">
	import { docStore, getFirebaseContext } from 'sveltefire';
	import type { PageData } from './$types';
	import type { Game } from '@repo/types';
	export let data: PageData;
	const { firestore } = getFirebaseContext();
	const game = docStore<Game>(firestore!, `games/${data.gameId}`);
</script>

{#await $game}
	<p>Loading...</p>
{:then game}
	{#if game}
		<div class="container">
			{#each game.players as player}
				<div class="player-container">
					<div class="player-data">
						<div class="player-data">
							<span class="player">{player.name}</span>
							<span class="army">{player.army}</span>
						</div>
						<span class="timer">1:45:27</span>
					</div>
				</div>
			{/each}
		</div>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 40px;
		flex: 1;
	}
	.player-container {
		display: flex;
		background-color: black;
		padding: 24px 64px 40px 64px;
		border: solid 6px #008b78;
		border-radius: 20px;
		.player-data {
			padding: 24px 64px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 40px;

			.player {
				color: white;
			}
			.army {
				color: white;
			}
			.timer {
				color: white;
				font-size: 64px;
			}
		}
	}
</style>
