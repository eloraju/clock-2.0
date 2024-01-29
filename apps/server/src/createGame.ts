import { Game } from "@repo/types";
import { Firestore } from "firebase-admin/firestore";
/**
 * Create a base Game object to have some default values.
 * @return {Game} The base game object.
 */
function getBaseGame(): Game {
  return {
    players: [],
    actions: [],
    round: 1,
    started: false,
    startTime: 0,
    totalTime: 0,
    turn: 1,
  };
}

/**
 * Create a new game in the database.
 * @param {Firestore} db - The Firestore instance.
 * @return {Promise<string>} The ID of the newly created game.
 */
export async function createGame(db: Firestore) {
  const game = getBaseGame();
  const ref = await db.collection("games").add(game);
  return ref.id;
}
