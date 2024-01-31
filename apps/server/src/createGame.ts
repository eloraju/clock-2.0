import { Game } from "@repo/types";
import { Firestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions/v1";
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
export async function createGame(db: Firestore, game: Game) {
  const newGame = { ...getBaseGame(), ...game };
  logger.debug("Creating new game", { newGame });
  const ref = await db.collection("games").add(newGame);
  return ref.id;
}
