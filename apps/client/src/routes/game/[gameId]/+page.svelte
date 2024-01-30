<script lang="ts">
  import { collectionStore, getFirebaseContext, Collection } from "sveltefire";
  import type { Game } from "@repo/types";
  const { firestore } = getFirebaseContext();
  let games;
  if (firestore) {
    games = collectionStore<Game>(firestore, "games");
  }
</script>

{#if firestore}
  <div>firestore found</div>
{:else}
  <div>no firestore :(</div>
{/if}
{#each $games as game}
  <div>
    <p>{game.id}</p>
    <p>{game.turn}</p>
  </div>
{/each}

<style>
  * {
    color: white;
  }
</style>
