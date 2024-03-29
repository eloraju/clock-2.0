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
    duration: 0,
    turn: 1,
    currentPlayer: 0,
    ended: false,
  };
}

/**
 * Create a new game in the database.
 * @param {Firestore} db - The Firestore instance.
 * @param {Game} game - The new game object to create.
 * @return {Promise<string>} The ID of the newly created game.
 */
export async function createGame(db: Firestore, game: Game): Promise<string> {
  const newGame = { ...getBaseGame(), ...game };
  logger.debug("Creating new game", { newGame });
  const ref = await db.collection("games").add(newGame);
  return ref.id;
}
