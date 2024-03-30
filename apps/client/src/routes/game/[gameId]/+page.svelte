<script lang="ts">
	import { docStore, getFirebaseContext } from 'sveltefire';
	import type { PageData } from './$types';
	import type { Game } from '@repo/types';
	import GameClock from '$lib/components/GameClock.svelte';
	export let data: PageData;
	const { firestore } = getFirebaseContext();
	const game = docStore<Game>(firestore!, `games/${data.gameId}`);
</script>

{#await $game}
	<p>Loading...</p>
{:then game}
	{#if game}
		<div class="container">
			<GameClock player={game.players[0]} />
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
</style>
