<script lang="ts">
	import { docStore, getFirebaseContext } from 'sveltefire';
	import type { Game } from '@repo/types';
	import type { PageData } from './$types';

	export let data: PageData;
	const { firestore } = getFirebaseContext();
	let game = docStore<Game>(firestore!!, `games/${data.gameId}`);
	console.log('GAME DATA IN PAGE', $game);
</script>

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		{#if $game}
			{#each Object.entries($game) as [key, value]}
				<tr>
					<td>{key}</td>
					<td>{value}</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>

<style>
	* {
		color: white;
	}
</style>
